import { motion } from "motion/react";

export default function Tech() {
    const techIcons = [
        // Front-End
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },

        // Backend & Linguagens
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "PyQt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" },

        // Banco de Dados
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },

        // Análise de Dados
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },

        // DevOps & Ferramentas
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    ];

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                }
            }}
            className="border-2 border-background-bright md:col-start-4 md:col-end-6 md:row-start-5 md:row-end-6 col-span-1 row-span-1 h-20 sm:h-24 rounded-2xl bg-background p-3 sm:p-5 overflow-hidden relative"
        >
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-background/0 z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-background/0 z-10"></div>
            <motion.div
                className="flex gap-6 sm:gap-10 items-center h-full relative"
                style={{ minWidth: "max-content" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                {[...techIcons, ...techIcons].map((tech, idx) => (
                    <img
                        key={idx}
                        src={tech.icon}
                        alt={tech.name}
                        title={tech.name}
                        className="h-3/4 sm:h-full w-auto object-contain"
                        draggable={false}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}