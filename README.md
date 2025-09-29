# 📚 Literary Club Team Page

A beautiful, responsive team page for the Literary Club showcasing all departments and team members with modern design and interactive features.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Member Cards**: Click on any member to view detailed information in a modal
- **Department Navigation**: Easy switching between different club departments
- **Modern Typography**: Beautiful font combinations (Playfair Display, Inter, Crimson Text, Poppins)
- **Smooth Animations**: Engaging hover effects and transitions
- **Accessibility**: Touch-friendly interface with proper contrast ratios
- **Placeholder Support**: Elegant initials display for members without profile photos

## 🏗️ Project Structure

```
litclub-team-page/
├── public/
│   ├── images/           # Team member photos and assets
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── TeamPage.js   # Main team page component
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd litclub-team-page
   
   # Or extract the shared folder and navigate to it
   cd litclub-team-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will automatically reload when you make changes

## 📱 Device Compatibility

This application is fully compatible with:
- **Desktop browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Screen sizes**: From 320px (mobile) to 4K displays
- **Touch devices**: Optimized touch targets and interactions

## 🎨 Departments Included

- **Leadership**: Club executives and core leadership team
- **Events**: Event planning and coordination team
- **Operations & Logistics**: Behind-the-scenes operations team
- **Media & Marketing**: Promotion and outreach specialists
- **Contents**: Writers and content creators
- **Design**: Visual design and creative team
- **External Relations**: Partnership and collaboration managers
- **Photography**: Visual storytelling specialists
- **Tech**: Technical development and support team

## 🛠️ Available Scripts

### Development
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

### Production Deployment
- `npm run build` - Creates optimized production build in `build/` folder
- Deploy the `build/` folder to any static hosting service

## 📝 Customization Guide

### Adding New Team Members

1. Open `src/components/TeamPage.js`
2. Find the `teamData` object (around line 1470)
3. Add new member to the appropriate department:

```javascript
{
  name: "Member Name",
  role: "Member Role",
  image: "/images/member-photo.jpg" // Optional
}
```

### Adding Member Photos

1. Place photos in `public/images/` folder
2. Use format: `member-name.jpg` (lowercase, hyphens for spaces)
3. Recommended size: 400x400px, square format

### Updating Department Information

- Modify department names in the `departments` array
- Update inspirational quotes in the member card rendering section
- Customize colors and styling in the styled-components

## 🎯 Team Collaboration

### For Team Members

1. **Viewing the Site**: Simply open the shared folder and follow the Quick Start guide
2. **Suggesting Changes**: Contact the tech team with specific requests
3. **Adding Photos**: Send high-quality square photos to the tech team

### For Developers

1. **Code Style**: Uses styled-components for CSS-in-JS
2. **Responsive Design**: Mobile-first approach with multiple breakpoints
3. **State Management**: React hooks for modal and navigation state
4. **Performance**: Optimized animations and efficient re-renders

## 🌐 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the `build/` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Perfect for open-source projects
- **Firebase Hosting**: Google's hosting solution

### Traditional Hosting
- Upload `build/` folder contents to your web server
- Ensure server supports single-page applications (SPA)

## 🔧 Troubleshooting

### Common Issues

1. **Dependencies not installing**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port 3000 already in use**
   ```bash
   # The app will prompt to use a different port
   # Or specify a custom port:
   PORT=3001 npm start
   ```

3. **Images not loading**
   - Ensure images are in `public/images/` folder
   - Check file names match exactly (case-sensitive)
   - Verify image formats (jpg, png, webp supported)

## 📞 Support

For technical support or questions:
- Contact the Tech department team members
- Check the browser console for error messages
- Ensure all dependencies are properly installed

## 🎉 Contributing

1. Make changes to your local copy
2. Test thoroughly on different devices
3. Share your changes with the team
4. Coordinate with the tech team for deployment

---

**Built with ❤️ for the Literary Club**

*This project showcases our amazing team and celebrates the diverse talents that make our literary community thrive.*
