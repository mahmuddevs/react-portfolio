import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Footer } from "./components/Footer"
import { FaArrowUp } from "react-icons/fa"
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 300) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isVisible]);

  return (
    <>
      <Header />
      <Outlet />
      {
        isVisible ?
          <button onClick={scrollToTop}
            className="p-4 rounded-full color-accent fixed z-50 top-[88vh] right-8"><FaArrowUp /></button> : ''
      }
      <Footer />
    </>
  )
}

export default App
