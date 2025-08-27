$current_dir = if ($env:OS -eq "Windows_NT") { Get-Location } else { pwd }

$dockerfile = @"
# syntax=docker/dockerfile:1.7-labs
# https://stackoverflow.com/a/78393564/1458738

FROM mcr.microsoft.com/playwright:v1.50.1-jammy
WORKDIR /app
COPY package*.json ./
COPY --parents packages/*/package.json ./
RUN npm ci
"@

$dockerfile_path = (New-TemporaryFile).FullName
$dockerfile | Set-Content $dockerfile_path

Write-Host 'Building docker image...'
docker build -t stacks/test-visual -q -f $dockerfile_path . > $null
Remove-Item $dockerfile_path

Write-Host 'Running docker container...'
docker run --tty --rm -p 8000:8000 `
  -v "${current_dir}/packages/stacks-classic/lib:/app/lib" `
  -v "${current_dir}/screenshots:/app/screenshots" `
  -v "${current_dir}/web-test-runner.config.mjs:/app/web-test-runner.config.mjs" `
  -v "${current_dir}/web-test-runner.config.ci.mjs:/app/web-test-runner.config.ci.mjs" `
  stacks/test-visual @args

Write-Host "Exited with status code $LASTEXITCODE"
exit $LASTEXITCODE
