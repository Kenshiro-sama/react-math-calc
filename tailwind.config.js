/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: '#00f0ff',
          magenta: '#ff00ff',
          purple: '#b026ff',
          green: '#00ff00',
          pink: '#ff006e',
          blue: '#0066ff',
        },
      },
      keyframes: {
        'neon-glow': {
          '0%, 100%': { textShadow: '0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0' },
          '50%': { textShadow: '0 0 2px #0f0, 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0' },
        },
        'neon-glow-multi': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 80px #00f0ff',
            filter: 'hue-rotate(0deg)'
          },
          '33%': { 
            textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff',
            filter: 'hue-rotate(120deg)'
          },
          '66%': { 
            textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 80px #00ff00',
            filter: 'hue-rotate(240deg)'
          },
        },
        'text-flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1',
            textShadow: '0 0 1px rgba(0, 255, 0, 0.7), 0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3)'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.9',
            textShadow: 'none'
          },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: '#10B981', boxShadow: '0 0 10px #10B981, inset 0 0 10px #10B981' },
          '50%': { borderColor: '#059669', boxShadow: '0 0 5px #059669, inset 0 0 5px #059669' },
        },
        'border-pulse-multi': {
          '0%': { 
            borderColor: '#00f0ff', 
            boxShadow: '0 0 20px #00f0ff, inset 0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.2)' 
          },
          '33%': { 
            borderColor: '#ff00ff', 
            boxShadow: '0 0 20px #ff00ff, inset 0 0 20px rgba(255, 0, 255, 0.3), 0 0 40px rgba(255, 0, 255, 0.2)' 
          },
          '66%': { 
            borderColor: '#00ff00', 
            boxShadow: '0 0 20px #00ff00, inset 0 0 20px rgba(0, 255, 0, 0.3), 0 0 40px rgba(0, 255, 0, 0.2)' 
          },
          '100%': { 
            borderColor: '#00f0ff', 
            boxShadow: '0 0 20px #00f0ff, inset 0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.2)' 
          },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'glitch-intense': {
          '0%, 100%': { 
            transform: 'translate(0)',
            textShadow: '0 0 1px rgba(0, 240, 255, 0.8), 0 0 3px rgba(255, 0, 255, 0.8)'
          },
          '10%': { 
            transform: 'translate(-5px, 2px)',
            textShadow: '-5px 0 rgba(0, 240, 255, 0.8), 5px 0 rgba(255, 0, 255, 0.8)'
          },
          '20%': { transform: 'translate(3px, -3px)' },
          '30%': { transform: 'translate(-2px, 4px)' },
          '40%': { transform: 'translate(4px, -2px)' },
          '50%': { 
            transform: 'translate(-3px, 3px)',
            textShadow: '3px 0 rgba(0, 240, 255, 0.8), -3px 0 rgba(255, 0, 255, 0.8)'
          },
          '60%': { transform: 'translate(2px, -4px)' },
          '70%': { transform: 'translate(-4px, 2px)' },
          '80%': { transform: 'translate(3px, 3px)' },
          '90%': { transform: 'translate(-2px, -2px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'breathing': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scaleY(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scaleY(1.5)'
          },
        },
        'breathing-glow': {
          '0%, 100%': { 
            boxShadow: '0 -50px 100px rgba(0, 240, 255, 0.3), 0 -100px 200px rgba(255, 0, 255, 0.2)',
            opacity: '0.5'
          },
          '50%': { 
            boxShadow: '0 -100px 200px rgba(0, 240, 255, 0.6), 0 -200px 400px rgba(255, 0, 255, 0.4)',
            opacity: '1'
          },
        },
        'holographic': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.2)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.8), 0 0 60px rgba(0, 240, 255, 0.5), 0 0 90px rgba(0, 240, 255, 0.3)'
          },
        },
        'rotate-hue': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
      animation: {
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
        'neon-glow-multi': 'neon-glow-multi 4s ease-in-out infinite',
        'text-flicker': 'text-flicker 3s linear infinite alternate',
        'border-pulse': 'border-pulse 2s ease-in-out infinite alternate',
        'border-pulse-multi': 'border-pulse-multi 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'glitch-slow': 'glitch 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'glitch-intense': 'glitch-intense 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'scanline': 'scanline 8s linear infinite',
        'data-stream': 'data-stream 3s linear infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
        'breathing-glow': 'breathing-glow 4s ease-in-out infinite',
        'holographic': 'holographic 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-hue': 'rotate-hue 10s linear infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}

