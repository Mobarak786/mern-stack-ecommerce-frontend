import React from "react";

export const SkeletonCard = () => {
  return (
    <div className="w-full p-4  rounded-lg shadow-md bg-white animate-pulse">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-4" />
      <div className="h-10 bg-gray-300 rounded" />
    </div>
  );
};
