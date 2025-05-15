import Link from "next/link";
import { HouseBody } from "../_components/HouseBody";
import { useMedia } from "../_components/MediaQueryContext";
import "../css/page.css";
import { useEffect, useState } from "react";

export function PublishedBooks() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isDesktop, isMobile, isTablet } = useMedia();

  if (!isClient) return null;

  return (
    <>
      {isDesktop && <DesktopPublishedBooks />}
      {isTablet && <TabletPublishedBooks />}
      {isMobile && <MobilePublishedBooks />}
    </>
  );
}

function DesktopPublishedBooks() {
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "60%",
          fontSize: 70,
          textAlign: "left",
          // background: "#f5ede4",
          display: "flex",
          flexDirection: "column",
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
        <div style={{ width: "100%", justifyItems: "left" }}>
          <ProductCard
            imageSrc="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
            title={"Two Of A Kind | by Yongcheol Cho"}
            size={"400px"}
          ></ProductCard>
        </div>
      </div>
    </HouseBody>
  );
}

function TabletPublishedBooks() {
  return (
    <HouseBody align="left">
      <div
        className="main-text-english"
        style={{
          width: "100%",
          fontSize: 70,
          textAlign: "left",
          // background: "#f5ede4",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
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
        <div
          style={{
            // background: "black",
            width: "767px",
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <ProductCard
            imageSrc="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
            title={"Two Of A Kind | by Yongcheol Cho"}
            size={"400px"}
            style={{ margin: "30px" }}
          ></ProductCard>
        </div>
      </div>
    </HouseBody>
  );
}

function MobilePublishedBooks() {
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
            marginBottom: "60px",
            width: "100%",
            borderBottom: "1px solid black",
          }}
        >
          Publications
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ProductCard
            imageSrc="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
            title={"Two Of A Kind | by Yongcheol Cho"}
            size={"80%"}
          ></ProductCard>
        </div>
      </div>
    </HouseBody>
  );
}

function ProductCard({
  imageSrc,
  title,
  size,
  style,
}: {
  imageSrc: string;
  title: string;
  size?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: size ? size : "400px",
        textAlign: "left",
        // padding: "25px",
        // background: "black",
        // border: "1px solid black",
        ...style,
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
