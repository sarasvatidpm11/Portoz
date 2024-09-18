"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageSection from "./ImageSection";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

type TransitionProps = {
  isLogin: boolean;
};

export default function Transition({ isLogin }: TransitionProps) {
  return (
    <motion.div className="grid h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* Gambar */}
      <motion.div
        className={`${isLogin ? "lg:order-1" : "lg:order-2"} hidden lg:block`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <ImageSection isLogin={isLogin} />
      </motion.div>

      {/* Form */}
      <motion.div
        className={`${isLogin ? "lg:order-2" : "lg:order-1"} bg-card-pattern flex items-center justify-center lg:bg-none`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </motion.div>
    </motion.div>
  );
}
