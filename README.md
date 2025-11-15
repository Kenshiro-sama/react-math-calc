# React Math Calculator

A modern, interactive calculator built with React, TypeScript, and Tailwind CSS. Features both guided step-by-step and expression-based calculation modes.

## Features

- **Dual Input Modes**
  - Step-by-step: Guided menu-driven interface
  - Expression: Direct input (e.g., "5 + 3")
- **Mathematical Operations**
  - Addition (+)
  - Subtraction (-)
  - Division (/) with zero-division protection
- **Modern UI**
  - Responsive Tailwind CSS design
  - Clean gradient background
  - Interactive buttons with hover effects
  - Error and result display areas

## Tech Stack

- **Frontend**: React 19.1.1 + TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Linting**: ESLint 9.33.0 with React hooks plugin
- **Type Checking**: TypeScript with strict configuration

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── App.tsx          # Main app component
├── Calculator.tsx   # Calculator logic and UI
├── main.tsx        # React entry point
├── App.css         # App-specific styles
└── index.css       # Global styles
```

## Usage

1. **Step-by-Step Mode**: Select operation type, then enter numbers sequentially
2. **Expression Mode**: Type calculations directly (e.g., "10 / 2", "15 + 7")
3. **Error Handling**: Validates input and prevents division by zero

## Development

The project uses modern React patterns:
- Functional components with hooks
- TypeScript for type safety
- State management with useState
- Conditional rendering for different modes
- Event handling and form validation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Run tests and linting
4. Submit a pull request
