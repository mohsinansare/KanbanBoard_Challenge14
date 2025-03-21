import { useEffect } from "react";

const useInactivityLogout = (
  timeoutDuration: number,
  logoutFunction: () => void
): void => {
  useEffect(() => {
    let timer: number | undefined;

    const resetTimer = () => {
      if (timer !== undefined) clearTimeout(timer);
      timer = window.setTimeout(() => {
        logoutFunction();
      }, timeoutDuration);
    };

    resetTimer();

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, [timeoutDuration, logoutFunction]);
};

export default useInactivityLogout;
