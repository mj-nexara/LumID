Write-Host "🔐 Signing Manifest..."
node scripts/sign-manifest.js

Write-Host "🔍 Verifying Manifest..."
node scripts/verify-manifest.js

Write-Host "✅ LumID Completed. Signed and Verified."
Start notepad README.md