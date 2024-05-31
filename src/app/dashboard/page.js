"use client";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import getBeans from "../data/beans";

export default function Dashboard() {
  let userId = null;
  if (typeof window !== "undefined") {
    userId = localStorage.getItem("userId");
  }

  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("/api/data?type=beans")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading)
  //   return (
  //     <main className="min-h-screen bg-white dark:bg-black mt-14 flex justify-center items-center">
  //       <Spinner />;
  //     </main>
  //   );

  const data = getBeans();

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomBean = data[randomIndex];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 text-white">
      <h1 className="text-4xl font-bold pb-4">Wellcome to Coffee Valley</h1>
      <p>Hello {userId}</p>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <h2 className="text-3xl font-bold">Bean of The Day</h2>
      <p>{randomBean.bean}</p>
      <h3 className="text-lg font-bold">Sale Price</h3>
      <p>{randomBean.price}</p>
      <h3 className="text-lg font-bold">Description</h3>
      <p>{randomBean.description}</p>
    </main>
  );
}
