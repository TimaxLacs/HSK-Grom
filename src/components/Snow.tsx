import { useMemo } from 'react';

const Snow = () => {
  const flakes = useMemo(
    () =>
      Array.from({ length: 42 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        delay: Math.random() * -14,
        duration: 11 + Math.random() * 12,
        size: 1.5 + Math.random() * 2.5,
        opacity: 0.22 + Math.random() * 0.38,
        drift: -18 + Math.random() * 36,
      })),
    [],
  );

  return (
    <div className="snow" aria-hidden>
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snow-flake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            ['--drift' as string]: `${flake.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
