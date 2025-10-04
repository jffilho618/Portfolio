// Mapeamento de tecnologias para ícones e cores
export const techIconMap: Record<string, { icon: string; color: string }> = {
  // Frontend
  "HTML": { icon: "🌐", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  "CSS": { icon: "🎨", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  "JavaScript": { icon: "⚡", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  "TypeScript": { icon: "📘", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
  "React": { icon: "⚛️", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  "Vue.js": { icon: "💚", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  "Vite": { icon: "⚡", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },

  // Backend
  "Python": { icon: "🐍", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  "Flask": { icon: "🧪", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
  "FastAPI": { icon: "🚀", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
  "Node.js": { icon: "💚", color: "bg-green-600/20 text-green-400 border-green-600/30" },
  "Express": { icon: "🚂", color: "bg-gray-600/20 text-gray-300 border-gray-600/30" },
  "C": { icon: "©️", color: "bg-blue-700/20 text-blue-300 border-blue-700/30" },

  // Mobile
  "Flutter": { icon: "📱", color: "bg-sky-500/20 text-sky-400 border-sky-500/30" },

  // Database
  "PostgreSQL": { icon: "🐘", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
  "MySQL": { icon: "🐬", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  "MongoDB": { icon: "🍃", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  "Supabase": { icon: "⚡", color: "bg-emerald-600/20 text-emerald-400 border-emerald-600/30" },
  "SQLite": { icon: "💾", color: "bg-slate-500/20 text-slate-300 border-slate-500/30" },
  "SQLAlchemy": { icon: "🔗", color: "bg-red-600/20 text-red-400 border-red-600/30" },

  // Data Science
  "Pandas": { icon: "🐼", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  "NumPy": { icon: "🔢", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  "Matplotlib": { icon: "📊", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  "Seaborn": { icon: "📈", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
  "Scikit-learn": { icon: "🤖", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
  "Scipy": { icon: "🔬", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },

  // DevOps & Tools
  "Docker": { icon: "🐳", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  "Git": { icon: "🔀", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  "GitHub": { icon: "🐙", color: "bg-gray-700/20 text-gray-300 border-gray-700/30" },
  "Axios": { icon: "📡", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  "Werkzeug": { icon: "🔧", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },

  // Default
  "default": { icon: "💻", color: "bg-gray-600/20 text-gray-300 border-gray-600/30" }
};

export function getTechIcon(tech: string): { icon: string; color: string } {
  const cleanTech = tech.trim();
  return techIconMap[cleanTech] || techIconMap["default"];
}
