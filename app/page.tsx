import dynamic from "next/dynamic";


// Dynamic import components
const HelloBlock = dynamic(() => import("../components/widgets/HelloBlock/HelloBlock"), { ssr: false });
const BookCollection = dynamic(() => import("../components/widgets/BookCollection/BookCollection"), { ssr: false });
const ToDo = dynamic(() => import("../components/widgets/ToDo/TaskView"), { ssr: false });

export default function Page() {

  return (
    <>
      {/* <Navbar /> */}
      <HelloBlock />
      <BookCollection />
      <ToDo />
      <h1>abtme</h1>
      <p>abtme-ssr</p>
    </>
  );
}