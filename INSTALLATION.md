# Installation & Setup Guide

## Prerequisites

- Node.js 18+
- npm or yarn

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- Vite
- TailwindCSS
- Recharts
- i18next
- Lucide React

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Environment Setup

No environment variables are required for the basic setup.

## Customization

### Adding New Projects

Edit `src/data/projects.js`:

```javascript
{
  id: 'my-project',
  slug: 'my-project',
  featured: true,
  published: true,
  date: '2025-01-15',
  category: 'machine-learning',
  technologies: ['Python', 'TensorFlow'],
  github: [{ name: 'Repository', url: 'https://github.com/...' }],
  demo: 'https://demo-url.com',
  // ...
}
```

### Updating Translations

Edit translation files:
- Spanish: `src/i18n/locales/es.json`
- English: `src/i18n/locales/en.json`

### Customizing Theme

Edit `tailwind.config.js` to modify colors, fonts, and other design tokens.

## Deployment

### GitHub Pages (Automatic)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the main branch or any branch starting with `claude/`.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting provider.

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check Node.js version:
   ```bash
   node --version  # Should be 18+
   ```

### Development Server Issues

If the dev server doesn't start:

1. Check if port 3000 is in use
2. Modify port in `vite.config.js`

## Support

For issues or questions:
- Email: albertogimenezmut@gmail.com
- GitHub: https://github.com/agmalaga2020
