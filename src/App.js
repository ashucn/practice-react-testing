import React, { useRef, useCallback, useEffect, useState } from "react";
import "./styles.css";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const instance = useRef({ timerId: 0 });
  const [tid, setTid] = useState(0);

  const pollMessage = useCallback(() => {
    clearTimeout(instance.current.timerId); // stop previous timer, if any
    instance.current.timerId = window.setTimeout(pollMessage, 1000);
    setTid(instance.current.timerId);
  }, []);

  useEffect(() => {
    instance.current = { timerId: 0 };
    pollMessage();
    return () => {
      clearTimeout(instance.current.timerId);
    };
  }, [pollMessage]);

  return (
    <div className="App">
      <h2>{tid}</h2>
      <div className="app-header">
        <SearchBox requestSearch={console.log} />
      </div>
    </div>
  );
}
