import { certifications } from "../data/certifications";
import { motion as MOTION } from 'motion/react';

export const CertificationsSection = () => {
    return (
        <MOTION.div
            className="bg-background rounded-2xl p-5 sm:p-6 md:p-8 relative border-2 border-background-bright"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
            <h1 className="text-new-green text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Certificações</h1>
            {certifications.length > 0 ? (
                <div className="space-y-3 sm:space-y-4 max-h-[400px] overflow-y-auto overflow-x-hidden pr-2">
                    {certifications.map((cert, index) => (
                        <MOTION.div
                            key={index}
                            className="border-l-2 pl-3 sm:pl-4 border-new-green/50 hover:border-new-green hover:cursor-default transition-colors duration-200 ease-in-out"
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ x: 5 }}
                        >
                            <h2 className="text-new-pink text-base sm:text-lg font-medium">{cert.name}</h2>
                            <p className="text-white text-xs sm:text-sm">{cert.issuer}</p>
                            <p className="text-font-data-color/50 text-xs mt-0.5 sm:mt-1">{cert.date}</p>
                        </MOTION.div>
                    ))}
                </div>
            ) : (
                <p className="text-font-color italic text-sm sm:text-base">Nenhuma certificação adicionada ainda.</p>
            )}
        </MOTION.div>
    );
};