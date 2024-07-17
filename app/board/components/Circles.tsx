import styles from "./board.module.css";
const Circle = ({ x, y, bgColor, id }: any) => {
  return (
    <div
      className={styles.circle}
      style={{
        top: `${y - 12}px`,
        left: `${x - 12}px`,
        backgroundColor: bgColor,
      }}
    />
  );
};

const Circles = ({ circles }: any) => {
  return circles.map((circle: any) => <Circle key={circle.id} {...circle} />);
};
export default Circles;
