import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";

export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 py-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full cursor-default"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/10 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <HoverCard image={item.image} icon={item.icon}>
            <HoverCardTitle>{item.title}</HoverCardTitle>
            <HoverCardDescription>{item.description}</HoverCardDescription>
          </HoverCard>
        </div>
      ))}
    </div>
  );
}

export function HoverCard({ className, children, image, icon }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white dark:bg-teal-deep/40 border border-slate-100 dark:border-teal-deep/60 group-hover:border-primary/30 relative z-20 transition-colors duration-200",
        className,
      )}
    >
      {image && (
        <div
          className="w-full bg-cover bg-center overflow-hidden group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${image}')`, aspectRatio: "4/3" }}
        />
      )}
      <div className="relative z-50 p-4 sm:p-6">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-primary text-xl">
              {icon}
            </span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export function HoverCardTitle({ className, children }) {
  return (
    <h4
      className={cn(
        "text-slate-900 dark:text-zinc-100 font-bold tracking-wide text-base sm:text-lg mt-2",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function HoverCardDescription({ className, children }) {
  return (
    <p
      className={cn(
        "mt-3 text-slate-500 dark:text-zinc-400 leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
}
