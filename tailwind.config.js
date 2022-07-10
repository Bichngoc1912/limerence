module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '48': '4fr 8fr'
      },
      color: {
        'orange': '#7C2D12',
        'brown': '#7F1D1D',
      }
    },
    fontFamily: {
      'ms-madi': ['"Open Sans"', 'cursive'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}