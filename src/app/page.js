"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('metaverse') //go to metaverse page
  }, []);
  return (
      <div></div>
  );
}
