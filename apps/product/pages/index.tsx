import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../packages/data-context/store";

export default function Home() {
  // Access the number from the Redux store
  const number = useSelector((state: RootState) => {
    return state.number.value;
  });
  const states = useSelector((state: RootState) => {
    return state;
  });
  console.log("🚀 ~ Home ~ state:", states);
  console.log("🚀 ~ Home ~ stdakjshdkjh:", number);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-1">
          Product Application
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          This is the product application that maintained by the{" "}
          <strong>Product Team</strong>
        </p>
        <p className="text-xl font-semibold mt-4">
          Entered Number: {number !== null ? number : "No number entered yet"}
        </p>
      </div>
    </main>
  );
}
