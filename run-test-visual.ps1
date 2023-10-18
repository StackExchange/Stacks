$current_dir = if ($env:OS -eq "Windows_NT") { Get-Location } else { pwd }

$dockerfile = @"
FROM mcr.microsoft.com/playwright:v1.39.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npm ci
"@

$dockerfile_path = (New-TemporaryFile).FullName
$dockerfile | Set-Content $dockerfile_path
docker build -t stacks/test-visual -q -f $dockerfile_path . > $null
Remove-Item $dockerfile_path

docker run --tty --rm -p 8000:8000 `
  -v "${current_dir}/lib:/app/lib" `
  -v "${current_dir}/screenshots:/app/screenshots" `
  -v "${current_dir}/web-test-runner.config.mjs:/app/web-test-runner.config.mjs" `
  -v "${current_dir}/web-test-runner.config.ci.mjs:/app/web-test-runner.config.ci.mjs" `
  -v "${current_dir}/web-dev-server-patches.mjs:/app/web-dev-server-patches.mjs" `
  stacks/test-visual @args

exit $LASTEXITCODE
