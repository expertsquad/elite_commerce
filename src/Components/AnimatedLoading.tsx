import React from "react";

const AnimatedLoading = () => {
  return (
    <div className="flex gap-2">
      <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary [animation-delay:-0.3s]"></div>
      <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary [animation-delay:-0.15s]"></div>
      <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary"></div>
    </div>
  );
};

export default AnimatedLoading;
