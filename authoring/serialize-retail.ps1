# Script to serialize the /sitecore/content/retail site
# Make sure you're logged into Sitecore first:
#   dotnet sitecore cloud login
#   dotnet sitecore connect --ref xmcloud --cm <your-cm-url> --allow-write true -n default

Write-Host "Pulling retail site content from Sitecore..." -ForegroundColor Green
dotnet sitecore ser pull -i retail-content

if ($LASTEXITCODE -eq 0) {
    Write-Host "Retail site content serialized successfully!" -ForegroundColor Green
    Write-Host "Serialized items are located in: authoring/items/retail-content/" -ForegroundColor Green
} else {
    Write-Error "Failed to serialize retail site content. Make sure you're logged into Sitecore."
}

