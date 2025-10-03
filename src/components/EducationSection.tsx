import { formations } from "../data/educations";
import { motion } from 'motion/react';

export const EducationSection = () => {
    return (
        <motion.div
            className="bg-background rounded-2xl p-5 sm:p-6 md:p-8 relative border-2 border-background-bright"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h1 className="text-new-green text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Educação</h1>
            <div className="relative max-h-[400px] overflow-y-auto overflow-x-hidden pr-2">
                <div className="h-full w-0.5 bg-font-data-color/50 absolute left-3 sm:left-4 -translate-x-1/2" />

                <div className="space-y-4 sm:space-y-6 pl-6 sm:pl-8">
                    {formations.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            // viewport={{ once: true }}
                            transition={{ delay: index/10, duration: 0.4 }}
                        >
                            <div className="absolute -left-6 sm:-left-8 top-0 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                                <motion.div
                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-font-data-color/50"
                                    whileHover={{ scale: 1.5, backgroundColor: "#3F6AC7" }}
                                />
                            </div>
                            <div className="text-font-data-color/50 text-sm sm:text-md mb-1">
                                {item.year}
                            </div>
                            <div className="ml-2">
                                <h2 className="text-new-pink text-base sm:text-lg font-medium">{item.course}</h2>
                                <h3 className="text-white text-xs sm:text-sm">{item.institution}</h3>
                                <p className="text-font-color text-xs sm:text-sm mt-1 sm:mt-2 text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};