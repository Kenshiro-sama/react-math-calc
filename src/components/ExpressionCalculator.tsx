import React from 'react';

interface ExpressionCalculatorProps {
  expression: string;
  setExpression: (expr: string) => void;
  handleExpressionCalculation: () => void;
  resetCalculator: () => void;
  theme: string;
}

const ExpressionCalculator: React.FC<ExpressionCalculatorProps> = ({
  expression,
  setExpression,
  handleExpressionCalculation,
  resetCalculator,
  theme,
}) => {
  return (
    <div className="text-center">
                        <h3 className={theme === 'cyberpunk' ? 'text-2xl font-bold mb-8 text-cyber-cyan animate-neon-glow-multi' : theme === 'naruto' ? 'text-2xl font-bold mb-8 naruto-text' : 'text-2xl font-bold mb-8 text-gray-800'}>Enter Your Expression:</h3>
      <div className="space-y-5">
        <div>
          <label className={theme === 'cyberpunk' ? 'block text-cyber-cyan font-medium mb-2 text-left' : theme === 'naruto' ? 'block naruto-text font-medium mb-2 text-left' : 'block text-gray-700 font-medium mb-2 text-left'}>
            Input your mathematical expression (e.g., 5 + 3 * 2) or unary operation (e.g., sqrt 9, reciprocal 5):
          </label>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className={theme === 'cyberpunk' ? 'w-full px-4 py-3 border-2 border-cyber-purple bg-gray-900/80 text-cyber-purple rounded-xl focus:ring-2 focus:ring-cyber-cyan focus:border-cyber-cyan shadow-lg shadow-cyber-purple/20 backdrop-blur-sm transition-all duration-300 placeholder-cyber-purple/50' : theme === 'naruto' ? 'w-full px-4 py-3 naruto-input rounded-xl focus:ring-2 focus:ring-naruto-orange focus:border-naruto-orange transition-all duration-300 placeholder-naruto-orange/50' : 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm'}
            placeholder="e.g., 10 / 2 + (3 * 4) or sin 90"
            onKeyPress={(e) => e.key === 'Enter' && handleExpressionCalculation()}
          />
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleExpressionCalculation}
            className={theme === 'cyberpunk' ? 'flex-1 bg-cyber-magenta hover:bg-cyber-purple text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyber-magenta/50 hover:shadow-cyber-purple/50 relative overflow-hidden group' : theme === 'naruto' ? 'flex-1 naruto-button font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group' : 'flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            {theme === 'cyberpunk' && <span className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>}
            {theme === 'naruto' && <span className="absolute inset-0 bg-naruto-gold opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>}
            <span className="relative z-10">Evaluate Expression</span>
          </button>
          <button
            onClick={resetCalculator}
            className={theme === 'cyberpunk' ? 'flex-1 bg-gray-700 hover:bg-gray-600 text-cyber-cyan font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-gray-700/50 border border-cyber-cyan/30 relative overflow-hidden group' : theme === 'naruto' ? 'flex-1 naruto-back-btn font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group' : 'flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            {theme === 'cyberpunk' && <span className="absolute inset-0 bg-cyber-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>}
            {theme === 'naruto' && <span className="absolute inset-0 bg-naruto-orange opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>}
            <span className="relative z-10">Back to Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpressionCalculator;