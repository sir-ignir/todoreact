import React, { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  const album = 0;
  const app = () => {
    const [post, setPost] = useState(null);
    useEffect(() => {
      const data = axios.get(url); /*= async () => {
         const res = await (url);
    const data = await res.json();
      };*/
      console.log(data);
    });
  };
  return (
    <div>
      <input type="text" value={album}></input>
      <button onClick="Api">click me</button>
    </div>
  );
}

export default Api;
