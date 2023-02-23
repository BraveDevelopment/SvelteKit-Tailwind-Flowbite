module.exports = {
	content: [
		"./src/routes/**/*.{svelte,js}",
		"./src/lib/components/**/*.{svelte,js}",
	],
	darkMode: "class",
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
	},
	plugins: [require("flowbite-typography"), require("flowbite/plugin")],
};
