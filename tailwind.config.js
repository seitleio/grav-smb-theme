/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../config/**/*.yaml',
    '../../pages/**/*.md',
    './blueprints/**/*.yaml',
    './js/**/*.js',
    './templates/**/*.twig',
    './smb-theme.yaml',
    './smb-theme.php'
  ],
  darkMode: 'media', //false or 'media' or 'class'
  theme: {
    colors: {
      'inherit': 'inherit',
      'primary': '#AA87DE',
      'secondary': '#414361',
      'white': '#FDFDFF',
      'slate': {
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#64748b',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      'spacecadet': {
        100: '#F3F3F7',
        200: '#CECEDE',
        300: '#A9A9C6',
        400: '#8585AD',
        500: '#626293',
        600: '#49496E',
        700: '#313149',
        800: '#22223B',
        900: '#181825',
        950: '#101019'
      }      
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens')
  ]
}
