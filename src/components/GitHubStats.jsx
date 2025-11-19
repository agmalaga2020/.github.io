import React, { useState, useEffect } from 'react';
import { Github, GitBranch, Calendar, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GitHubStats = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/agmalaga2020');
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/agmalaga2020/repos?per_page=100');
        const reposData = await reposResponse.json();

        // Calculate stats
        const nonForkRepos = reposData.filter(repo => !repo.fork);
        const languagesCount = {};

        // Count languages
        nonForkRepos.forEach(repo => {
          if (repo.language) {
            languagesCount[repo.language] = (languagesCount[repo.language] || 0) + 1;
          }
        });

        // Sort languages by frequency
        const topLanguages = Object.entries(languagesCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([lang, count]) => ({
            name: lang,
            count: count,
            percentage: Math.round((count / nonForkRepos.length) * 100)
          }));

        // Calculate years on GitHub
        const accountCreated = new Date(userData.created_at);
        const yearsOnGitHub = Math.floor((new Date() - accountCreated) / (1000 * 60 * 60 * 24 * 365));

        setStats({
          totalRepos: userData.public_repos,
          originalRepos: nonForkRepos.length,
          yearsActive: yearsOnGitHub,
          topLanguages: topLanguages,
          bio: userData.bio
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback data
        setStats({
          totalRepos: 17,
          originalRepos: 5,
          yearsActive: 5,
          topLanguages: [
            { name: 'Python', count: 8, percentage: 47 },
            { name: 'Jupyter Notebook', count: 6, percentage: 35 },
            { name: 'HTML', count: 2, percentage: 12 },
            { name: 'JavaScript', count: 1, percentage: 6 }
          ]
        });
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading || !stats) {
    return (
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const languageColors = {
    'Python': '#3776ab',
    'Jupyter Notebook': '#DA5B0B',
    'JavaScript': '#f1e05a',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'R': '#198CE7',
    'SQL': '#e38c00'
  };

  return (
    <div className="py-12 px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Github className="w-8 h-8 text-slate-900 dark:text-white" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t('githubStats.title', 'GitHub Activity')}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Repos */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  {t('githubStats.publicRepos', 'Public Repositories')}
                </p>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">
                  {stats.totalRepos}
                </p>
              </div>
              <GitBranch className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          {/* Original Projects */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  {t('githubStats.originalProjects', 'Original Projects')}
                </p>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">
                  {stats.originalRepos}+
                </p>
              </div>
              <Code2 className="w-8 h-8 text-green-500" />
            </div>
          </div>

          {/* Years Active */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  {t('githubStats.yearsActive', 'Years on GitHub')}
                </p>
                <p className="text-4xl font-bold text-slate-900 dark:text-white">
                  {stats.yearsActive}+
                </p>
              </div>
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Top Languages */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            {t('githubStats.topLanguages', 'Most Used Languages')}
          </h3>
          <div className="space-y-4">
            {stats.topLanguages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[lang.name] || '#64748b' }}
                    ></div>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {lang.count} {t('githubStats.projects', 'projects')} ({lang.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: languageColors[lang.name] || '#64748b'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* View Profile Link */}
          <a
            href="https://github.com/agmalaga2020"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            {t('githubStats.viewProfile', 'View Full GitHub Profile')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
