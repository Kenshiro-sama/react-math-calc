import { add, subtract, multiply, divide, modulus } from './mathOperations';
import { percentage, squareRoot, sin, factorial, power, round, floor, ceil, cos, tan, reciprocal, log, log10, exponential, degToRad, radToDeg, absolute, cubeRoot } from './advancedMathOperations';

interface CalculationState {
  num1: string;
  num2: string;
  operation: string;
  expression: string;
  conversionDirection: 'deg2rad' | 'rad2deg';
}

interface CalculationSetters {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const handleStepByStepCalculation = (
  state: CalculationState,
  setters: CalculationSetters
) => {
  const { num1, num2, operation, conversionDirection } = state;
  const { setResult, setError } = setters;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (['sqrt', 'round', 'floor', 'ceil', 'reciprocal', 'sin', 'cos', 'tan', 'factorial', 'log', 'log10', 'exp', 'angleConversion', 'absolute', 'cubeRoot'].includes(operation)) {
    if (isNaN(number1)) {
      setError(`Please enter a valid number for ${operation}!`);
      return;
    }
  } else {
    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers!');
      return;
    }
  }

  let calcResult: number | string;
  let operationSymbol: string;

  switch (operation) {
    case 'add':
      calcResult = add(number1, number2);
      operationSymbol = '+';
      break;
    case 'subtract':
      calcResult = subtract(number1, number2);
      operationSymbol = '-';
      break;
    case 'divide':
      calcResult = divide(number1, number2);
      operationSymbol = '/';
      break;
    case 'modulus':
      calcResult = modulus(number1, number2);
      operationSymbol = '%';
      break;
    case 'percentage':
      operationSymbol = '%';
      calcResult = percentage(number1, number2);
      break;
    case 'multiply':
      calcResult = multiply(number1, number2);
      operationSymbol = '*';
      break;
    case 'sqrt':
      calcResult = squareRoot(number1);
      operationSymbol = '√';
      break;
    case 'power':
      calcResult = power(number1, number2);
      operationSymbol = '^';
      break;
    case 'round':
      calcResult = round(number1);
      operationSymbol = 'Round';
      break;
    case 'floor':
      calcResult = floor(number1);
      operationSymbol = 'Floor';
      break;
    case 'ceil':
      calcResult = ceil(number1);
      operationSymbol = 'Ceil';
      break;
    case 'factorial':
      calcResult = factorial(number1);
      operationSymbol = '!';
      break;
    case 'reciprocal':
      calcResult = reciprocal(number1);
      operationSymbol = '1/';
      break;
    case 'sin':
      calcResult = sin(number1);
      operationSymbol = 'sin';
      break;
    case 'cos':
      calcResult = cos(number1);
      operationSymbol = 'cos';
      break;
    case 'tan':
      calcResult = tan(number1);
      operationSymbol = 'tan';
      break;
    case 'log':
      calcResult = log(number1);
      operationSymbol = 'ln';
      break;
    case 'log10':
      calcResult = log10(number1);
      operationSymbol = 'log10';
      break;
    case 'exp':
      calcResult = exponential(number1);
      operationSymbol = 'e^';
      break;
    case 'angleConversion':
      if (conversionDirection === 'deg2rad') {
        calcResult = degToRad(number1);
        operationSymbol = 'deg→rad';
      } else {
        calcResult = radToDeg(number1);
        operationSymbol = 'rad→deg';
      }
      break;
    case 'absolute':
      calcResult = absolute(number1);
      operationSymbol = 'abs';
      break;
    case 'cubeRoot':
      calcResult = cubeRoot(number1);
      operationSymbol = '∛';
      break;
    default:
      setError('Invalid operation!');
      return;
  }

  if (['sqrt', 'round', 'floor', 'ceil', 'factorial', 'reciprocal', 'sin', 'cos', 'tan', 'log', 'log10', 'exp', 'angleConversion', 'absolute', 'cubeRoot'].includes(operation)) {
    setResult(`${operationSymbol}(${number1}) = ${calcResult}`);
  } else {
    setResult(`${number1} ${operationSymbol} ${number2} = ${calcResult}`);
  }
  setError('');
};

export const handleExpressionCalculation = (
  state: CalculationState,
  setters: CalculationSetters
) => {
  const { expression } = state;
  const { setResult, setError } = setters;

  // Handle scientific constants
  const trimmedExpression = expression.trim().toLowerCase();
  if (trimmedExpression === 'pi' || trimmedExpression === 'π') {
    setResult(`π = ${Math.PI}`);
    setError('');
    return;
  }
  if (trimmedExpression === 'e') {
    setResult(`e = ${Math.E}`);
    setError('');
    return;
  }

  const parts = expression.split(/\s+/);

  if (parts.length === 2 && ['sqrt', 'round', 'floor', 'ceil', 'factorial', 'reciprocal', 'sin', 'cos', 'tan', 'log', 'log10', 'exp', 'deg2rad', 'rad2deg', 'absolute', 'abs', 'cubeRoot', 'cbrt'].includes(parts[0].toLowerCase())) {
    const operation = parts[0].toLowerCase();
    const num = parseFloat(parts[1]);
    if (isNaN(num)) {
      setError(`Please enter a valid number for ${operation}!`);
      return;
    }
    let calcResult: number | string;
    let operationSymbol: string;
    switch (operation) {
      case 'sqrt':
        calcResult = squareRoot(num);
        operationSymbol = '√';
        break;
      case 'round':
        calcResult = round(num);
        operationSymbol = 'Round';
        break;
      case 'floor':
        calcResult = floor(num);
        operationSymbol = 'Floor';
        break;
      case 'ceil':
        calcResult = ceil(num);
        operationSymbol = 'Ceil';
        break;
      case 'factorial':
        calcResult = factorial(num);
        operationSymbol = '!';
        break;
      case 'reciprocal':
        calcResult = reciprocal(num);
        operationSymbol = '1/';
        break;
      case 'sin':
        calcResult = sin(num);
        operationSymbol = 'sin';
        break;
      case 'cos':
        calcResult = cos(num);
        operationSymbol = 'cos';
        break;
      case 'tan':
        calcResult = tan(num);
        operationSymbol = 'tan';
        break;
      case 'log':
        calcResult = log(num);
        operationSymbol = 'ln';
        break;
      case 'log10':
        calcResult = log10(num);
        operationSymbol = 'log10';
        break;
      case 'exp':
        calcResult = exponential(num);
        operationSymbol = 'e^';
        break;
      case 'deg2rad':
        calcResult = degToRad(num);
        operationSymbol = 'deg→rad';
        break;
      case 'rad2deg':
        calcResult = radToDeg(num);
        operationSymbol = 'rad→deg';
        break;
      case 'absolute':
      case 'abs':
        calcResult = absolute(num);
        operationSymbol = 'abs';
        break;
      case 'cuberoot':
      case 'cbrt':
        calcResult = cubeRoot(num);
        operationSymbol = '∛';
        break;
      default:
        setError('Invalid unary operation!');
        return;
    }
    setResult(`${operationSymbol}(${num}) = ${calcResult}`);
    setError('');
    return;
  } else if (parts.length !== 3) {
    setError('Please enter in format: number operator number (e.g., 5 + 3), or a unary operation (e.g., sqrt 9, reciprocal 5, abs -5, cbrt 27), or a constant (pi, e)');
    return;
  }

  const num1 = parseFloat(parts[0]);
  const operator = parts[1];
  const num2 = parseFloat(parts[2]);

  if (isNaN(num1) || isNaN(num2)) {
    setError('Please enter valid numbers!');
    return;
  }

  let calcResult: number | string;
  switch (operator) {
    case '+':
      calcResult = add(num1, num2);
      break;
    case '-':
      calcResult = subtract(num1, num2);
      break;
    case '/':
      calcResult = divide(num1, num2);
      break;
    case '%':
      // Check if this is modulus or percentage based on context
      // If both numbers are provided, treat as modulus
      calcResult = modulus(num1, num2);
      break;
    case '*':
      calcResult = multiply(num1, num2);
      break;
    case '^':
      calcResult = power(num1, num2);
      break;
    default:
      setError('Unsupported operator! Use +, -, /, *, %, or ^');
      return;
  }

  setResult(`${num1} ${operator} ${num2} = ${calcResult}`);
  setError('');
};