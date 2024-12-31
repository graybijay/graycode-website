import React, { useEffect } from "react";
import ScrollToTop from "../hooks/scroll-to-top";
import { animationCreate } from "../utils/utils";
import Loader from "../components/loader/loader";

const Wrapper = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
      setIsLoading(false);
    }, 1000);
  }, []);
  return ( 
    <>
    {isLoading ? (
      <Loader/>
    ) : (
      <>
        {children}
        <ScrollToTop />
      </>
    )}
  </>   
  );
};
export default Wrapper;
