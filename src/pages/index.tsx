import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";
import { Inter } from "next/font/google";
import { ModelCanvas } from "@/components/ModelCanvas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import IntroGuide from "@/components/IntroGuide";

export default function Home() {
  return (
    <main className="h-screen min-h-screen">
      <IntroGuide />
      <ModelCanvas />
      <ToastContainer />
    </main>
  );
}
