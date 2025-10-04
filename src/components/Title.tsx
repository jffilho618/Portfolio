import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Title() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Desenvolvedor {Fullstack Web} & Analista de {Dados}";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const renderText = () => {
    const parts = [];
    let currentPart = { text: "", color: "text-white" };

    for (let i = 0; i < displayedText.length; i++) {
      const char = displayedText[i];

      if (char === "{") {
        if (currentPart.text.length > 0) {
          parts.push(currentPart);
        }
        currentPart = { text: "{", color: "text-new-green" };
      } else if (char === "}") {
        currentPart.text += "}";
        parts.push(currentPart);
        currentPart = { text: "", color: "text-white" };
      } else {
        currentPart.text += char;
      }
    }

    // Adiciona o último part se tiver conteúdo
    if (currentPart.text.length > 0) {
      parts.push(currentPart);
    }

    return parts.map((part, index) => (
      <span key={index} className={part.color}>
        {part.text}
      </span>
    ));
  };

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
      className="flex flex-col justify-around border-2 border-background-bright md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-4 col-span-1 row-span-1 bg-[#1C2535] rounded-2xl h-64 sm:h-72 md:h-auto p-4 sm:p-6 md:p-8 overflow-hidden"
    >
      <motion.div className="text-white text-sm sm:text-base md:text-lg">
        <p>
          <span className="text-new-pink">{"<span> "}</span>
          Olá, me chamo João Batista
          <span className="text-new-pink">{" </span>"}</span>
        </p>
      </motion.div>

      <motion.div className="text-white text-[1.4rem] mt-3 sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3.2rem] font-medium w-full leading-tight">
        <h1 className="break-words">
          {renderText()}
          {showCursor && (
            <motion.span
              className="inline-block w-1 h-6 sm:h-10 md:h-8 bg-white align-middle ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </h1>
      </motion.div>
    </motion.div>
  );
}
