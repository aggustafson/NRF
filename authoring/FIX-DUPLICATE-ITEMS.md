# Fixing Duplicate Items in Sitecore

## Issue
There are duplicate items with the same path but different IDs:
- **Path**: `/sitecore/content/retail/brightco/Presentation/Styles`
- **ID 1**: `385a3522-aed0-4837-b089-058926de225d`
- **ID 2**: `76f32ce5-b4c2-4bce-ae70-4465b48b2a4c`

## Steps to Fix

### 1. Access Sitecore Content Editor

1. Open your browser and navigate to:
   ```
   https://xmc-salesenginea32a-nrfa10f-nrff72a.sitecorecloud.io/sitecore
   ```

2. Log in with your Sitecore credentials

### 2. Navigate to the Duplicate Items

1. In the Content Editor, click on the **Content Tree** tab (left panel)
2. Navigate to: `/sitecore/content/retail/brightco/Presentation/Styles`
3. You should see the Styles item

### 3. Identify the Duplicate

Since both items have the same path, you'll need to check:

1. **Option A: Check by ID**
   - Right-click on the Styles item
   - Select **Properties** or view the item details
   - Check the Item ID in the properties panel
   - Note which one you want to keep

2. **Option B: Check Database**
   - The duplicates might be in different databases (master vs web)
   - Switch between databases using the database selector
   - Check both `master` and `web` databases

3. **Option C: Use Search**
   - Use the Search panel (usually top right)
   - Search for: `Styles` with path: `/sitecore/content/retail/brightco/Presentation/`
   - This will show all items with that name/path

### 4. Resolve the Duplicate

**Recommended Approach:**

1. **If items are in different databases:**
   - Keep the item in the `master` database
   - Delete or ignore the duplicate in `web` (it will be republished from master)

2. **If items are in the same database:**
   - Determine which item is the correct one (check last modified date, content, etc.)
   - **Option 1: Delete the duplicate**
     - Right-click on the duplicate item
     - Select **Delete**
     - Confirm deletion
   - **Option 2: Rename the duplicate**
     - Right-click on one of the items
     - Select **Rename**
     - Change the name to something like `Styles_Old` or `Styles_Backup`
     - This will change its path and resolve the conflict

3. **If you're unsure which to keep:**
   - Check the **Last Modified** date
   - Check the **Created** date
   - Review the item content/fields
   - Keep the most recent or most complete version

### 5. Verify the Fix

1. Navigate to `/sitecore/content/retail/brightco/Presentation/`
2. You should now see only ONE `Styles` item
3. If you renamed one, verify the path is now unique

### 6. Retry Serialization

After fixing the duplicate, run:

```powershell
cd authoring
dotnet sitecore ser pull -i retail-content
```

## Alternative: Use PowerShell Script

If you have access to Sitecore PowerShell, you can use this script to find and list duplicates:

```powershell
# Find items with duplicate paths
$path = "/sitecore/content/retail/brightco/Presentation/Styles"
$items = Get-ChildItem -Path $path -Recurse | Where-Object { $_.FullPath -like "*Styles*" }
$items | ForEach-Object {
    Write-Host "ID: $($_.ID) | Path: $($_.FullPath) | Database: $($_.Database.Name)"
}
```

## Need Help?

If you encounter issues:
1. Check Sitecore logs for more details
2. Verify you have proper permissions to delete/rename items
3. Consider backing up the items before deletion
4. Contact your Sitecore administrator if needed

