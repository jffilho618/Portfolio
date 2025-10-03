import Resume from "./Resume";
import Profile from "./Profile";
import Tech from "./Tech";
import Title from "./Title";

import { motion } from "motion/react";

// Hero.tsx
export default function Hero() {
    return (
        <motion.section
            id="hero"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                    }
                }
            }}
            className="grid grid-cols-1 py-10 md:py-0 gap-10 grid-rows-[auto_auto_auto_auto] sm:gap-6 md:grid-cols-5 md:grid-rows-5 md:gap-8 lg:gap-10"
        >
            <Title />
            <Resume />
            <Tech />
            <Profile />
        </motion.section>
    );
}