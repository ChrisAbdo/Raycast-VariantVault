export const FADEDOWN = `import React from "react";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

export default function FadeDown() {
  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Fade Down
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Animation Preview
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        If you&apos;re seeing this, thank you for trying my project out! - C.J.A
      </motion.div>
    </motion.div>
  );
}`;

export const FADEUP = `import React from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Heart } from "lucide-react";

export default function FadeUp() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Fade Up
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Animation Preview
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Heart size={24} />
      </motion.div>
    </motion.div>
  );
}`;

export const SLIDE = `import { MULTIDIRECTION_SLIDE_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

export default function MultiDirection({ key }: { key: number }) {
  return (
    <div className="overflow-hidden" key={key}>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Multi Direction
      </motion.h1>

      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Slide
      </motion.h1>
    </div>
  );
}`;

export const FADEIN = `import React from "react";
import { motion } from "framer-motion";

export default function StaggeredFade() {
  const sentence = "Staggered Fade In";
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };
  const words = sentence.split(" ");
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {words.map((word, i) => (
        <motion.span key={word} variants={wordVariants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}`;

export const PULLUP = `import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

export default function PullUp() {
  const words = "staggered-pullup";
  const letters = words.split("");
  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={FADE_IN_ANIMATION_VARIANTS}
          initial="initial"
          animate="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        >
          {letter}
        </motion.h1>
      ))}
    </div>
  );
}`;

export const WORDPULLUP = `import React from "react";
import { motion } from "framer-motion";

export default function RipplePullUp() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {"Ripple Pull Up".split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}`;
