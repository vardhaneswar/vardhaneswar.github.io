import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 h-12 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500/50 outline-none transition-all duration-300 ${className}`}
      {...props}
    />
  );
}
