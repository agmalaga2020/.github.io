import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, GraduationCap, Briefcase, Building2, Code2, TrendingUp, ArrowRight, Award, Globe, Database, Brain, FileText, ExternalLink, MonitorPlay, Layout } from 'lucide-react';
import InteractiveCharts from '../components/InteractiveCharts';
import { getFeaturedProjects } from '../data/projects';

const Home = ({ onNavigateToProject }) => {
  const { t } = useTranslation();
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100 dark:border-blue-800 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> {t('home.badge1')}
              </span>
              <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider rounded-full border border-purple-100 dark:border-purple-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {t('home.badge2')}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight animate-slide-up">
              {t('home.title')}
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-slate-300 font-medium mb-8 leading-snug animate-slide-up">
              {t('home.subtitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">{t('home.subtitleHighlight')}</span>.
            </h2>

            <p
              className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl animate-fade-in"
              dangerouslySetInnerHTML={{ __html: t('home.description') }}
            />

            <div className="flex flex-wrap gap-3 mb-12 animate-fade-in">
              {t('home.skills', { returnObjects: true }).map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Data Visualization */}
          <div className="mt-16 animate-fade-in" data-animate>
            <InteractiveCharts />
          </div>
        </div>
      </section>

      {/* Impact & Track Record */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              {t('home.impactTitle')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
              {t('home.impactSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder Experience */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-100 dark:shadow-slate-900/50 hover:-translate-y-1 transition duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                {t('home.founder.years')}
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{t('home.founder.title')}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">{t('home.founder.category')}</p>
              <p
                className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('home.founder.description') }}
              />
            </div>

            {/* Datathon 2024 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{t('home.datathon2024.title')}</h3>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-4">{t('home.datathon2024.category')}</p>
              <p
                className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('home.datathon2024.description') }}
              />
            </div>

            {/* Datathon 2023 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{t('home.datathon2023.title')}</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">{t('home.datathon2023.category')}</p>
              <p
                className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('home.datathon2023.description') }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">{t('home.portfolioTitle')}</h2>
              <p className="text-slate-500 dark:text-slate-400">{t('home.portfolioSubtitle')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PolicySpace2 Project Card */}
            <div
              onClick={() => onNavigateToProject('policyspace')}
              className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-64 bg-slate-100 dark:bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900 group-hover:scale-105 transition duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-24 h-24 text-white opacity-20 group-hover:opacity-40 transition duration-500" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold mb-3">
                    <Award className="w-3 h-3" /> {t('projects.policyspace.badge')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('projects.policyspace.title')}</h3>
                  <p className="text-blue-100 text-sm line-clamp-2 opacity-90">
                    {t('projects.policyspace.description')}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {t('projects.policyspace.tags', { returnObjects: true }).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 bg-slate-50 dark:bg-slate-700 px-2 py-1 rounded border border-slate-100 dark:border-slate-600">
                        <Code2 className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                    {t('projects.policyspace.viewDetails')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Financial Analysis Project Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="h-64 bg-slate-50 dark:bg-slate-700 relative flex items-center justify-center border-b border-slate-100 dark:border-slate-600">
                <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-600"></div>
                <Brain className="w-20 h-20 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition duration-500" />
                <div className="absolute top-6 right-6 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold px-2 py-1 rounded">
                  {t('projects.financial.badge')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {t('projects.financial.title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-3">
                  {t('projects.financial.description')}
                </p>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t('projects.financial.tags', { returnObjects: true }).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 bg-slate-50 dark:bg-slate-700 px-2 py-1 rounded border border-slate-100 dark:border-slate-600">
                      <Code2 className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('nav.contact')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Abierto a nuevas oportunidades y colaboraciones en Data Science y Business Strategy.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/agmalaga2020"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm hover:shadow-md"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/albertogimenezmut"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm hover:shadow-md"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:albertogimenezmut@gmail.com"
              className="p-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm hover:shadow-md"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
