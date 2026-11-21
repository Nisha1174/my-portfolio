
import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const handleMove = (event) => {
      const { clientX, clientY } = event;

      dot.style.transform =
        `translate3d(${clientX}px, ${clientY}px, 0)`;

      cursor.style.transform =
        `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    const handleDown = () => cursor.classList.add("cursor-click");
    const handleUp = () => cursor.classList.remove("cursor-click");

    const handleHover = (event) => {
      if (event.target.closest("a, button, input, textarea")) {
        cursor.classList.add("cursor-hover");
      } else {
        cursor.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
