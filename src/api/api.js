import react, { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const url = "https://jsonplaceholder.typicode.com/albums";

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
      <input type="text"></input>
    </div>
  );
}

export default Api;
