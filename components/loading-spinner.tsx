// components/loading-spinner.tsx
import React from "react";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-73px)]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
};