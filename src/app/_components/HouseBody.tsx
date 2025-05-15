"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "../css/BodyStyle.css";
// import React from "react";

type Props = {
  children: React.ReactElement;
  background?: string;
  text_color?: string;
  align: "left" | "center" | "right";
};

export function HouseBody({ children, background, text_color, align }: Props) {
  // const background = background ?? "#ecae7d";
  // const text_color = text_color ?? "black";
  const [animate, setAnimate] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setAnimate(false); // 애니메이션 초기화
    const timeout = setTimeout(() => setAnimate(true), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <div
        style={{
          width: "100%",
          // height: "100vh",
          padding: "30px",
          // paddingLeft: "30px",
          // paddingRight: "30px",
          justifyContent: align,
          display: "flex",
          flex: 1,
          background: background ?? "#dfd3c3",
          color: text_color ?? "black",
        }}
      >
        <div
          className={animate ? "fade-in-up" : ""}
          style={{ width: "100%", justifyItems: align }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
