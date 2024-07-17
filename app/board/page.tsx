"use client";

// create an empty board - done
// dots/ circles should appears wherever the user clicks
// support undo i.e. remove last added circle
// support redo i.e. add last removed circle
// support reset i.e. reseting the board to its original state

import Board from "./components/Board";
export default function BoardApp() {
  return (
    <div>
      <Board />
    </div>
  );
}
