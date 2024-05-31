"use client";

import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";

import getBeans from "@/app/data/beans";

export default function Catalogue() {
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
  
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 text-black dark:text-white">
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Bean</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Price/Unit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.bean}
                </Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>${item.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
