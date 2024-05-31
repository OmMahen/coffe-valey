'use client';
import React, { useState, useEffect } from "react";

function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate =
    months[currentDate.getMonth()] +
    " " +
    currentDate.getDate() +
    ", " +
    currentDate.getFullYear();

  return <footer className="flex justify-center items-center h-28">{`Today's Date: ${formattedDate}`}</footer>;
}

export default Footer;
