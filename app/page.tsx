import dynamic from "next/dynamic";

// Dynamic import for NavBar
const Navbar = dynamic(() => import("../lib/NavBar"), { ssr: false });
const HelloBlock = dynamic(() => import("../widgets/HelloBlock/HelloBlock"), { ssr: false });

// Import ThemeContext inside the component
export default function Page() {
  const { ThemeContext } = require("../lib/ThemeContext");

  return (
    <>
      <Navbar />
      <HelloBlock />
      <h1>abtme</h1>
      <p>abtme-ssr</p>
      </>
  );
}