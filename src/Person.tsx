import React, { FC, useState, useEffect } from "react";

let testpromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Resolved"), 1000);
});

const Person: FC = () => {
  const [picture, setPicture] = useState("");
  const [count, setCount] = useState(0);
  const [resolveText, setResolveText] = useState("Loading");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(json => json.results[0].picture.large)
      .then(pictureLink => setPicture(pictureLink))
      .then(() => setloading(false));
  }, []);

  testpromise.then(setResolveText);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me to go up!</button>
      <button onClick={() => setCount(count - 1)}>Click me to go down!</button>
      <p>{count}</p>

      <p>
        {!loading ? (
          <img src={picture} alt="A random persons face" />
        ) : (
          "Loading"
        )}
      </p>
      <p>{resolveText}</p>
    </div>
  );
};

export default Person;
