"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../css/HeaderStyle.css";
import { IoClose } from "react-icons/io5";

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
        {/* 가나다라 */}
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
  const [showDialog, setShowDialog] = useState(false);
  // const [isMenubutton, setMenubutton] = useState(true);
  // console.log("isMenubutton", isMenubutton);
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
        <div>
          <button
            onClick={() => {
              setShowDialog(true);
              // setMenubutton(false);
            }}
            style={{
              background: "none",
              border: "none",
              // fontSize: 20,
              cursor: "pointer",
              color: "black",
              backgroundColor: "#dfd3c3",
            }}
          >
            <div style={{ fontSize: 24 }}>☰</div>
            {/* {isMenubutton ? (
              <div style={{ fontSize: 24 }}>☰</div>
            ) : (
              <IoClose
                style={{ color: "black" }}
                size={24}
                onClick={() => {
                  setShowDialog(false);
                  setMenubutton(true);
                }}
              />
            )} */}
          </button>
          {showDialog && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(5px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: 40,
                  // marginTop: 20,
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                <div>
                  <Link
                    className="menu-button font-config"
                    href={"/publications"}
                    prefetch={false}
                    onClick={() => setShowDialog(false)}
                  >
                    <div>Published Books</div>
                  </Link>
                </div>
                <div>
                  <Link
                    className="menu-button font-config"
                    href={"/about"}
                    prefetch={false}
                    onClick={() => setShowDialog(false)}
                  >
                    <div>About Us</div>
                  </Link>
                </div>
                <div>
                  <Link
                    className="menu-button font-config"
                    href={"/gallery"}
                    prefetch={false}
                    onClick={() => setShowDialog(false)}
                  >
                    <div>Gallery</div>
                  </Link>
                </div>
                <button
                  onClick={() => {
                    setShowDialog(false);
                    // setMenubutton(true);
                  }}
                  style={{
                    marginTop: 10,
                    // width: "10px",
                    // height: "10px",
                    padding: 10,
                    background: "white",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  <IoClose style={{ color: "black" }} size={24} />
                </button>
              </div>
            </div>
          )}
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
