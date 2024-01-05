import dynamic from "next/dynamic";

// Dynamic import for NavBar
const Navbar = dynamic(() => import("../lib/NavBar"), { ssr: false });

// Import ThemeContext inside the component
export default function Page() {
  const { ThemeContext } = require("../lib/ThemeContext");

  return (
    <>
      <Navbar />
      <h1>article</h1>
      <p>article</p>
      </>
  );
}