#!/bin/bash

current_dir=$(if [ "$(uname)" == "Darwin" ]; then echo $(pwd); else echo ${PWD}; fi)

image_hash=$(docker build -q -f- . <<EOF
FROM mcr.microsoft.com/playwright:v1.36.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npm ci
EOF
)

docker run -it --tty --rm -p 8000:8000 \
  -v $current_dir/lib:/app/lib \
  -v $current_dir/screenshots:/app/screenshots \
  -v $current_dir/web-test-runner.config.mjs:/app/web-test-runner.config.mjs \
  -v $current_dir/web-test-runner.config.ci.mjs:/app/web-test-runner.config.ci.mjs \
  -v $current_dir/web-dev-server-patches.mjs:/app/web-dev-server-patches.mjs \
  $image_hash "$@"
