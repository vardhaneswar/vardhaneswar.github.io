import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-3 min-h-32 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500/50 outline-none transition-all duration-300 resize-none ${className}`}
      {...props}
    />
  );
}
