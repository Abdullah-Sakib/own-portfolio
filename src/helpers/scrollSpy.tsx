import { useState, useEffect } from "react";

const ScrollSpy = (targetIds: string[]) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let currentSection = "";

      // Find the section that is currently in view
      for (let i = targetIds?.length - 1; i >= 0; i--) {
        const section = document.getElementById(targetIds[i]);
        if (section && section.offsetTop - 20 <= scrollTop) {
          currentSection = targetIds[i];
          break;
        }
      }

      setActiveSection(currentSection);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetIds]);

  return activeSection;
};

export default ScrollSpy;
