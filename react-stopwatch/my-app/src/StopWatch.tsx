import { useState } from 'react';
import './App.css';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handlePlay() {
    const newIntervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervalId(newIntervalId);
    setIsPlaying(true);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
    setIsPlaying(false);
  }

  function handleReset() {
    if (!isPlaying) {
      setTimer(0);
    }
  }
  return (
    <>
      <div className="watch-face" onClick={handleReset}>
        <h1 className="number">{timer}</h1>;
      </div>
      {isPlaying ? (
        <FaPause onClick={handlePause} className="size" />
      ) : (
        <FaPlay onClick={handlePlay} className="size" />
      )}
    </>
  );
}
