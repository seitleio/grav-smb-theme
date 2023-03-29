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
  theme: { },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens')
  ]
}
