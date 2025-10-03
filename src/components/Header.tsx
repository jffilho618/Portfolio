import { motion } from 'motion/react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import scrollToSection from "../utils/scollToSection";

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.3
        }
    })
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (section: string) => {
        scrollToSection(section);
        setIsOpen(false);
    };

    const menuItems = [
        { section: 'hero', label: 'Home' },
        { section: 'about', label: 'Sobre' },
        { section: 'projects', label: 'Projetos' },
        { section: 'contact', label: 'Contato' }
    ];

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                }
            }}
            className={`
        bg-background-bright/60 w-[90%] backdrop-blur-2xl
        flex items-center justify-between px-4 py-3 rounded-2xl
        fixed z-[999] top-4 left-1/2 transform -translate-x-1/2 shadow-lg
        md:w-[80%] md:h-15 md:px-6 md:top-6
        lg:top-10
        `}
        >
            <motion.h1
                className="text-white text-lg sm:text-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                João Batista
            </motion.h1>
            <motion.ul className="hidden md:flex items-center gap-8 text-white text-md mr-6 lg:gap-10 lg:mr-10">
                {menuItems.map((item, i) => (
                    <motion.li
                        key={item.section}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        className="cursor-pointer hover:text-new-green transition-all duration-200 ease-in-out"
                        onClick={() => handleNavigation(item.section)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item.label}
                    </motion.li>
                ))}
            </motion.ul>

            <motion.button
                className="md:hidden text-white text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut"
                        }
                    },
                    closed: {
                        opacity: 0,
                        y: -20,
                        transition: {
                            duration: 0.2
                        }
                    }
                }}
                className="md:hidden absolute top-full left-0 w-full bg-background-bright/95 backdrop-blur-3xl rounded-b-2xl mt-2 shadow-xl"
            >
                <ul className="flex flex-col items-center py-4 gap-4 text-white">
                    {menuItems.map((item) => (
                        <motion.li
                            key={item.section}
                            className="cursor-pointer hover:text-new-green transition-all duration-200 ease-in-out px-4 py-2"
                            onClick={() => handleNavigation(item.section)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.label}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.header>
    );
}