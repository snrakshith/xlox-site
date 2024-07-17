const Controls = ({
  hasCircles,
  hasHistory,
  handleUndo,
  handleRedo,
  handleReset,
}: any) => {
  return (
    <div
      className="controls"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        disabled={!hasCircles}
        className={!hasCircles ? "disabled" : ""}
        onClick={handleUndo}
      >
        Undo{" "}
      </button>
      <button
        disabled={!hasHistory}
        className={!hasHistory ? "disabled" : ""}
        onClick={handleRedo}
      >
        Redo
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Controls;
