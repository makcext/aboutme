
import dynamic from "next/dynamic";

// Dynamic import components
const PageIndex = dynamic(() => import("./pageIndex"), { ssr: false });



export default function Page() {
  return (
      <div>
        <PageIndex />
      </div>
  );
}