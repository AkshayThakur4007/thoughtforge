import Closing from "@/components/landing/Closing";
import Footer from "@/components/landing/Footer";
import Introduction from "@/components/landing/Introduction";
import Navigation from "@/components/landing/Navigation";
import Principles from "@/components/landing/Principles";
import Workflow from "@/components/landing/Workflow";

export default function Home() {
  return (
    <>
      <Navigation />
      <Introduction />
      <Workflow />
      <Principles />
      <Closing />
      <Footer />
    </>
  );
}
