/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'clr-soft-red': 'var(--clr-soft-red)',
        'clr-cyan': 'var(--clr-cyan)',
        'clr-dark-brown': 'var(--clr-dark-brown)',
        'clr-medium-brown': 'var(--clr-medium-brown)',
        'clr-cream': 'var(--clr-cream)',
        'clr-very-pale-orange': 'var(--clr-very-pale-orange)',
      },
      fontFamily: {
        'dm-sans': 'var(--ff-body)',
      },
      fontSize: {
        'fs-body': 'var(--fs-body)',
      },
      fontWeight: {
        'fw-400': 'var(--fw-400)',
        'fw-700': 'var(--fw-700)',
      },
    },
  },
  plugins: [],
}
