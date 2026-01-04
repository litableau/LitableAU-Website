# Environment Variables Setup for Deployment

## ⚠️ Important: Why It Works Locally But Not in Deployment

Environment variables in `.env.local` are **only available on your local machine**. When you deploy to GitHub Pages, Vercel, Netlify, or any other platform, you need to configure environment variables separately in that platform's settings.

## 🚀 Setting Up Environment Variables by Platform

### Option 1: Vercel (Recommended for Next.js)

If you're using Vercel (most common for Next.js projects):

1. **Go to your Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in and select your project

2. **Navigate to Settings**
   - Click on your project
   - Go to **Settings** → **Environment Variables**

3. **Add Environment Variable**
   - Click **Add New**
   - **Name**: `GOOGLE_APPS_SCRIPT_URL`
   - **Value**: Your Google Apps Script URL (from `GOOGLE_SHEETS_SETUP.md`)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**

4. **Redeploy**
   - Go to **Deployments** tab
   - Click the three dots (⋯) on your latest deployment
   - Select **Redeploy**
   - Or push a new commit to trigger automatic redeployment

### Option 2: Netlify

1. **Go to Netlify Dashboard**
   - Visit [netlify.com](https://netlify.com)
   - Sign in and select your site

2. **Navigate to Site Settings**
   - Click **Site settings** → **Environment variables**

3. **Add Environment Variable**
   - Click **Add variable**
   - **Key**: `GOOGLE_APPS_SCRIPT_URL`
   - **Value**: Your Google Apps Script URL
   - Click **Save**

4. **Redeploy**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**

### Option 3: GitHub Pages / GitHub Actions

If you're using GitHub Actions for deployment:

1. **Go to Repository Settings**
   - Navigate to your GitHub repository
   - Click **Settings** → **Secrets and variables** → **Actions**

2. **Add Secret**
   - Click **New repository secret**
   - **Name**: `GOOGLE_APPS_SCRIPT_URL`
   - **Secret**: Your Google Apps Script URL
   - Click **Add secret**

3. **Update GitHub Actions Workflow**
   - Edit your `.github/workflows/deploy.yml` (or create one)
   - Add the environment variable:
   ```yaml
   env:
     GOOGLE_APPS_SCRIPT_URL: ${{ secrets.GOOGLE_APPS_SCRIPT_URL }}
   ```

### Option 4: Other Platforms

For other platforms (Railway, Render, etc.):
- Look for "Environment Variables" or "Config Vars" in settings
- Add `GOOGLE_APPS_SCRIPT_URL` with your script URL
- Redeploy after adding

## 🔍 How to Find Your Google Apps Script URL

If you forgot your Google Apps Script URL:

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Click **Deploy** → **Manage deployments**
4. Click the edit icon (✏️) next to your deployment
5. Copy the **Web App URL**

It should look like:
```
https://script.google.com/macros/s/AKfycby.../exec
```

## ✅ Verification Steps

After setting up environment variables:

1. **Redeploy your application**
   - This is crucial - environment variables are only loaded during deployment

2. **Test the registration form**
   - Go to your deployed site
   - Try registering for an event
   - Check if it works

3. **Check deployment logs**
   - Look for any errors in your deployment platform's logs
   - The API route will log helpful information if there are issues

## 🐛 Troubleshooting

### Still Getting "Server configuration error"?

1. **Verify the variable name is correct**
   - Must be exactly: `GOOGLE_APPS_SCRIPT_URL`
   - Case-sensitive, no spaces

2. **Check if you redeployed**
   - Environment variables are only loaded during build/deployment
   - Make a small change and push, or manually trigger redeploy

3. **Verify the URL is correct**
   - Test the Google Apps Script URL directly in a browser
   - It should return a JSON response (may show an error, but should respond)

4. **Check deployment logs**
   - Look for errors during build
   - Check if environment variables are being loaded

5. **Test locally first**
   - Make sure it works with `.env.local` locally
   - This confirms your Google Apps Script is set up correctly

### Common Mistakes

❌ **Adding to `.env.local` and expecting it to work in deployment**
- `.env.local` is gitignored and only works locally

❌ **Forgetting to redeploy after adding variables**
- Changes only take effect after redeployment

❌ **Wrong variable name**
- Must match exactly: `GOOGLE_APPS_SCRIPT_URL`

❌ **Adding to wrong environment**
- Make sure to add to Production environment (or all environments)

## 🔒 Security Notes

- ✅ Environment variables in deployment platforms are encrypted
- ✅ Never commit `.env.local` to Git (it's already in `.gitignore`)
- ✅ Don't share your Google Apps Script URL publicly
- ✅ The URL itself is not sensitive, but keep it private to prevent abuse

## 📝 Quick Checklist

- [ ] Created Google Apps Script (see `GOOGLE_SHEETS_SETUP.md`)
- [ ] Copied the Web App URL
- [ ] Added `GOOGLE_APPS_SCRIPT_URL` to deployment platform
- [ ] Redeployed the application
- [ ] Tested registration form on deployed site
- [ ] Verified data appears in Google Sheet

## 🆘 Still Having Issues?

1. Check the browser console for client-side errors
2. Check your deployment platform's function logs
3. Verify your Google Apps Script is deployed and accessible
4. Test the Google Apps Script URL directly with a POST request

If you're still stuck, the issue might be:
- CORS configuration in Google Apps Script
- Google Apps Script deployment settings (must be "Anyone")
- Network/firewall blocking the request

