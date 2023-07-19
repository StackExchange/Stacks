$current_dir = if ($env:OS -eq "Windows_NT") { Get-Location } else { pwd }

$dockerfile_path = Join-Path $current_dir "Dockerfile"
@"
FROM mcr.microsoft.com/playwright:v1.36.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npm ci
"@ | Set-Content $dockerfile_path
docker build -t stacks/test-visual -q -f $dockerfile_path . > $null
Remove-Item $dockerfile_path

docker run --tty --rm -p 8000:8000 `
  -v "${current_dir}/lib:/app/lib" `
  -v "${current_dir}/screenshots:/app/screenshots" `
  -v "${current_dir}/web-test-runner.config.mjs:/app/web-test-runner.config.mjs" `
  -v "${current_dir}/web-test-runner.config.ci.mjs:/app/web-test-runner.config.ci.mjs" `
  -v "${current_dir}/web-dev-server-patches.mjs:/app/web-dev-server-patches.mjs" `
  stacks/test-visual @args
