/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ec4899",
				"primary-hover": "#db2777",
				borderColor: "#e2e8f0", // slate-200
				borderColorDark: "#334155", // slate-700
			},
		},
	},
	plugins: [],
};
