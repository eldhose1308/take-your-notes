import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({children}) => {
  const mount = document.getElementById("myPortal");
  const el = document.createElement("div");

  // useEffect(() => {
  //   mount.appendChild(el);
  //   return () => mount.removeChild(el);
  // }, [el, mount]);

  return createPortal(children, document.getElementById("myPortal"))
};

export default Portal;