import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import { Inter } from "next/font/google";
import { ModelCanvas } from "@/components/ModelCanvas";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for styling

export default function Home() {
  const steps = [
    {
      title: ' Welcome',
      intro: 'Welcome to Tattoo Studio',
    },
    {
      element: '#step1',
      intro: 'step 2',
    },
    {
      element: '#step1',
      intro: 'step 2',
    },
    {
      element: '#step1',
      intro: 'step 2',
    },
    {
      element: '#step1',
      intro: 'step 2',
    },
  ];
  return (
    <main className="h-screen min-h-screen">
        <ModelCanvas />
        <ToastContainer/>
    </main>
  );
}
