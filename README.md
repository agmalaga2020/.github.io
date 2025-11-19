# Alberto Giménez Mut - Data Science Portfolio

> Modern, multilingual portfolio showcasing Data Science projects and business expertise.

## 🚀 Features

- **Multilingual Support**: Spanish & English (i18next)
- **Dark Mode**: Persistent theme with system preference detection
- **Interactive Visualizations**: Recharts-powered data dashboards
- **Responsive Design**: TailwindCSS with mobile-first approach
- **Blog System**: Dynamic project showcase with detailed views
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Vite build system

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **i18n**: react-i18next
- **Routing**: React Router DOM

## 📦 Installation

```bash
npm install
```

## 🧑‍💻 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Deploy

Automatically deployed to GitHub Pages via GitHub Actions on push to main branch.

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navigation.jsx
│   └── InteractiveCharts.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   └── ProjectPolicySpace.jsx
├── contexts/        # React contexts
│   └── ThemeContext.jsx
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization
│   ├── config.js
│   └── locales/
│       ├── en.json
│       └── es.json
├── data/            # Static data
│   └── projects.js
├── utils/           # Utility functions
└── App.jsx          # Main app component
```

## 🎨 Adding New Projects

Edit `src/data/projects.js` to add new projects to the portfolio:

```javascript
{
  id: 'project-slug',
  slug: 'project-slug',
  featured: true,
  published: true,
  date: '2025-01-15',
  category: 'data-science',
  technologies: ['Python', 'React'],
  github: [],
  demo: 'https://demo-url.com',
  // ... more fields
}
```

## 📝 License

© 2025 Alberto Giménez Mut. All rights reserved.

## 📧 Contact

- **Email**: albertogimenezmut@gmail.com
- **LinkedIn**: [albertogimenezmut](https://www.linkedin.com/in/albertogimenezmut)
- **GitHub**: [agmalaga2020](https://github.com/agmalaga2020)
