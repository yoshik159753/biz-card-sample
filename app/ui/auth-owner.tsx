"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { authOwner } from "@/app/actions";

export default function AuthOwner() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const onClickNum = async (num: string) => {
    const newNum = input + num;
    if (await authOwner(newNum)) {
      router.push("/");
    } else {
      setInput(() => input + num);
    }
  };

  const onClickReset = () => {
    setInput("");
  };

  return (
    <>
      <div className="relative h-screen">
        <p>Not Found...</p>
        <div className="fixed top-0 left-0 right-0 h-screen grid gap-1 grid-cols-3 grid-rows-4">
          <div onClick={() => onClickNum("1")} />
          <div onClick={() => onClickNum("2")} />
          <div onClick={() => onClickNum("3")} />
          <div onClick={() => onClickNum("4")} />
          <div onClick={() => onClickNum("5")} />
          <div onClick={() => onClickNum("6")} />
          <div onClick={() => onClickNum("7")} />
          <div onClick={() => onClickNum("8")} />
          <div onClick={() => onClickNum("9")} />
          <div onClick={() => onClickReset()} />
          <div onClick={() => onClickNum("0")} />
          <div onClick={() => onClickReset()} />
        </div>
      </div>
    </>
  );
}
