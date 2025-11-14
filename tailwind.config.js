/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Star Twinkle
        'twinkle': 'twinkle 2s infinite alternate',
        
        // Orbital Rings Spins
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse': 'spin-reverse 40s linear infinite',
        'spin-fast': 'spin 15s linear infinite',
        
        // SATELLITE AND COMET ORBITS: Now using specific orbit keyframes
        'satellite-large': 'orbit-satellite 5s linear infinite', // Faster, closer orbit
        'comet': 'orbit-comet 8s linear infinite', // Slower, further orbit
      },
      keyframes: {
        // Star Twinkle Keyframes
        twinkle: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        
        // Reverse Spin Keyframes for the Ring
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
        
        // KEYFRAME 1: Satellite Orbit (Moves 80px out from center, then rotates)
        'orbit-satellite': {
          '0%': { transform: 'rotate(0deg) translateX(80px)' },
          '100%': { transform: 'rotate(360deg) translateX(80px)' },
        },

        // KEYFRAME 2: Comet Orbit (Moves 120px out from center, then rotates)
        'orbit-comet': {
          '0%': { transform: 'rotate(0deg) translateX(120px)' },
          '100%': { transform: 'rotate(360deg) translateX(120px)' },
        },
      },
    },
  },
  plugins: [],
}