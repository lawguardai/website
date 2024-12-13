import React from 'react';

export function PreLaunchProgress() {
  const progress = 35; // Adjusted progress for December launch
  const launchDate = 'December 2024';

  return (
    <div className="mb-20 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Launch Progress</h2>
      <div className="max-w-md mx-auto mb-4">
        <div className="h-4 bg-white/20 rounded-full">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-blue-100">
        {progress}% Complete • Launching {launchDate}
      </p>
    </div>
  );
}