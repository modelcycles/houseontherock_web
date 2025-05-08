"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./css/HeaderStyle.css";
export function HouseHeader() {
  const isPC = useMediaQuery({
    query: "(min-width:1951px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1950px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        style={{
          height: "50px",
          background: "#dfd3c3",
          borderBottom: "1px solid black",
          color: "black",
          alignContent: "center",
        }}
      >
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
          }}
          onClick={() => {
            console.log("is it PC? :", isPC);
          }}
        >
          <div>
            <Link href={"/"} prefetch={false}>
              <div
                className="font-config"
                style={{ fontSize: 30, alignContent: "center" }}
              >
                HOUSE ON THE ROCK
              </div>
            </Link>
          </div>
        </div> */}
        {isPC && <PcHeader />}
        {isTablet && <TabletHeader />}
        {isMobile && <MobileHeader />}
      </div>
    </>
  );
}

function PcHeader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div>
          <Link href={"/"} prefetch={false}>
            <div
              className="font-config"
              style={{ fontSize: 30, alignContent: "center" }}
            >
              HOUSE ON THE ROCK
            </div>
          </Link>
        </div>
        <div id="spacer" />
        <div style={{ display: "flex" }}>
          <Link
            className="menu-button font-config"
            href={"/publications"}
            prefetch={false}
          >
            <div>Published Books</div>
          </Link>
          <Link
            className="menu-button font-config"
            href={"/about"}
            prefetch={false}
          >
            <div>About Us</div>
          </Link>
          <Link
            className="menu-button font-config"
            href={"/gallery"}
            prefetch={false}
          >
            <div>Gallery</div>
          </Link>
        </div>
      </div>
    </>
  );
}

function TabletHeader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div>
          <Link href={"/"} prefetch={false}>
            <div
              className="font-config"
              style={{ fontSize: 30, alignContent: "center" }}
            >
              HOUSE ON THE ROCK
            </div>
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <Link
            className="menu-button font-config"
            href={"/publications"}
            prefetch={false}
          >
            <div>Published Books</div>
          </Link>
          <Link
            className="menu-button font-config"
            href={"/about"}
            prefetch={false}
            // style={{ marginRight: 20, alignContent: "center" }}
          >
            <div>About Us</div>
          </Link>
          <Link
            className="menu-button font-config"
            href={"/gallery"}
            prefetch={false}
            // style={{ marginRight: 20, alignContent: "center" }}
          >
            <div>Gallery</div>
          </Link>
        </div>
      </div>
    </>
  );
}
function MobileHeader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div>
          <Link className="home-button font-config" href={"/"} prefetch={false}>
            <div>HOUSE ON THE ROCK</div>
          </Link>
        </div>
        {/* <div style={{ display: "flex" }}>
          <Link
            className="menu-button font-config"
            href={"/publications"}
            prefetch={false}
          >
            <div>Published Books</div>
          </Link>
          <Link
            className="menu-button font-config"
            href={"/about"}
            prefetch={false}
            // style={{ marginRight: 20, alignContent: "center" }}
          >
            <div>About Us</div>
          </Link>
          <Link
            className="menu-button font-config"
            href={"/gallery"}
            prefetch={false}
            // style={{ marginRight: 20, alignContent: "center" }}
          >
            <div>Gallery</div>
          </Link>
        </div> */}
      </div>
    </>
  );
}
