import React from 'react';

interface StepByStepCalculatorProps {
  currentStep: number;
  setOperation: (op: string) => void;
  setCurrentStep: (step: number) => void;
  operation: string;
  setConversionDirection: (dir: 'deg2rad' | 'rad2deg') => void;
  conversionDirection: 'deg2rad' | 'rad2deg';
  num1: string;
  setNum1: (num: string) => void;
  num2: string;
  setNum2: (num: string) => void;
  handleStepByStepCalculation: () => void;
  resetCalculator: () => void;
  theme: string;
}

const operationNames: { [key: string]: string } = {
  add: 'Addition',
  subtract: 'Subtraction',
  divide: 'Division',
  multiply: 'Multiplication',
  percentage: 'Percentage',
  sqrt: 'Square Root',
  power: 'Power',
  round: 'Round',
  floor: 'Floor',
  ceil: 'Ceil',
  factorial: 'Factorial',
  reciprocal: 'Reciprocal',
  sin: 'Sine',
  cos: 'Cosine',
  tan: 'Tangent',
  log: 'Natural Logarithm',
  log10: 'Logarithm Base 10',
  exp: 'Exponential',
  angleConversion: 'Angle Conversion'
};

const StepByStepCalculator: React.FC<StepByStepCalculatorProps> = ({
  currentStep,
  setOperation,
  setCurrentStep,
  operation,
  setConversionDirection,
  conversionDirection,
  num1,
  setNum1,
  num2,
  setNum2,
  handleStepByStepCalculation,
  resetCalculator,
  theme,
}) => {
  if (currentStep === 1) {
    return (
      <div className="text-center">
                                <h3 className={theme === 'cyberpunk' ? 'text-2xl font-bold mb-8 text-cyber-cyan animate-neon-glow-multi' : theme === 'naruto' ? 'text-2xl font-bold mb-8 naruto-text' : 'text-2xl font-bold mb-8 text-gray-800'}>Choose an Operation:</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => {setOperation('add'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Addition (+)</span>
          </button>
                    <button
            onClick={() => {setOperation('subtract'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Subtraction (-)</span>
          </button>
          <button
            onClick={() => {setOperation('divide'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Division (/)</span>
          </button>
                    <button
            onClick={() => {setOperation('multiply'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Multiplication (*)</span>
          </button>
          <button
            onClick={() => {setOperation('percentage'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Percentage (%)</span>
          </button>
          <button
            onClick={() => {setOperation('sqrt'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Square Root (√)</span>
          </button>
                    <button
            onClick={() => {setOperation('round'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Round</span>
          </button>
          <button
            onClick={() => {setOperation('floor'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Floor</span>
          </button>
          <button
            onClick={() => {setOperation('ceil'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Ceil</span>
          </button>
          <button
            onClick={() => {setOperation('power'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Power (^)</span>
          </button>
          <button
            onClick={() => {setOperation('factorial'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Factorial (!)</span>
          </button>
          <button
            onClick={() => {setOperation('reciprocal'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Reciprocal (1/x)</span>
          </button>
                    <button
            onClick={() => {setOperation('sin'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Sine (sin)</span>
          </button>
          <button
            onClick={() => {setOperation('cos'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Cosine (cos)</span>
          </button>
          <button
            onClick={() => {setOperation('tan'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Tangent (tan)</span>
          </button>
          <button
            onClick={() => {setOperation('log'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >

            <span className="relative z-10">Natural Log (ln)</span>
          </button>
          <button
            onClick={() => {setOperation('log10'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Log Base 10 (log10)</span>
          </button>
          <button
            onClick={() => {setOperation('exp'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Exponential (e^x)</span>
          </button>
          <button
            onClick={() => {setOperation('angleConversion'); setCurrentStep(2);}}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-green-500 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-green-400 shadow-md shadow-green-500/30 relative z-10' : theme === 'naruto' ? 'naruto-operation-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Angle Conversion</span>
          </button>
          <button
            onClick={resetCalculator}
            className={theme === 'cyberpunk' ? 'bg-gray-800 border border-purple-500 text-purple-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:border-purple-400 shadow-md shadow-purple-500/30 relative z-10' : theme === 'naruto' ? 'naruto-back-btn font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10' : 'bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
          >
            <span className="relative z-10">Back to Menu</span>
          </button>
        </div>
      </div>
    );
  } else if (currentStep === 2) {
    return (
      <div className="text-center">
                                <h3 className={theme === 'cyberpunk' ? 'text-2xl font-bold mb-8 text-cyber-cyan animate-neon-glow-multi' : 'text-2xl font-bold mb-8 text-gray-800'}>
          {operationNames[operation]}
        </h3>
        <div className="space-y-5">
          {operation === 'angleConversion' && (
            <div className="flex justify-center mb-6">
              <div className={theme === 'cyberpunk' ? 'inline-flex rounded-xl border-2 border-cyber-cyan bg-gradient-to-r from-gray-800 to-gray-900 p-1 shadow-lg shadow-cyber-cyan/30 animate-border-pulse-multi' : 'inline-flex rounded-xl border border-gray-300 bg-gray-50 p-1 shadow-sm'}>
                <button
                  onClick={() => setConversionDirection('deg2rad')}
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                    conversionDirection === 'deg2rad'
                      ? (theme === 'cyberpunk' ? 'bg-gradient-to-r from-cyber-cyan to-cyber-green text-white shadow-lg shadow-cyber-cyan/50' : 'bg-indigo-600 text-white shadow-md')
                      : (theme === 'cyberpunk' ? 'text-cyber-cyan hover:bg-gray-700/50' : 'text-gray-700 hover:bg-gray-200')
                  }`}
                >
                  Degrees → Radians
                </button>
                <button
                  onClick={() => setConversionDirection('rad2deg')}
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                    conversionDirection === 'rad2deg'
                      ? (theme === 'cyberpunk' ? 'bg-gradient-to-r from-cyber-magenta to-cyber-purple text-white shadow-lg shadow-cyber-magenta/50' : 'bg-indigo-600 text-white shadow-md')
                      : (theme === 'cyberpunk' ? 'text-cyber-magenta hover:bg-gray-700/50' : 'text-gray-700 hover:bg-gray-200')
                  }`}
                >
                  Radians → Degrees
                </button>
              </div>
            </div>
          )}
          <div>
            <label className={theme === 'cyberpunk' ? 'block text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-green font-medium mb-2 text-left' : 'block text-gray-700 font-medium mb-2 text-left'}>
              {operation === 'angleConversion'
                ? conversionDirection === 'deg2rad'
                  ? 'Enter degrees:'
                  : 'Enter radians:'
                : 'Enter first number:'}
            </label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className={theme === 'cyberpunk' ? 'w-full px-4 py-3 border-2 border-cyber-cyan bg-gray-900/80 text-cyber-cyan rounded-xl focus:ring-2 focus:ring-cyber-magenta focus:border-cyber-magenta shadow-lg shadow-cyber-cyan/20 backdrop-blur-sm transition-all duration-300 placeholder-cyber-cyan/50' : 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm'}
              placeholder={operation === 'angleConversion'
                ? conversionDirection === 'deg2rad'
                  ? 'Degrees value' : 'Radians value'
                : 'First number'}
            />
          </div>
          {['sqrt', 'round', 'floor', 'ceil', 'reciprocal', 'sin', 'cos', 'tan', 'factorial', 'log', 'log10', 'exp', 'angleConversion'].includes(operation) ? null : (
                        <div>
              <label className={theme === 'cyberpunk' ? 'block text-transparent bg-clip-text bg-gradient-to-r from-cyber-magenta to-cyber-purple font-medium mb-2 text-left' : 'block text-gray-700 font-medium mb-2 text-left'}>Enter second number:</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className={theme === 'cyberpunk' ? 'w-full px-4 py-3 border-2 border-cyber-magenta bg-gray-900/80 text-cyber-magenta rounded-xl focus:ring-2 focus:ring-cyber-cyan focus:border-cyber-cyan shadow-lg shadow-cyber-magenta/20 backdrop-blur-sm transition-all duration-300 placeholder-cyber-magenta/50' : 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm'}
                placeholder="Second number"
              />
            </div>
          )}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleStepByStepCalculation}
              className={theme === 'cyberpunk' ? 'flex-1 bg-gradient-to-r from-cyber-green to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-green text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyber-green/50 hover:shadow-cyber-cyan/50 relative overflow-hidden group' : 'flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
            >
              {theme === 'cyberpunk' && <span className="absolute inset-0 bg-gradient-to-r from-cyber-magenta to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>}
              <span className="relative z-10">Calculate</span>
            </button>
            <button
              onClick={resetCalculator}
              className={theme === 'cyberpunk' ? 'flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-cyber-cyan font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-gray-700/50 border border-cyber-cyan/30 relative overflow-hidden group' : 'flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
            >
              {theme === 'cyberpunk' && <span className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>}
              <span className="relative z-10">Back to Menu</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default StepByStepCalculator;