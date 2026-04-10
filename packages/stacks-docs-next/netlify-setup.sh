#!/usr/bin/env bash

# Credit goes to fool and hongaar at
# https://community.netlify.com/t/support-guide-using-an-ssh-key-via-environment-variable-during-build/2457

# Check if we’re running in a Netlify environment
# See https://www.netlify.com/docs/continuous-deployment/#environment-variables
if [ ! -z "${DEPLOY_PRIME_URL}" ]; then
    # Init .ssh dir and expand $GITHUB_SUBMODULE_KEY
    mkdir -p ~/.ssh
    echo -e "${GITHUB_SUBMODULE_KEY//_/\\n}" > ~/.ssh/id_rsa
    chmod og-rwx ~/.ssh/id_rsa

    # Add host keys
    ssh-keyscan -H github.com >> ~/.ssh/known_hosts
fi;
