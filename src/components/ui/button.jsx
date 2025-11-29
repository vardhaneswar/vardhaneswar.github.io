import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
