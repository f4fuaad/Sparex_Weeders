import { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelay?: number;
  charDuration?: number;
}

function splitIntoWords(line: string): string[] {
  return line.match(/\S+|\s+/g) ?? [line];
}

export default function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [animate, setAnimate] = useState(false);
  const lines = text.split('\n');

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  let globalCharIndex = 0;

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        const words = splitIntoWords(line);

        return (
          <span key={lineIndex} className="block">
            {words.map((word, wordIndex) => {
              const wordStartIndex = globalCharIndex;
              globalCharIndex += word.length;

              return (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap"
                >
                  {word.split('').map((char, charIndex) => {
                    const delay = wordStartIndex * charDelay + charIndex * charDelay;

                    return (
                      <span
                        key={charIndex}
                        className="inline-block transition-all"
                        style={{
                          opacity: animate ? 1 : 0,
                          transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                          transitionDuration: `${charDuration}ms`,
                          transitionDelay: `${delay}ms`,
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
