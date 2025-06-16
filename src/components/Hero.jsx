import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Background from './Background'

export default function Hero() {
  const fullText = "hi, i'm sumali...";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  const introText = "i love drawing, reading, and singing and somehow i managed to like coding and trading. the goal is to travel until i spend all my money and skydive until im out of adrenaline.\ncurrently i'm a junior studying business and computer science at carnegie mellon."
  const [intro, setIntro] = useState('');
  const [showIntro, setShowIntro] = useState(false);
  const [cursorOnIntro, setCursorOnIntro] = useState(false);

  const colors = [
    'text-beige',
    'text-red',
    'text-blue',
    'text-green',
    'text-yellow',
  ];

  const renderColoredIntro = () => {
    const words = intro.split(' ');
    const elements = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      elements.push(
        <span key={i} className={`${colors[i % colors.length]} mr-1`}>
          {word}
        </span>
      );

      if (i < words.length - 1 || intro.endsWith(' ')) {
        elements.push(' ');
      }
    }

    return elements;
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => {
          setShowIntro(true);
          setCursorOnIntro(true);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showIntro || intro.length >= introText.length) return;

    const timeout = setTimeout(() => {
      setIntro((prev) => prev + introText[prev.length]);
    }, 40);

    return () => clearTimeout(timeout);
  }, [intro, showIntro])

  return (
    <section className='relative h-screen w-full flex flex-col justify-center items-center text-center bg-darkblue text-white overflow-hidden'>
      {/* <Background /> */}
      <div className='z-10 text-center px-4'>
        <h1 className='text-5xl md:text-6xl font-spacemono text-beige z-10 tracking-wide'>
          {text}
          {/* {getColoredtext()} */}
          {!cursorOnIntro && <span className="cursor" />}
        </h1>

        {showIntro && (
          <p className='ml-20 mr-20 text-lg md:text-xl font-spacemono mt-4'>
            {renderColoredIntro()}
            <span className='cursor' />
          </p>
        )}
      </div>
    </section>
  )
}
