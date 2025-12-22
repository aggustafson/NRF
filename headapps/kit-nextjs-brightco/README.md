# BrightCo Next.js Head App

This is the head application for the BrightCo retail site built with Next.js and Sitecore Content SDK.

## Getting Started

1. Copy the environment template:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and provide values for the required environment variables:
   - `SITECORE_EDGE_CONTEXT_ID` - Context ID for XM Cloud Edge Platform (required for build)
   - `NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID` - Public Context ID for client-side API calls
   - `NEXT_PUBLIC_DEFAULT_SITE_NAME` - Site name (default: `brightco`)
   - `SITECORE_EDITING_SECRET` - Secret token for editing mode
   
   **To get these values:**
   - Go to [XM Cloud Deploy Portal](https://portal.sitecorecloud.io)
   - Select your Environment
   - Go to Developer Settings tab
   - Copy the values from the "Local Development" section
   
   For more information, see: [Environment variables in XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/get-the-environment-variables-for-a-site.html)

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

The app is configured to use the `brightco` site by default. This is set in `sitecore.config.ts`:

```typescript
export default defineConfig({
  defaultSite: 'brightco',
});
```

## Build

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Documentation

For more information, see:
- [Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html)
- [Next.js Documentation](https://nextjs.org/docs)

