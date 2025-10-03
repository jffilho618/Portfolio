import { motion } from 'motion/react';
import { cooperationItems } from "../data/cooperations";
import { BsDownload } from "react-icons/bs";
import Curriculo from '../documents/Curriculo.pdf'

// Variantes de animação
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export default function About() {
    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full bg-background h-auto rounded-2xl grid grid-rows-[max-content_max-content_1fr] lg:grid-cols-[1fr_max-content_1fr] p-6 sm:p-8 md:p-10 border-2 border-background-bright"
        >
            {/* Seção Sobre Mim */}
            <motion.div className="text-white" variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
            }}>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-[3rem] mb-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Sobre mim
                </motion.h1>

                <motion.p
                    className="text-justify my-6 sm:my-10 text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <span className="text-new-pink">{`<p> `}</span>
                    Desenvolvedor Fullstack e Analista de Dados, graduando em Sistemas de Informação pela UFPI. Sou um profissional proativo e organizado, com grande capacidade de aprendizado rápido para dominar novas tecnologias. Tenho 3 anos de estudo focado em desenvolvimento de soluções eficientes e sou treinado para abordar desafios de forma analítica e criativa, com seriedade e compromisso. Experiência em projetos práticos com Vue.js, Flask, Node.js, Express, consumo de APIs RESTful e análise de dados com Python, Pandas e Matplotlib.
                    <span className="text-new-pink">{` </p>`}</span>
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    href={Curriculo} target="iframe_download" download={true}>
                    <button
                        className="px-3 py-2 text-sm flex justify-center items-center gap-3 bg-background-bright rounded-xl border-2 border-background-bright text-white cursor-pointer transition-all duration-200 ease-in-out
                    hover:bg-new-pink hover:border-new-pink
                    "
                    >
                        <BsDownload />
                        Baixar Currículo
                    </button>
                </motion.a>
            </motion.div>

            {/* Divisor */}
            <motion.div
                variants={{
                    hidden: { scaleY: 0 },
                    visible: {
                        scaleY: 1,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    }
                }}
                className="md:w-[2px] md:h-[90%] h-[3px] my-7 w-[90%] bg-new-pink mx-3 sm:mx-5 md:my-auto"
            />

            {/* Seção Cooperação */}
            <motion.div className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h3
                    className="text-new-green text-xl sm:text-2xl mt-5"
                >
                    Cooperação
                </h3>

                <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                    {cooperationItems.map((item, index) => (
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index / 20 }}
                            key={item.id}
                            className="flex flex-col gap-2 border border-background-bright p-3 rounded-xl hover:border-border-line/70 transition-all duration-200 ease-in-out"
                        >
                            <div>
                                {item.icon}
                            </div>
                            <h4 className="text-base sm:text-md">{item.title}</h4>
                            <p className="text-font-color text-justify text-sm/4 font-light">
                                {item.description.split('$0').map((part, index) => (
                                    <span key={index}>
                                        {part}
                                        {index < item.highlights.length ? (
                                            <span className={`text-new-pink ${item.highlights[index].className || ''}`}>
                                                {item.highlights[index].text}
                                            </span>
                                        ) : null}
                                    </span>
                                ))}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}