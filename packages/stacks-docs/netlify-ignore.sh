#!/usr/bin/env bash
set -euo pipefail

# Netlify ignores the build when this script exits 0. Exit 1 to build.
repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

head_ref="${COMMIT_REF:-HEAD}"
base_ref="$head_ref^"

if ! git rev-parse --verify "$base_ref" >/dev/null 2>&1; then
    echo "Building docs deploy: no previous commit is available."
    exit 1
fi

version_files=(
    "packages/stacks-classic/package.json"
    "packages/stacks-svelte/package.json"
    "packages/stacks-utils/package.json"
)

if git diff --quiet "$base_ref" "$head_ref" -- "${version_files[@]}"; then
    echo "Skipping docs deploy: no package versions changed."
    exit 0
fi

echo "Building docs deploy: package versions changed."
exit 1
