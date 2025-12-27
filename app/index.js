// frontend/src/pages/index.js (Next.js)
import { useEffect, useState } from "react";

export default function Homecall() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch((err) => console.error(err));
  }, []);

  return <h1>{data || "Loading..."}</h1>;
}
