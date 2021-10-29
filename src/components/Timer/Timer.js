import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function Timer() {
  const [active, toggleActive] = useState(false);
  const [interval, changeInterval] = useState(0);
  const [doubleClick, changedoubleClick] = useState([]);

  useEffect(() => {
    if (active) {
      window.termine = setInterval(() => {
        changeInterval((interval) => (interval += 1));
      }, 1000);
    } else {
      clearInterval(window.termine);
    }
  }, [active]);

  useEffect(() => {
    if (doubleClick[1] - doubleClick[0] < 300) {
      clearInterval(window.termine);
      toggleActive((active) => !active);
    }
    if (doubleClick[1] - doubleClick[0] >= 300) {
      console.log("ожидается двойной щелчек мыши");
      changedoubleClick([]);
    }

    if (doubleClick.length === 2) changedoubleClick([]);
  }, [doubleClick]);

  const changeActive = () => {
    toggleActive(!active);
    if (active) changeInterval(0);
  };

  const waitClick = () => {
    changedoubleClick((doubleClick) => [...doubleClick, new Date()]);
  };

  const reset = () => {
    changeInterval(0);
  };

  return (
    <>
      <div>
        <span>
          {String(Math.floor(interval / 60 / 60)).padStart(2, 0)}:
          {String(Math.floor(interval / 60) % 60).padStart(2, 0)}:
          {String(interval % 60).padStart(2, 0)}
        </span>
      </div>

      <Button onClick={changeActive} data={active ? "Stop" : "Start"} />
      <Button onClick={waitClick} data={"Wait"} />
      <Button onClick={reset} data={"Reset"} />
    </>
  );
}
