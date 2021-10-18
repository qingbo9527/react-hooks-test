import React, { useState, useEffect } from "react";

export default function MyuseEffect() {
  const [count, setCount] = useState(2);
  const [name, setName] = useState({});
  const [num, setNum] = useState(0);
  // 无需副作用
  useEffect(() => {
    // fetch("https://zpiy4.csb.app/data.json")
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setName(data);
    //   });
  });

  // 需要副作用的请求
  useEffect(() => {
    function scr() {
      console.log("scroll");
    }
    window.addEventListener("scroll", scr);

    // 组件销毁前，把全局事件注销，相当于componentWillUnmout
    return () => {
      window.removeEventListener("scroll", scr);
    };
  });

  // 限制更新：当限制条件改变时，才能再次让useEffect中的功能执行
  useEffect(() => {
    setNum(num + 1);
  }, [count]);

  return (
    <div style={{ height: "1500px" }}>
      <h1>useEffect</h1>
      <p>count is: {count}</p>
      <p>num is: {num}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <p>name is: {name.user}</p>
    </div>
  );
}
