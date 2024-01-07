import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import useApollo from "../components/useApollo";

// Dynamic import components
const Navbar = dynamic(() => import("../components/NavBar"), { ssr: false });
const HelloBlock = dynamic(() => import("../widgets/HelloBlock/HelloBlock"), { ssr: false });
const BookCollection = dynamic(() => import("../widgets/BookCollection/BookCollection"), { ssr: false });
// const useApollo = dynamic(() => import("../components/useApollo"), { ssr: false });

export default function Page() {
  // const client = useApollo();

  return (
    <>
      <Navbar />
      <HelloBlock />
      <BookCollection />
      <h1>abtme</h1>
      <p>abtme-ssr</p>
      </>
  );
}