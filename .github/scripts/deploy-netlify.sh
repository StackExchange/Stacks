#!/usr/bin/env bash

set -euo pipefail

: "${NETLIFY_API_TOKEN:?NETLIFY_API_TOKEN is required}"
: "${NETLIFY_SITE_ID:?NETLIFY_SITE_ID is required}"
: "${NETLIFY_BRANCH:?NETLIFY_BRANCH is required}"
: "${NETLIFY_DEPLOY_TITLE:?NETLIFY_DEPLOY_TITLE is required}"

api_url="https://api.netlify.com/api/v1"
encoded_title="$(printf '%s' "$NETLIFY_DEPLOY_TITLE" | jq -sRr @uri)"

build_response="$(curl --fail --silent --show-error --retry 3 --retry-all-errors \
  --request POST \
  --header "Authorization: Bearer $NETLIFY_API_TOKEN" \
  "$api_url/sites/$NETLIFY_SITE_ID/builds?branch=$NETLIFY_BRANCH&title=$encoded_title")"

build_id="$(jq -r '.id // empty' <<<"$build_response")"
deploy_id="$(jq -r '.deploy_id // empty' <<<"$build_response")"
build_error="$(jq -r '.error // empty' <<<"$build_response")"

if [[ -n "$build_error" || -z "$build_id" || -z "$deploy_id" ]]; then
  printf 'Netlify did not schedule the build: %s\n' "${build_error:-unexpected API response}" >&2
  exit 1
fi

printf 'Netlify build %s created for deploy %s.\n' "$build_id" "$deploy_id"

timeout_seconds="${NETLIFY_DEPLOY_TIMEOUT_SECONDS:-1800}"
poll_interval_seconds="${NETLIFY_DEPLOY_POLL_INTERVAL_SECONDS:-15}"
deadline=$((SECONDS + timeout_seconds))

while (( SECONDS < deadline )); do
  deploy_response="$(curl --fail --silent --show-error --retry 3 --retry-all-errors \
    --header "Authorization: Bearer $NETLIFY_API_TOKEN" \
    "$api_url/deploys/$deploy_id")"
  state="$(jq -r '.state // empty' <<<"$deploy_response")"

  case "$state" in
    ready)
      printf 'Netlify deploy %s succeeded.\n' "$deploy_id"
      exit 0
      ;;
    error)
      error_message="$(jq -r '.error_message // "unknown Netlify error"' <<<"$deploy_response")"
      printf 'Netlify deploy %s failed: %s\n' "$deploy_id" "$error_message" >&2
      exit 1
      ;;
    *)
      printf 'Netlify deploy %s is %s; waiting.\n' "$deploy_id" "${state:-unknown}"
      sleep "$poll_interval_seconds"
      ;;
  esac
done

printf 'Netlify deploy %s did not finish within %s seconds.\n' "$deploy_id" "$timeout_seconds" >&2
exit 1
