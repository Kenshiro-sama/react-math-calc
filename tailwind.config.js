/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'neon-glow': {
          '0%, 100%': { textShadow: '0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0' },
          '50%': { textShadow: '0 0 2px #0f0, 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0' },
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
      },
      animation: {
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
        'text-flicker': 'text-flicker 3s linear infinite alternate',
        'border-pulse': 'border-pulse 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

