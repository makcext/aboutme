import dynamic from "next/dynamic";


// Dynamic import components
const HelloBlock = dynamic(() => import("../components/widgets/HelloBlock/HelloBlock"), { ssr: false });
const BookCollection = dynamic(() => import("../components/widgets/BookCollection/BookCollection"), { ssr: false });
const ToDo = dynamic(() => import("../components/widgets/ToDo/TaskView"), { ssr: false });
const WoltFee = dynamic(() => import("../components/widgets/WoltFee/WoltView"), { ssr: false });
const Avatars = dynamic(() => import("../components/widgets/Avatars/index"), { ssr: false });
const ScreenShareIdentification = dynamic(() => import("../components/widgets/ScreenShareIdentification/ScreenShareIdentification"), { ssr: false });
const TechStack = dynamic(() => import("../components/widgets/TechStack/index"), { ssr: false });
const Education = dynamic(() => import("../components/widgets/Education/index"), { ssr: false });
const Footer = dynamic(() => import("../components/widgets/Footer/index"), { ssr: false });
// const Skeleton = dynamic(() => import("../components/widgets/Skeleton/index"), { ssr: false });

export default function Page() {

  return (
    <>
      <HelloBlock />
      <BookCollection />
      <ToDo />
      <WoltFee />
      <Avatars />
      <ScreenShareIdentification />
      <TechStack />
      <Education />
      <Footer />
      {/* <Skeleton /> */}
    </>
  );
}