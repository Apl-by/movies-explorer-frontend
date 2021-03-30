import { useState, useEffect } from "react";

// Пример использования хука:
// const isMobil = useMediaQuery("max-width: 768px") -- // true/false

const useMediaQuery = (value) => {
  const mediaQuery = window.matchMedia(`(${value})`);

  const [matched, setMatched] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleSizeChange = (e) => {
      setMatched(e.matches);
    };

    mediaQuery.addEventListener("change", handleSizeChange);

    return () => mediaQuery.removeEventListener("change", handleSizeChange);
  }, [mediaQuery]);

  return matched;
};

export default useMediaQuery;
