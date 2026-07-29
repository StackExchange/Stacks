#!/usr/bin/env bash
set -euo pipefail

# Netlify ignores the build when this script exits 0. Exit 1 to build.
if [[ "${CONTEXT:-}" == "deploy-preview" || "${CONTEXT:-}" == "branch-deploy" ]]; then
    echo "Building docs deploy: ${CONTEXT} context."
    exit 1
fi

echo "Skipping docs deploy: production deploys require a build hook."
exit 0
