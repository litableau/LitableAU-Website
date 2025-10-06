# 🚀 Team Sharing Guide - Literary Club Website

## 📦 What's Included in This Folder

This folder contains everything your team needs to run the Literary Club website locally:

```
litclub-team-page/
├── 📁 public/           # Static files and images
├── 📁 src/              # Source code
├── 📁 node_modules/     # Dependencies (auto-generated)
├── 📄 package.json      # Project configuration
├── 📄 README.md         # Detailed documentation
└── 📄 TEAM_SHARING_GUIDE.md  # This file
```

## 🎯 Quick Setup for Team Members

### Step 1: Prerequisites
Before starting, make sure you have:
- **Node.js** installed (version 14 or higher)
  - Download from: https://nodejs.org/
  - Choose the "LTS" version (recommended)

### Step 2: Setup Process
1. **Extract/Copy the folder** to your desired location
2. **Open Terminal/Command Prompt** in the project folder
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the website**:
   ```bash
   npm start
   ```
5. **Open your browser** and go to: http://localhost:3000

## 🖼️ Adding Team Member Photos

### For Non-Technical Team Members:
1. **Prepare your photo**:
   - Square format (400x400px recommended)
   - Good quality, professional look
   - Formats: JPG, PNG, or WEBP

2. **Name your photo file**:
   - Use your exact name as it appears on the website
   - Remove spaces, use camelCase
   - Examples:
     - "Harish Prabu" → `HarishPrabu.jpg`
     - "Sonali Shruthi" → `SonaliShruthi.jpg`
     - "C.S Abhinav" → `CSAbhinav.jpg`

3. **Add to the website**:
   - Place your photo in the `public/images/` folder
   - The website will automatically display it

### Current Team Photos Available:
✅ Photos already added for 30+ team members
📁 Located in: `public/images/` folder

## 🔧 For Team Leaders & Coordinators

### Sharing This Project:
1. **Zip the entire folder** (including node_modules if present)
2. **Share via**:
   - Google Drive
   - OneDrive
   - USB drive
   - Email (if size permits)

### Managing Team Updates:
1. **Collect photos** from team members
2. **Follow naming convention** (see above)
3. **Test locally** before sharing updates
4. **Re-share the updated folder**

## 🌐 Deployment Options

### Option 1: Netlify (Easiest)
1. Run `npm run build`
2. Drag the `build/` folder to netlify.com
3. Get instant live website link

### Option 2: GitHub Pages
1. Create GitHub repository
2. Push code to repository
3. Enable GitHub Pages in settings

### Option 3: Vercel
1. Connect your GitHub repository
2. Automatic deployments on every update

## 📱 Device Testing

The website works perfectly on:
- 💻 **Desktop**: Chrome, Firefox, Safari, Edge
- 📱 **Mobile**: iOS Safari, Android Chrome
- 📟 **Tablet**: iPad, Android tablets
- 🖥️ **Screen sizes**: 320px to 4K displays

## 🆘 Troubleshooting

### "npm not found" error:
- Install Node.js from https://nodejs.org/
- Restart your terminal/command prompt

### "Port 3000 already in use":
- The system will automatically suggest another port
- Or use: `PORT=3001 npm start`

### Photos not showing:
- Check file name matches exactly (case-sensitive)
- Ensure photo is in `public/images/` folder
- Supported formats: JPG, PNG, WEBP

### Website not loading:
- Check if `npm install` completed successfully
- Try deleting `node_modules/` and running `npm install` again
- Ensure you're in the correct folder

## 📞 Getting Help

### For Technical Issues:
1. Check the browser console (F12 → Console tab)
2. Contact the Tech team members
3. Share error messages for faster help

### For Content Updates:
1. Contact department coordinators
2. Provide specific change requests
3. Include updated photos/information

## 🎉 Success Checklist

Before sharing with your team, ensure:
- [ ] Website runs locally (`npm start` works)
- [ ] All team photos are properly named and placed
- [ ] README.md is updated with current information
- [ ] No error messages in browser console
- [ ] Tested on mobile device (if possible)

## 📋 Team Member Responsibilities

### Department Heads:
- [ ] Verify all team members are listed correctly
- [ ] Collect and organize team photos
- [ ] Test the website before team sharing

### Team Members:
- [ ] Provide high-quality photos
- [ ] Follow naming conventions
- [ ] Report any issues or corrections needed

### Tech Team:
- [ ] Handle technical troubleshooting
- [ ] Manage deployments and updates
- [ ] Assist with setup issues

---

## 🎊 Ready to Share!

Your Literary Club website is now ready to be shared with the entire team. Each member can follow this guide to run the website locally and see the amazing work you've all created together!

**Happy sharing! 🚀**

---

*For detailed technical documentation, see the main README.md file.*