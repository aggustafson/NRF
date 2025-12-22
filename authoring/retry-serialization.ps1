# Script to retry serialization after fixing duplicate items
# Make sure you've fixed the duplicate items in Sitecore first!

Write-Host "=== Retrying Retail Site Serialization ===" -ForegroundColor Cyan
Write-Host ""

# Check if connected to Sitecore
Write-Host "Checking Sitecore connection..." -ForegroundColor Yellow
$envCheck = dotnet sitecore environment current 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not connected to Sitecore. Connecting..." -ForegroundColor Yellow
    dotnet sitecore connect --ref xmcloud --cm https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io --allow-write true -n default
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to connect to Sitecore. Please check your connection."
        exit 1
    }
}

Write-Host "Connected to Sitecore!" -ForegroundColor Green
Write-Host ""

# Pull serialized items
Write-Host "Pulling retail site content from Sitecore..." -ForegroundColor Green
dotnet sitecore ser pull -i retail-content

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Retail site content serialized successfully!" -ForegroundColor Green
    Write-Host "Serialized items are located in: authoring/items/retail-content/" -ForegroundColor Green
    Write-Host ""
    
    # Show summary
    $itemCount = (Get-ChildItem -Path "items/retail-content" -Recurse -Filter "*.yml" -ErrorAction SilentlyContinue | Measure-Object).Count
    if ($itemCount -gt 0) {
        Write-Host "Total serialized items: $itemCount" -ForegroundColor Cyan
    }
} else {
    Write-Host ""
    Write-Host "✗ Serialization failed. Possible issues:" -ForegroundColor Red
    Write-Host "  1. Duplicate items still exist in Sitecore" -ForegroundColor White
    Write-Host "  2. Connection issues" -ForegroundColor White
    Write-Host "  3. Permission issues" -ForegroundColor White
    Write-Host ""
    Write-Host "Please check the error message above and refer to FIX-DUPLICATE-ITEMS.md for guidance." -ForegroundColor Yellow
}

