import Head from "next/head";
// sections
import HomeHero from "@/sections/home/home-hero";
import HomeIntroduction from "@/sections/home/home-introduction";
import HomeDemo from "@/sections/home/home-demo";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNumber } from "@repo/data-context/reducers/number-reducer";

// ----------------------------------------------------------------------

export default function Home() {
  const [inputValue, setInputValue] = useState<number | "">("");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? "" : parseInt(event.target.value);
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (typeof inputValue === "number") {
      dispatch(setNumber(inputValue));
      setInputValue(""); // Reset the input field
    }
  };

  return (
    <div>
      <Head>
        <title>Micro Frontends</title>
      </Head>
      <HomeHero />

      <HomeIntroduction />

      <HomeDemo />
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
