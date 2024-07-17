import { useState } from "react";
import { COLORS } from "../constants";
import Circles from "./Circles";
import Controls from "./Controls";
import styles from "./board.module.css";

const getRandomColor = () => {
  // to generate index numbers between 0 - colors.length -1
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const Board = () => {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);

  const handleClick = (e: any) => {
    // @ts-ignore
    setCircles((prev: any) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          bgColor: getRandomColor(),
          id: +new Date(),
        },
      ];
    });
    console.log(circles);
  };

  const handleUndo = () => {
    const copy = [...circles];
    const lastCircle = copy.pop();
    // @ts-ignore
    setHistory((prev: any) => {
      return [...prev, lastCircle];
    });
    setCircles(copy);
  };
  const handleRedo = () => {
    const copy = [...history];
    const lastCircle = copy.pop();
    // @ts-ignore
    setCircles((prev) => {
      return [...prev, lastCircle];
    });
    setHistory(copy);
  };
  const handleReset = () => {
    setCircles([]);
    setHistory([]);
  };

  return (
    <div className={styles.board} onClick={handleClick}>
      <Circles circles={circles} />
      <Controls
        hasCircles={circles.length > 0}
        hasHistory={circles.length > 0}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Board;
