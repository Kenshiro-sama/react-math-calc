import React, { useState } from 'react';
import { handleMemoryClear, handleMemoryRecall, handleMemoryAdd, handleMemorySubtract, handleMemoryStore } from './utils/memoryOperations';
import CalculatorMenu from './components/CalculatorMenu';
import StepByStepCalculator from './components/StepByStepCalculator';
import ExpressionCalculator from './components/ExpressionCalculator';
import { handleStepByStepCalculation, handleExpressionCalculation } from './utils/calculationLogic';

const Calculator = () => {
        const [mode, setMode] = useState('menu'); // 'menu', 'step-by-step', 'expression' // 'initial', 'menu', 'step-by-step', 'expression' // 'initial', 'menu', 'step-by-step', 'expression' // 'menu', 'step-by-step', 'expression'
  const [currentStep, setCurrentStep] = useState(0);
  const [operation, setOperation] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [memory, setMemory] = useState<number | null>(null); // New state for memory
    const [conversionDirection, setConversionDirection] = useState<'deg2rad' | 'rad2deg'>('deg2rad'); // State for angle conversion direction
  const [theme, setTheme] = useState('default'); // New state for theme: 'default' or 'cyberpunk' // State for angle conversion direction









  const resetCalculator = () => {
    setMode('menu');
    setCurrentStep(0);
    setOperation('');
    setNum1('');
    setNum2('');
    setExpression('');
    setResult('');
    setError('');
  };

  const resetInputsAndResult = () => {
    setNum1('');
    setNum2('');
    setExpression('');
    setResult('');
    setError('');
  };





  return (
    <div className={theme === 'cyberpunk' ? 'min-h-screen bg-gray-900 text-green-400 flex items-center justify-center py-8 px-4 relative overflow-hidden cyberpunk-bg' : 'min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4'}>
      {/* Cyberpunk Visual Effects */}
      {theme === 'cyberpunk' && (
        <>
          {/* Scanline Effect */}
          <div className="scanline"></div>
          
          {/* Data Stream Particles */}
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          
          {/* Corner Accents */}
          <div className="corner-accent top-left"></div>
          <div className="corner-accent top-right"></div>
          <div className="corner-accent bottom-left"></div>
          <div className="corner-accent bottom-right"></div>
        </>
      )}
      <div className="max-w-lg w-full">
        <div className={theme === 'cyberpunk' ? 'bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-green-500 animate-border-pulse-multi relative overflow-hidden holographic' : 'bg-white rounded-2xl shadow-xl p-8 border border-gray-200'}>
          {/* Inner Glow Effect for Cyberpunk */}
          {theme === 'cyberpunk' && (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-green-500/5 pointer-events-none rounded-2xl"></div>
          )}
          {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className={theme === 'cyberpunk' ? 'text-4xl font-extrabold text-green-400 mb-3 animate-text-flicker relative z-10' : 'text-4xl font-extrabold text-gray-900 mb-3'}>
              Calculator
              {theme === 'cyberpunk' && (
                <span className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green opacity-20 blur-xl animate-pulse-glow"></span>
              )}
            </h1>
            <button
              onClick={() => setTheme(theme === 'default' ? 'cyberpunk' : 'default')}
              className={theme === 'cyberpunk' ? 'mb-6 px-6 py-3 bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-white font-bold rounded-full shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-300 animate-pulse-glow relative overflow-hidden group' : 'mb-6 px-4 py-2 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200'}
            >
              {theme === 'cyberpunk' && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-magenta to-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
              <span className="relative z-10">Toggle {theme === 'default' ? 'Cyberpunk' : 'Default'} Theme</span>
            </button>
            <div className={theme === 'cyberpunk' ? 'border-b-4 border-green-500 w-20 mx-auto mb-6 rounded-full animate-border-pulse-multi shadow-lg shadow-green-500/50' : 'border-b-4 border-indigo-500 w-20 mx-auto mb-6 rounded-full'}></div>
            <p className={theme === 'cyberpunk' ? 'text-green-300 text-sm leading-relaxed' : 'text-gray-600 text-sm leading-relaxed'}>Perform a wide range of calculations: basic arithmetic, percentages, square roots, powers, rounding, floor, ceil, factorials, reciprocals, trigonometric functions (sin, cos, tan), logarithms (ln, log10), exponentials, and angle conversions.</p>
          </div>

          {/* Main Content */}
          <div className="mb-6">
             {mode === 'menu' && <CalculatorMenu setMode={setMode} setCurrentStep={setCurrentStep} theme={theme} />}
            {mode === 'step-by-step' && (
                            <StepByStepCalculator
                currentStep={currentStep}
                setOperation={setOperation}
                setCurrentStep={setCurrentStep}
                operation={operation}
                setConversionDirection={setConversionDirection}
                conversionDirection={conversionDirection}
                num1={num1}
                setNum1={setNum1}
                num2={num2}
                setNum2={setNum2}
                handleStepByStepCalculation={() => handleStepByStepCalculation({ num1, num2, operation, expression, conversionDirection }, { setResult, setError })}
                resetCalculator={resetCalculator}
                theme={theme}
              />
            )}
            {mode === 'expression' && (
                            <ExpressionCalculator
                expression={expression}
                setExpression={setExpression}
                handleExpressionCalculation={() => handleExpressionCalculation({ num1, num2, operation, expression, conversionDirection }, { setResult, setError })}
                resetCalculator={resetCalculator}
                theme={theme}
              />
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className={theme === 'cyberpunk' ? 'mb-6 p-4 bg-red-900/50 border-2 border-red-500 text-red-400 rounded-xl text-sm animate-border-pulse-multi backdrop-blur-sm relative overflow-hidden' : 'mb-6 p-4 bg-red-50 border border-red-300 text-red-700 rounded-xl text-sm'}>
              {theme === 'cyberpunk' && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 animate-holographic"></div>
              )}
              <span className="relative z-10">{error}</span>
            </div>
          )}

          {/* Result Display */}
          {result && (
            <div className={theme === 'cyberpunk' ? 'mb-6 p-6 bg-gradient-to-br from-green-900/50 via-cyan-900/50 to-green-900/50 border-2 border-green-500 text-green-400 rounded-xl text-center animate-border-pulse-multi backdrop-blur-sm relative overflow-hidden' : 'mb-6 p-4 bg-green-50 border border-green-300 text-green-700 rounded-xl text-center'}>
              {theme === 'cyberpunk' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 via-cyber-green/10 to-cyber-magenta/10 animate-holographic"></div>
                  <div className="absolute inset-0 animate-pulse-glow"></div>
                </>
              )}
              <div className={theme === 'cyberpunk' ? 'font-semibold text-base text-green-300 relative z-10' : 'font-semibold text-base text-green-800'}>Result:</div>
              <div className={theme === 'cyberpunk' ? 'text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-magenta mt-2 animate-neon-glow-multi relative z-10' : 'text-3xl font-bold text-green-900 mt-1'}>{result}</div>
            </div>
          )}

          {/* Reset Button (when showing results) */}
          {(result || error) && (
            <div className="text-center">
              <button
                onClick={resetInputsAndResult}
                className={theme === 'cyberpunk' ? 'bg-gradient-to-r from-cyber-green to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-magenta text-gray-900 font-semibold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-cyber-green/50 hover:shadow-cyber-cyan/50 relative overflow-hidden group' : 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md'}
              >
                {theme === 'cyberpunk' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-cyber-magenta to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                )}
                <span className="relative z-10">Start New Calculation</span>
              </button>
            </div>
          )}

          {/* Memory Display and Controls */}
          <div className={theme === 'cyberpunk' ? 'mt-10 p-5 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-purple-500 rounded-xl shadow-inner animate-border-pulse-multi backdrop-blur-sm relative overflow-hidden' : 'mt-10 p-5 bg-gray-50 border border-gray-200 rounded-xl shadow-inner'}>
            {theme === 'cyberpunk' && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 via-cyber-magenta/5 to-cyber-cyan/5 animate-holographic"></div>
            )}
            <div className={theme === 'cyberpunk' ? 'font-semibold text-xl text-purple-400 mb-4 relative z-10' : 'font-semibold text-xl text-gray-800 mb-4'}>Memory: <span className={theme === 'cyberpunk' ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-magenta to-cyber-cyan animate-neon-glow-multi' : 'font-bold text-indigo-600'}>{memory !== null ? memory : 'Empty'}</span></div>
            <div className="grid grid-cols-5 gap-3">
              <button
                onClick={() => handleMemoryClear(setMemory, setError)}
                className={theme === 'cyberpunk' ? 'bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm' : 'bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm'}
              >
                MC
              </button>
              <button
                onClick={() => handleMemoryRecall(memory, mode, setNum1, setNum2, setExpression, setError)}
                className={theme === 'cyberpunk' ? 'bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm' : 'bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm'}
              >
                MR
              </button>
              <button
                onClick={() => handleMemoryAdd(result, memory, setMemory, setError)}
                className={theme === 'cyberpunk' ? 'bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm' : 'bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm'}
              >
                M+
              </button>
              <button
                onClick={() => handleMemorySubtract(result, memory, setMemory, setError)}
                className={theme === 'cyberpunk' ? 'bg-yellow-700 hover:bg-yellow-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm' : 'bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm'}
              >
                M-
              </button>
              <button
                onClick={() => handleMemoryStore(result, setMemory, setError)}
                className={theme === 'cyberpunk' ? 'bg-purple-700 hover:bg-purple-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm' : 'bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-3 rounded-lg text-sm transition-colors shadow-sm'}
              >
                MS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;