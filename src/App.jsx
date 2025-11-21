import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProjectPolicySpace from './pages/ProjectPolicySpace';
import Education from './pages/Education';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'policyspace':
        return <ProjectPolicySpace onBack={() => setCurrentView('home')} />;
      case 'education':
        return <Education onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <Home onNavigateToProject={setCurrentView} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        {currentView === 'home' && <Navigation />}
        {renderView()}

        {currentView === 'home' && (
          <footer className="bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 py-12 mt-12 border-t border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="font-bold text-xl text-slate-700 dark:text-slate-300 mb-1">{t('footer.title')}</div>
                <p className="text-sm">{t('footer.subtitle')}</p>
                <p className="text-xs mt-2 text-slate-400 dark:text-slate-500">{t('footer.location')}</p>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/agmalaga2020"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/albertogimenezmut"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:albertogimenezmut@gmail.com"
                  className="p-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
