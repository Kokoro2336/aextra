// define the animations' style.
export default {
    content: [
        "./src/**/*.{astro,html,js,ts,jsx,tsx}",
        "./index.html"
    ],
    theme: {
        extend: {
        keyframes: {
            fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(6px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            pop: {
            '0%': { transform: 'scale(.96)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' }
            }
        },
        animation: {
            'fade-in': 'fadeIn 300ms ease-out both',
            'pop': 'pop 250ms cubic-bezier(.2,.8,.2,1) both'
        }
        }
    },
    plugins: [],
}