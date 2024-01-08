import dynamic from "next/dynamic";


// Dynamic import components
const HelloBlock = dynamic(() => import("../widgets/HelloBlock/HelloBlock"), { ssr: false });
const BookCollection = dynamic(() => import("../widgets/BookCollection/BookCollection"), { ssr: false });

export default function Page() {

  return (
    <>
      {/* <Navbar /> */}
      <HelloBlock />
      <BookCollection />
      <h1>abtme</h1>
      <p>abtme-ssr</p>
    </>
  );
}