module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'neon-blue': '#00edff',
                'pale-blue': '#d9eeff',
                'dark-blue': '#21272c',
            },
            keyframes: {
                'slide-in-up': {
                    '0%': { transform: 'translateY(200%)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
            animation: {
                'slide-in-up': 'slide-in-up 1s',
            },
            fontFamily: {
                inconsolata: ['Inconsolata', 'monospace'],
                lato: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
