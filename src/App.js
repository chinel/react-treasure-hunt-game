import React, { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const canvasRef = useRef(null);
  const linkDownRef = useState(null);
  const linkUpRef = useState(null);
  const linkLeftRef = useState(null);
  const linkRightRef = useState(null);


  //set the height and width of the canvas
  //mimics componentDidMount
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  //move the box if x or y changes
  //mimics componentDidUpdate
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight,
      window.innerWidth
    ); //this logic here allows us to be able to move the canvas without drawing  a new one
    // context.fillRect(x, y, 100, 100); this draws a 100 by 100 Box

    let theLinkRef;
    if (direction === "down") theLinkRef = linkDownRef;
    if (direction === "up") theLinkRef = linkUpRef;
    if (direction === "left") theLinkRef = linkLeftRef;
    if (direction === "right") theLinkRef = linkRightRef;

    context.drawImage(theLinkRef.current, x, y);
  }, [x, y]);


  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button
          onClick={() => {
            move("up");
          }}
        >
          Up
        </button>
        <button
          onClick={() => {
            move("left");
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            move("down");
          }}
        >
          Down
        </button>
        <button
          onClick={() => {
            move("right");
          }}
        >
          Right
        </button>
      </div>

      <div className="images">
        <img
          ref={linkDownRef}
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down"
        />
        <img
          ref={linkRightRef}
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right"
        />
        <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img
          ref={linkLeftRef}
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left"
        />
      </div>
    </div>
  );
}
