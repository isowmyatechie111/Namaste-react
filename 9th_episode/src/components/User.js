import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hello from fun");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h2>Name: {name} </h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
      <h5>Count: {count}</h5>
      <h5>Count 2: {count2}</h5>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        Increment 2
      </button>
    </div>
  );
};

export default User;
