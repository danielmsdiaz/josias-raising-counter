"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const Home = () => {
  const [contador, setContador] = useState(0);

  const levantar = () => {
    setContador((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <motion.h1
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-5xl font-bold"
      >
        🧍‍♂️ Contador do Josias
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg"
      >
        O Josias levantou <span className="font-bold">{contador}</span>{" "}
        {contador === 1 ? "vez" : "vezes"} hoje 💪
      </motion.p>

      <motion.button
        whileTap={{ scale: 0.9, rotate: -5 }}
        onClick={levantar}
        className="cursor-pointer mt-8 rounded-xl bg-white/20 px-6 py-3 text-white backdrop-blur-sm hover:bg-white/30 transition"
      >
        🚀 Levantar!
      </motion.button>
    </div>
  );
};

export default Home;
