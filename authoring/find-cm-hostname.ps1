# Script to help identify the XM Cloud CM hostname
# 
# The CM hostname for XM Cloud is typically found in one of these ways:
#
# Method 1: XM Cloud Deploy Portal
# 1. Go to https://portal.sitecorecloud.io
# 2. Navigate to your project
# 3. Select your environment
# 4. Check the "Details" tab for "Environment host name"
#
# Method 2: Based on your rendering host URL
# If your rendering host is: https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io/
# Your CM hostname is likely: xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io
# (The CM is accessed at the same domain, typically at /sitecore path)

Write-Host "=== XM Cloud CM Hostname Finder ===" -ForegroundColor Cyan
Write-Host ""

# Try to get current environment info
Write-Host "Checking current Sitecore CLI environment..." -ForegroundColor Yellow
$envInfo = dotnet sitecore environment show 2>&1
Write-Host $envInfo

Write-Host ""
Write-Host "=== How to Find Your CM Hostname ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Option 1: XM Cloud Deploy Portal" -ForegroundColor Green
Write-Host "  1. Visit: https://portal.sitecorecloud.io" -ForegroundColor White
Write-Host "  2. Go to your Project" -ForegroundColor White
Write-Host "  3. Select your Environment" -ForegroundColor White
Write-Host "  4. Check the 'Details' tab for 'Environment host name'" -ForegroundColor White
Write-Host ""
Write-Host "Option 2: Based on Your Rendering Host URL" -ForegroundColor Green
Write-Host "  If your rendering host is: https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io/" -ForegroundColor White
Write-Host "  Your CM hostname is likely: xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io" -ForegroundColor Yellow
Write-Host ""
Write-Host "Option 3: Try Connecting" -ForegroundColor Green
Write-Host "  Once you have the hostname, connect using:" -ForegroundColor White
Write-Host "  dotnet sitecore connect --ref xmcloud --cm https://<your-cm-hostname> --allow-write true -n default" -ForegroundColor Yellow
Write-Host ""

# Prompt for hostname
$hostname = Read-Host "Enter your CM hostname (or press Enter to use the pattern above)"
if ([string]::IsNullOrWhiteSpace($hostname)) {
    $hostname = "xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io"
    Write-Host "Using default: $hostname" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Attempting to connect to: https://$hostname" -ForegroundColor Cyan
Write-Host ""

# Try to connect
dotnet sitecore connect --ref xmcloud --cm "https://$hostname" --allow-write true -n default

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Successfully connected to CM!" -ForegroundColor Green
    Write-Host "Your CM hostname is: $hostname" -ForegroundColor Green
    Write-Host ""
    Write-Host "Now you can serialize the retail site:" -ForegroundColor Cyan
    Write-Host "  dotnet sitecore ser pull -i retail-content" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "✗ Connection failed. Please check:" -ForegroundColor Red
    Write-Host "  1. The hostname is correct" -ForegroundColor White
    Write-Host "  2. You're logged into Sitecore Cloud (dotnet sitecore cloud login)" -ForegroundColor White
    Write-Host "  3. You have access to this environment" -ForegroundColor White
    Write-Host ""
    Write-Host "Find the correct hostname in the XM Cloud Deploy Portal:" -ForegroundColor Yellow
    Write-Host "  https://portal.sitecorecloud.io" -ForegroundColor Cyan
}

