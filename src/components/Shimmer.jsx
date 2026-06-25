import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
      {Array(8)
        .fill('')
        .map((_, index) => (
          <div key={index} className="flex flex-col items-start gap-4 h-50 p-4 shadow-2xl rounded-lg">
            <div className="w-10 h-12 rounded-full bg-gray-300 animate-pulse"></div>

            <div className="flex w-full flex-col gap-4">
              <div className="h-2 w-full max-w-full bg-gray-300 rounded animate-pulse mb-2"></div>
              <div className="h-2  max-w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-2  max-w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-2  max-w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-2  max-w-full bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
