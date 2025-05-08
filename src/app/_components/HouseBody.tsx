// import React from "react";

type Props = {
  children: React.ReactElement;
  background?: string;
  text_color?: string;
};

export function HouseBody({ children, background, text_color }: Props) {
  // const background = background ?? "#ecae7d";
  // const text_color = text_color ?? "black";
  return (
    <>
      <div
        style={{
          height: "90vh",
          background: background ?? "#dfd3c3",
          color: text_color ?? "black",
        }}
      >
        {children}
      </div>
    </>
  );
}
