import { color } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  const numCircles = 12;
  const width = 18;
  const height = 18;

  useEffect(() => {
    const storedCoords = localStorage.getItem('cursor-position');
    if (storedCoords) {
      coords.current = JSON.parse(storedCoords);
    }

    const circles = circlesRef.current;
    circles.forEach((circle) => {
      if (circle) {
        circle.x = coords.current.x;
        circle.y = coords.current.y;
        circle.style.left = `${coords.current.x - width / 2}px`;
        circle.style.top = `${coords.current.y - height / 2}px`;
      }
    })

    const handleMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY }
      localStorage.setItem('cursor-position', JSON.stringify(coords.current))
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y

      circles.forEach((circle, i) => {
        if (!circle) return;

        circle.style.left = `${x - (width / 2)}px`;
        circle.style.top = `${y - (height / 2)}px`;

        const scale = (circles.length - i) / circles.length;
        circle.style.transform = `scale(${scale})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[i + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none mix-blend-differencs z-[999999]">
      {[...Array(numCircles)].map((_, i) => (
        <div
          key={i}
          ref={(e) => (circlesRef.current[i] = e)}
          style={{ width: `${width}px`, height: `${height}px` }}
          className={`absolute bg-muted-foreground rounded-full`}
        ></div>
      ))}
    </div>
  )
}
