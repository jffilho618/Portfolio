import { motion } from 'motion/react';
import { skills } from '../data/skills';

export default function Skills() {
    return (
        <motion.section
            className="bg-background p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 relative rounded-2xl border-2 border-background-bright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {/* Seção Cards */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="py-4 sm:py-5 px-3 sm:px-4 border-2 border-background-bright rounded-xl hover:border-border-line/70 transition-all duration-200 ease-in-out"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index/15 }}
                    >
                        <h3 className="text-new-pink text-base sm:text-lg mb-1 sm:mb-2">{skill.name}</h3>
                        <p className="text-white text-xs sm:text-sm">
                            {skill.technologies.join(', ')}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            {/* Divisor - só aparece em desktop */}
            <div className="hidden lg:block h-[80%] w-[3px] absolute bg-new-pink left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]" />

            {/* Seção Ícones */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.h1
                    className="text-xl sm:text-2xl text-new-green mb-6"
                >
                    Minhas Habilidades
                </motion.h1>

                <div className="w-full space-y-6">
                    {/* Front-End */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="text-white text-sm font-light">Front-End</h3>
                        <div className="flex flex-wrap gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="h-10 w-10" title="HTML" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="h-10 w-10" title="CSS" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-10 w-10" title="JavaScript" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-10 w-10" title="Vue.js" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-10 w-10" title="React" />
                        </div>
                    </motion.div>

                    {/* Backend & Linguagens */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="text-white text-sm font-light">Backend & Linguagens</h3>
                        <div className="flex flex-wrap gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-10 w-10" title="Python" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="h-10 w-10" title="C" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-10 w-10" title="Node.js" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" className="h-10 w-10 invert" title="Express" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" className="h-10 w-10 invert" title="Flask" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="h-10 w-10" title="FastAPI" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" alt="PyQt" className="h-10 w-10" title="PyQt" />
                        </div>
                    </motion.div>

                    {/* Banco de Dados */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="text-white text-sm font-light">Banco de Dados</h3>
                        <div className="flex flex-wrap gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-10 w-10" title="PostgreSQL" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="h-10 w-10" title="MySQL" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-10 w-10" title="MongoDB" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" className="h-10 w-10" title="Supabase" />
                        </div>
                    </motion.div>

                    {/* Análise de Dados */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="text-white text-sm font-light">Análise de Dados</h3>
                        <div className="flex flex-wrap gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="h-10 w-10" title="Pandas" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" className="h-10 w-10" title="Matplotlib" />
                        </div>
                    </motion.div>

                    {/* DevOps & Ferramentas */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="text-white text-sm font-light">DevOps & Ferramentas</h3>
                        <div className="flex flex-wrap gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-10 w-10" title="Docker" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="h-10 w-10" title="Git" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-10 w-10 invert" title="GitHub" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </motion.section>
    );
}