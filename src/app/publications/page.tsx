import Link from "next/link";
import { HouseBody } from "../_components/HouseBody";
import "../css/page.css";
import React from "react";

export default function PublishedBooks() {
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "100%",
          fontSize: 70,
          textAlign: "left",
          // background: "#f5ede4",
          display: "block",
        }}
      >
        <p
          style={{
            marginBottom: "75px",
            width: "100%",
            borderBottom: "1px solid black",
          }}
        >
          Publications
        </p>
        <div style={{ width: "100%", justifyItems: "center" }}>
          <ProductCard
            imageSrc="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
            title={"Two Of A Kind | by Yongcheol Cho"}
          ></ProductCard>
        </div>
      </div>
    </HouseBody>
  );
}

function ProductCard({ imageSrc, title }: { imageSrc: string; title: string }) {
  return (
    <div
      style={{
        width: "400px",
        textAlign: "left",
        // padding: "25px",
        // border: "1px solid black",
      }}
    >
      <Link href="/publications/twoofakind">
        <div
          style={{
            width: "100%",
            paddingTop: "100%",
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "4px",
          }}
        ></div>
        <p
          style={{
            marginTop: "10px",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          {title}
        </p>
      </Link>
    </div>
  );
}
