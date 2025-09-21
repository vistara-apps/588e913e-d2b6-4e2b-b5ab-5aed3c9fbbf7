/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210, 30%, 98%)',
        accent: 'hsl(30, 80%, 55%)',
        primary: 'hsl(210, 70%, 50%)',
        surface: 'hsl(0, 0%, 100%)',
        'text-primary': 'hsl(210, 30%, 10%)',
        'text-secondary': 'hsl(210, 30%, 40%)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
      },
      spacing: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 30%, 10%, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
