"use client";
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  const loadingTexts = [
    'Initializing...',
    'Loading Components...',
    'Setting up Portfolio...',
    'Preparing Experience...',
    'Almost Ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const progressStep = 100 / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(currentStep * progressStep, 100);
      setProgress(newProgress);

      // Update text based on progress
      const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
      setCurrentText(loadingTexts[textIndex]);

      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Wait for exit animation
        }, 500); // Show 100% for a moment
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-dark-purple flex items-center justify-center transition-all duration-800 ${
      isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4 animate-pulse">
            &lt;Dev Area /&gt;
          </h1>
          <p className="text-gray-400 text-lg">
            Alfian Jack Portfolio
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          {/* Spinning Circle */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"
              style={{
                animationDuration: '1s'
              }}
            ></div>
            <div 
              className="absolute inset-2 border-2 border-transparent border-t-purple-400 rounded-full animate-spin"
              style={{
                animationDuration: '1.5s',
                animationDirection: 'reverse'
              }}
            ></div>
          </div>

          {/* Progress Bar */}
          <div className="w-80 max-w-sm mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>{currentText}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-primary rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm mt-8 animate-pulse">
          Crafting beautiful web experiences...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;