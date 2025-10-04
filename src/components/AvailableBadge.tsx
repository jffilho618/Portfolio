import { motion } from "motion/react";

export default function AvailableBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
    >
      <motion.span
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-2 h-2 bg-green-500 rounded-full"
      />
      <span className="text-green-400 text-sm font-medium">
        Disponível para oportunidades
      </span>
    </motion.div>
  );
}
