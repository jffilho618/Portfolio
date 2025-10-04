import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { sendEmail } from '../utils/sendEmail';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import { sendEmail } from '../utils/sendEmail';

export default function Contact() {

    const [formData, setFormData] = useState({
        email: '',
        title: '',
        message: ''
    });

    function clearInput(){
        setFormData({
            email: '',
            title: '',
            message: ''
        })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleVoidInput() {
        if (formData.email === '' || formData.title === '' || formData.message === '') {
            return true
        }
    }

    const contactItems = [
        {
            icon: <FaWhatsapp size={30} className="text-new-green" />,
            platform: "WhatsApp",
            link: "https://wa.me/5589988152737",
            text: "+55 (89) 98815-2737"
        },
        {
            icon: <FaLinkedin size={30} className="text-new-green" />,
            platform: "Linkedin",
            link: "https://linkedin.com/in/joão-batista-dev",
            text: "linkedin.com/in/joão-batista-dev"
        },
        {
            icon: <MdEmail size={30} className="text-new-green" />,
            platform: "E-mail",
            link: "mailto:Jffilho618@gmail.com",
            text: "Jffilho618@gmail.com"
        },
        {
            icon: <FaGithub size={30} className="text-new-green" />,
            platform: "GitHub",
            link: "https://github.com/Jffilio",
            text: "github.com/Jffilio"
        }
    ];

    return (
        <motion.section
            id="contact"
            className="bg-background p-6 sm:p-8 md:p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 border-2 border-background-bright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {/* Seção de Contato */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8">
                    <motion.h1
                        className="text-white text-3xl sm:text-4xl md:text-[3rem] mb-2"
                    >
                        Se interessou?
                    </motion.h1>
                    <motion.p
                        className="text-xl sm:text-2xl text-new-pink"
                    >
                        Entre em contato
                    </motion.p>
                </div>

                <ul className="space-y-4 sm:space-y-6 ml-0 sm:ml-4">
                    {contactItems.map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center gap-3 sm:gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index / 10, duration: 0.4 }}
                        >
                            <motion.div whileHover={{ scale: 1.1 }}>
                                {item.icon}
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-new-green text-sm sm:text-base">
                                    {item.platform}
                                </span>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-sm sm:text-base hover:text-new-blue transition-colors duration-200"
                                >
                                    {item.text}
                                </a>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Formulário */}
            <motion.form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(formData);
                    if (!handleVoidInput()) {
                        sendEmail(e.currentTarget);
                        toast.success("Email enviado com Sucesso!");
                        clearInput();
                    }
                    else {
                        toast.error("Preencha todos os campos!");
                    }
                }}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
            >
                <motion.div
                    transition={{ duration: 0.2 }}
                >
                    <label className="text-white font-light text-sm sm:text-base">E-mail</label>
                    <input
                        onChange={handleChange}
                        name='email'
                        type="email"
                        value={formData.email}
                        className="mt-1 w-full bg-background-bright border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none placeholder:text-border-line/70 text-white text-sm sm:text-base"
                        placeholder="exemplo@teste.com"
                    />
                </motion.div>

                <motion.div
                    transition={{ duration: 0.2 }}
                >
                    <label className="text-white font-light text-sm sm:text-base">Assunto</label>
                    <input
                        onChange={handleChange}
                        name='title'
                        type="text"
                        value={formData.title}
                        className="mt-1 w-full bg-background-bright border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none placeholder:text-border-line/70 text-white text-sm sm:text-base"
                        placeholder="Tenho interesse..."
                    />
                </motion.div>

                <motion.div
                    transition={{ duration: 0.2 }}
                >
                    <label className="text-white font-light text-sm sm:text-base">Mensagem</label>
                    <textarea
                        onChange={handleChange}
                        name='message'
                        value={formData.message}
                        className="mt-1 w-full bg-background-bright border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none placeholder:text-border-line/70 text-white text-sm sm:text-base resize-none"
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                    />
                </motion.div>

                <div className="flex flex-wrap gap-3">
                    <motion.a
                        href="https://wa.me/5589988152737"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[200px]"
                    >
                        <button
                            type="button"
                            className="w-full px-4 py-2.5 text-sm flex justify-center items-center gap-2 bg-new-green rounded-xl border-2 border-new-green text-white cursor-pointer transition-all duration-200 ease-in-out hover:bg-new-green/80 hover:scale-105 font-medium"
                        >
                            📅 Agendar Reunião
                        </button>
                    </motion.a>
                    <motion.input
                        type="submit"
                        value="Enviar"
                        className="flex-1 min-w-[200px] bg-border-line border-2 border-border-line rounded-lg sm:rounded-xl py-2 px-4 outline-none text-white hover:bg-new-pink hover:border-new-pink transition-all duration-200 ease-in-out cursor-pointer text-sm sm:text-base"
                    />
                </div>
            </motion.form>
        </motion.section>
    );
}