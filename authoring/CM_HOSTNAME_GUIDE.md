# Finding Your XM Cloud CM Hostname

Based on your rendering host URL: `https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io/`

## Quick Answer

Your CM hostname is most likely:
```
xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io
```

For XM Cloud, the Content Management (CM) server typically uses the same base hostname as your rendering host.

## Method 1: XM Cloud Deploy Portal (Most Reliable)

1. Go to [Sitecore Cloud Portal](https://portal.sitecorecloud.io/)
2. Log in with your credentials
3. Navigate to **XM Cloud Deploy**
4. Select your **Project**
5. Click on your **Environment**
6. Go to the **Details** tab
7. Look for **"Environment host name"** or **"CM URL"**
8. Copy the hostname (without `https://` and trailing `/`)

## Method 2: Developer Settings

1. In the XM Cloud Deploy Portal, select your environment
2. Go to the **Developer Settings** tab
3. Look for the **CM URL** or **Content Management URL**
4. The hostname will be shown there

## Method 3: Try the Pattern

Based on your rendering host URL pattern, try:
- Hostname: `xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io`
- Full URL: `https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io`

## Connecting to Your CM

Once you have the hostname, connect using:

```powershell
dotnet sitecore connect --ref xmcloud --cm https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io --allow-write true -n default
```

## Serializing the Retail Site

After connecting, serialize the retail site:

```powershell
cd authoring
dotnet sitecore ser pull -i retail-content
```

Or use the helper script:

```powershell
.\authoring\serialize-retail.ps1
```

