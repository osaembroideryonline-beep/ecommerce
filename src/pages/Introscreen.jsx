import { useEffect, useState } from "react";

const IntroScreen = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsPortrait(
        window.matchMedia("(orientation: portrait)").matches &&
        window.innerWidth < 1024
      );
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full flex items-center justify-center z-50"
      style={{
        backgroundImage: `url('${
          isPortrait
            ? "https://res.cloudinary.com/dobuwrfn8/image/upload/v1768031972/osamobilebg_odno82.webp"
            : "https://res.cloudinary.com/dobuwrfn8/image/upload/v1768031971/osadeskbg_sjgma5.webp"
        }')`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "top center",
        backgroundSize: isPortrait ? "contain" : "cover",
      }}
    >
      <img
        src="https://res.cloudinary.com/dobuwrfn8/image/upload/v1764486573/OSA_LOGO_ANIMATION1_eohmjx.gif"
        alt="Intro Animation"
        className="w-[350px] max-w-full h-auto"
      />
    </div>
  );
};

export default IntroScreen;
