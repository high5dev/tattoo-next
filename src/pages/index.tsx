import Image from "next/image";
import { Inter } from "next/font/google";
import { ModelCanvas } from "@/components/ModelCanvas";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for styling

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen min-h-screen">
        <ModelCanvas />
        <ToastContainer/>
    </main>
  );
}
