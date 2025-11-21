import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Database, Brain, Award } from 'lucide-react';

// Data Science Skills Progress
const skillsData = [
  { skill: 'Python', level: 95 },
  { skill: 'Machine Learning', level: 90 },
  { skill: 'SQL', level: 88 },
  { skill: 'Data Viz', level: 92 },
  { skill: 'Cloud (AWS/Azure)', level: 85 },
  { skill: 'Financial Modeling', level: 87 },
];

// Project Impact Metrics
const impactData = [
  { year: '2021', projects: 2, impact: 65 },
  { year: '2022', projects: 3, impact: 75 },
  { year: '2023', projects: 5, impact: 85 },
  { year: '2024', projects: 7, impact: 95 },
];

// Tech Stack Distribution
const techStackData = [
  { name: 'Python/R', value: 35, color: '#3b82f6' },
  { name: 'Cloud & DevOps', value: 25, color: '#8b5cf6' },
  { name: 'Data Viz', value: 20, color: '#06b6d4' },
  { name: 'ML/AI', value: 20, color: '#10b981' },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'];

const InteractiveCharts = () => {
  const [activeChart, setActiveChart] = useState('skills');

  const charts = {
    skills: {
      title: 'Technical Skills',
      icon: Brain,
      color: 'blue',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={skillsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="skill" tick={{ fill: '#64748b', fontSize: 12 }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="level" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    impact: {
      title: 'Project Evolution',
      icon: TrendingUp,
      color: 'purple',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fill: '#64748b', fontSize: 12 }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="projects" stroke="#8b5cf6" strokeWidth={3} name="Projects" />
            <Line type="monotone" dataKey="impact" stroke="#06b6d4" strokeWidth={3} name="Impact Score" />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    techStack: {
      title: 'Tech Stack Distribution',
      icon: Database,
      color: 'cyan',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={techStackData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {techStackData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
      {/* Chart Selector */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.entries(charts).map(([key, { title, icon: Icon, color }]) => (
          <button
            key={key}
            onClick={() => setActiveChart(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeChart === key
                ? `bg-${color}-600 text-white shadow-lg scale-105`
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm">{title}</span>
          </button>
        ))}
      </div>

      {/* Chart Display */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          {(() => {
            const Icon = charts[activeChart].icon;
            return <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
          })()}
          {charts[activeChart].title}
        </h3>
        {charts[activeChart].component}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {[
          { label: 'Years Experience', value: '13+', icon: Award },
          { label: 'Projects', value: '20+', icon: Database },
          { label: 'Technologies', value: '15+', icon: Brain },
          { label: 'Grade Average', value: '9.1', icon: TrendingUp },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-700 rounded-lg p-4 text-center border border-slate-200 dark:border-slate-600 hover:shadow-md transition"
          >
            <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveCharts;
