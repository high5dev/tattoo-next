import { useEffect } from "react";
import introJs from "intro.js";

const IntroGuide = () => {
  useEffect(() => {
    const intro = introJs();

    const step1 = document.querySelector("#toggleModel") as HTMLElement | null;
    const step2 = document.querySelector("#bodyPartSelect") as HTMLElement | null;
    const step3 = document.querySelector("#tattooDelete") as HTMLElement | null;
    const step4 = document.querySelector("#canvas") as HTMLElement | null;
    const step5 = document.querySelector("#toggleDebug") as HTMLElement | null;
    const step6 = document.querySelector("#togglePivot") as HTMLElement | null;
    const step7 = document.querySelector("#tattooSizeViewPanel") as HTMLElement | null;
    const step8 = document.querySelector("#calcualtePrice") as HTMLElement | null;

    intro.setOptions({
      steps: [
        { intro: "Welcome to the Tattoo Studio! Let me guide you through." },
        ...(step1 ? [{ element: step1, intro: "You can toggle model between Male and Female." }] : []),
        ...(step2 ? [{ element: step2, intro: "It's time to select a body part and upload an tattoo image." }] : []),
        ...(step3 ? [{ element: step3, intro: "You can delete the uploaded tattoo here." }] : []),
        ...(step4 ? [{ element: step4, intro: "You can change tattoo's position, size by controling joysticks to apply it at correct postion with desired size." }] : []),
        ...(step5 ? [{ element: step5, intro: "By enabling debug mode, you could easily adjust position and size along with rotation" }] : []),
        ...(step6 ? [{ element: step6, intro: "Once adjustment finished, you could hide the joysticks." }] : []),
        ...(step7 ? [{ element: step7, intro: "The total tattoo size with all specified body parts are calculated for price estimation." }] : []),
        ...(step8 ? [{ element: step8, intro: "How much does this cost? Just answer" }] : []),
        { intro: "All set! Enjoy!" },
      ],
      showProgress: true,
      showBullets: true,
      exitOnOverlayClick: false,
      disableInteraction: true,
    });

    intro.start();
  }, []);

  return null;
};

export default IntroGuide;
