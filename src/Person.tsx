import React, { FC, useState, useEffect } from "react";

let testpromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Resolved"), 1000);
});

const Person: FC = () => {
  const [picture, setPicture] = useState("");
  const [count, setCount] = useState(0);
  const [resolveText, setResolveText] = useState("Loading");
  useEffect(() => {}, []);

  fetch("https://randomuser.me/api/")
    .then(result => JSON.stringify(result))
    .then(setPicture);

  testpromise.then(setResolveText);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me to go up!</button>
      <button onClick={() => setCount(count - 1)}>Click me to go down!</button>
      <p>{count}</p>
      <p>{picture}</p>
      <p>{resolveText}</p>
    </div>
  );
};

export default Person;
