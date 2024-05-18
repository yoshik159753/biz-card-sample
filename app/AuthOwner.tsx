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
      <div className="relative h-screen bg-red-200/80">
        <p>Not Found...</p>
        <div className="fixed top-0 left-0 right-0 h-screen grid gap-1 grid-cols-3 grid-rows-4 bg-blue-200/50">
          {/* TODO: 最終的には色を消す */}
          <div className="bg-green-200/50" onClick={() => onClickNum("1")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("2")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("3")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("4")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("5")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("6")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("7")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("8")} />
          <div className="bg-green-200/50" onClick={() => onClickNum("9")} />
          <div className="bg-green-200/50" onClick={() => onClickReset()} />
          <div className="bg-green-200/50" onClick={() => onClickNum("0")} />
          <div className="bg-green-200/50" onClick={() => onClickReset()} />
        </div>
      </div>
    </>
  );
}
