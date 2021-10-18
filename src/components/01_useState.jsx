import React, { useState } from "react";

export default function MyuseState() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ height: "1500px" }}>
      <p>you clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}
