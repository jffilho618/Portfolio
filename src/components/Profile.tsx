// Profile.tsx (agora oculto em mobile)
import { useWidth } from "../context/useWidth/useWidth";
import { motion } from "motion/react";
export default function Profile() {
  const { width } = useWidth();

  if (width < 768) return null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="bg-[#1C2535] border-2 border-background-bright hidden md:block md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-5 rounded-2xl h-full overflow-visible"
    >
      <motion.img
        src="/IMG_4146.png"
        alt="João Batista de Sousa Filho"
        className="w-full h-full object-cover rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
    </motion.div>
  );
}
