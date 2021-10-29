import { useState, useEffect } from "react";
// import Button from "../Button/Button";

export default function Timer() {
  const [active, toggleActive] = useState(false);
  const [interval, changeInterval] = useState(0);

  useEffect(() => {
    if (active) {
      window.termine = setInterval(() => {
        changeInterval((interval) => (interval += 1));
      }, 10);
    } else {
      clearInterval(window.termine);
    }
  }, [active]);

  return (
    <>
      <div>
        <div>{Math.floor(interval / 60 / 60)}</div>
        <div>{Math.floor(interval / 60) % 60}</div>
        <div>{interval % 60}</div>
      </div>
      <button onClick={() => toggleActive(!active)}>
        {active ? "Stop" : "Start"}
      </button>
      {/* <Button /> */}
    </>
  );
}
