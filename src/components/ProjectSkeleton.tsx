import { motion } from "motion/react";

export default function ProjectSkeleton() {
  return (
    <motion.div
      className="w-full bg-background-dark p-6 sm:p-8 relative rounded-2xl flex flex-col gap-6 border-background-bright border-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Image Skeleton */}
      <div className="w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-lg bg-background-bright/30 animate-pulse" />

      {/* Content Skeleton */}
      <div className="flex flex-col gap-4 bg-background p-4 sm:p-6 rounded-lg">
        {/* Title */}
        <div className="h-7 bg-background-bright/30 rounded w-3/4 animate-pulse" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-background-bright/20 rounded animate-pulse" />
          <div className="h-4 bg-background-bright/20 rounded animate-pulse" />
          <div className="h-4 bg-background-bright/20 rounded w-5/6 animate-pulse" />
        </div>

        {/* Info Grid */}
        <div className="space-y-4 mt-2">
          <div className="h-5 bg-background-bright/30 rounded w-1/4 animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-background-bright/20 rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-background-bright/20 rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-background-bright/20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
