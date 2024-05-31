"use client";

import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import DistributorsTable from "@/components/distributorsTable";
import { DistributorsForm } from "@/components/distributorsForm";
import getDistributors from "@/app/data/distributors";

export default function Distributors() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("/api/data?type=distributors")
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

  const data = getDistributors();

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 text-black dark:text-white">
      <div className="flex gap-4">
        <DistributorsTable data={data} />
        <DistributorsForm />
      </div>
    </main>
  );
}
