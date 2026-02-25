import React from 'react';

interface CalculatorMenuProps {
  setMode: (mode: 'menu' | 'step-by-step' | 'expression') => void;
  setCurrentStep: (step: number) => void;
  theme: string;
}

const CalculatorMenu: React.FC<CalculatorMenuProps> = ({ setMode, setCurrentStep, theme }) => {
  return (
    <div className="text-center">
                                                <h3 className={theme === 'cyberpunk' ? 'text-2xl font-bold mb-8 text-cyber-cyan animate-neon-glow-multi' : theme === 'naruto' ? 'text-2xl font-bold mb-8 naruto-text' : 'text-2xl font-bold mb-8 text-gray-800'}>Select Calculation Mode:</h3>
      <div className="space-y-5">
        <button
          onClick={() => {setMode('step-by-step'); setCurrentStep(1);}}
          className={theme === 'cyberpunk' ? 'w-full bg-cyber-cyan hover:bg-cyber-green text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyber-cyan/50 hover:shadow-cyber-green/50 relative overflow-hidden group' : theme === 'naruto' ? 'w-full naruto-button font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group' : 'w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg'}
        >
          {theme === 'cyberpunk' && <span className="absolute inset-0 bg-cyber-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>}
          {theme === 'naruto' && <span className="absolute inset-0 bg-naruto-gold opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>}
          <span className="relative z-10">Step-by-Step Calculation</span>
        </button>
        <button
          onClick={() => setMode('expression')}
          className={theme === 'cyberpunk' ? 'w-full bg-cyber-magenta hover:bg-cyber-purple text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyber-magenta/50 hover:shadow-cyber-purple/50 relative overflow-hidden group' : theme === 'naruto' ? 'w-full naruto-button font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group' : 'w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg'}
        >
          {theme === 'cyberpunk' && <span className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>}
          {theme === 'naruto' && <span className="absolute inset-0 bg-naruto-gold opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>}
          <span className="relative z-10">Expression Input (e.g., 5 + 3 * 2)</span>
        </button>
        <button
          onClick={() => window.close()}
          className={theme === 'cyberpunk' ? 'w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-red-600/50 hover:shadow-red-500/50 border border-red-500/30 relative overflow-hidden group' : theme === 'naruto' ? 'w-full naruto-back-btn font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group' : 'w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg'}
        >
          {theme === 'cyberpunk' && <span className="absolute inset-0 bg-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>}
          {theme === 'naruto' && <span className="absolute inset-0 bg-naruto-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>}
          <span className="relative z-10">Exit Calculator</span>
        </button>
      </div>
    </div>
  );
};

export default CalculatorMenu;