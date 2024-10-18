import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      height: "100vh",
    },
    extend: {},
  },
  plugins: [],
};

export default keepTheme(config);
