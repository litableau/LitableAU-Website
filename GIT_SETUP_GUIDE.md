# 🚀 Git Setup Guide for Literary Club Website

## 📋 Quick Setup Commands

After creating your GitHub repository, run these commands in your terminal:

```bash
# Navigate to your project directory
cd /Users/raamji/Documents/trae_projects/Litclub/litclub-team-page

# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/litclub-team-page.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## 🌐 For Team Members: How to Run the Project

### **Prerequisites:**
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/litclub-team-page.git
cd litclub-team-page
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Start Development Server**
```bash
npm start
```

The website will open at: `http://localhost:3000`

### **Step 4: Build for Production**
```bash
npm run build
```

## 📱 Project Features
- ✅ 30+ team member profiles with photos
- ✅ 6 departments with filtering
- ✅ Mobile & desktop responsive
- ✅ Professional animations
- ✅ Touch-optimized interface

## 🛠️ Available Scripts
- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure
```
litclub-team-page/
├── public/
│   ├── images/          # Team member photos
│   └── index.html
├── src/
│   ├── components/      # React components
│   ├── App.js          # Main application
│   └── index.js        # Entry point
├── build/              # Production build (after npm run build)
├── README.md           # Project documentation
├── TEAM_SHARING_GUIDE.md
├── DEPLOYMENT.md
└── package.json        # Dependencies and scripts
```

## 🚀 Deployment Options
1. **Netlify** - Drag & drop build folder
2. **Vercel** - Connect GitHub repository
3. **GitHub Pages** - Run `npm run deploy`
4. **Firebase Hosting** - Follow deployment guide

## 🆘 Troubleshooting
- **Port 3000 in use:** Try `npm start -- --port 3001`
- **Dependencies error:** Delete `node_modules` and run `npm install`
- **Build fails:** Check for unused variables in components
- **Images not loading:** Ensure images are in `public/images/` folder

## 📞 Support
For issues or questions, contact the development team or check the documentation files in the project root.