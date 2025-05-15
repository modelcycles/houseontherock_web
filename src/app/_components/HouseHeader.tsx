"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../css/HeaderStyle.css";
import { IoClose } from "react-icons/io5";
import { MouseHovering } from "./MouseHovering";
import { useMedia } from "./MediaQueryContext";

export function HouseHeader() {
  const { isMobile, isTablet, isDesktop } = useMedia();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        style={{
          height: "80px",
          background: "#dfd3c3",
          borderBottom: "1px solid black",
          color: "black",
          alignContent: "center",
        }}
      >
        {isDesktop && <DesktopHeader />}
        {isTablet && <TabletHeader />}
        {isMobile && <MobileHeader />}
      </div>
    </>
  );
}

function DesktopHeader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div>
          <Link href={"/"} prefetch={false}>
            <div
              className="main-text-english"
              style={{
                fontSize: 30,
                alignItems: "baseline",
                alignContent: "center",
                display: "flex",
              }}
            >
              <span
                style={{
                  fontSize: 30,
                }}
              >
                HOUSE ON THE ROCK&nbsp;
              </span>
              <span
                style={{
                  fontSize: 16,
                }}
              >
                Publisher
              </span>
            </div>
          </Link>
        </div>
        <div id="spacer" />
        <div style={{ display: "flex" }}>
          <Link
            className="menu-button main-text-english"
            href={"/publications"}
            prefetch={false}
          >
            <div>Published Books</div>
          </Link>
          <Link
            className="menu-button main-text-english"
            href={"/about"}
            prefetch={false}
          >
            <div>About Us</div>
          </Link>
          <Link
            className="menu-button main-text-english"
            href={"/gallery"}
            prefetch={false}
            style={{ margin: 0 }}
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
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div>
          <Link href={"/"} prefetch={false}>
            <div className="main-text-english">
              <MouseHovering
                style={{
                  // display: "flex",
                  alignItems: "baseline",
                  alignContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                  }}
                >
                  HOUSE ON THE ROCK&nbsp;
                </span>
                <span
                  style={{
                    fontSize: 16,
                  }}
                >
                  Publisher
                </span>
              </MouseHovering>
            </div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Link
            className="menu-button main-text-english"
            href={"/publications"}
            prefetch={false}
          >
            <MouseHovering>
              <p>Published Books</p>
            </MouseHovering>
          </Link>
          <Link
            className="menu-button main-text-english"
            href={"/about"}
            prefetch={false}
            // style={{ marginRight: 20, alignContent: "center" }}
          >
            <MouseHovering>
              <p>About Us</p>
            </MouseHovering>
          </Link>
          <Link
            className="menu-button main-text-english"
            href={"/gallery"}
            prefetch={false}
            style={{ marginRight: 0 }}
          >
            <MouseHovering>
              <p>Gallery</p>
            </MouseHovering>
          </Link>
        </div>
      </div>
    </>
  );
}

function MobileHeader() {
  const [showDialog, setShowDialog] = useState(false);
  const transparentColor = "rgba(223, 211, 195, 0.7)";
  // const [isMenubutton, setMenubutton] = useState(true);
  // console.log("isMenubutton", isMenubutton);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 30,
          paddingRight: 20,
          zIndex: 1,
        }}
      >
        <div>
          <Link
            className="home-button main-text-english"
            href={"/"}
            prefetch={false}
          >
            <p>HOUSE ON THE ROCK</p>
          </Link>
        </div>
        <div style={{ transition: "0.3s" }}>
          <button
            onClick={() => {
              setShowDialog(true);
              console.log("showDialog", showDialog);
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
          </button>
          <BlurringBackground
            showDialog={showDialog}
            backgoundColor={transparentColor}
          >
            <div
              style={{
                // background: "white",
                padding: 40,
                // marginTop: 20,
                borderRadius: 10,
                textAlign: "center",
              }}
            >
              <div style={fadeInStyle}>
                <Link
                  className="menu-button main-text-english"
                  href={"/publications"}
                  prefetch={false}
                  onClick={() => setShowDialog(false)}
                >
                  <div style={{ color: showDialog ? "black" : "transparent" }}>
                    Published Books
                  </div>
                </Link>
              </div>
              <div style={fadeInStyle}>
                <Link
                  className="menu-button main-text-english"
                  href={"/about"}
                  prefetch={false}
                  onClick={() => setShowDialog(false)}
                >
                  <div style={{ color: showDialog ? "black" : "transparent" }}>
                    About Us
                  </div>
                </Link>
              </div>
              <div style={fadeInStyle}>
                <Link
                  className="menu-button main-text-english"
                  href={"/gallery"}
                  prefetch={false}
                  onClick={() => setShowDialog(false)}
                >
                  <div style={{ color: showDialog ? "black" : "transparent" }}>
                    Gallery
                  </div>
                </Link>
              </div>
              <button
                onClick={() => {
                  setShowDialog(false);
                }}
                style={{
                  marginTop: 10,
                  padding: 10,
                  background: "transparent",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                <IoClose
                  style={{ color: showDialog ? "black" : "transparent" }}
                  size={24}
                />
              </button>
            </div>
          </BlurringBackground>
        </div>
      </div>
    </>
  );
}

function BlurringBackground(props: {
  showDialog: boolean;
  backgoundColor: string;
  children?: React.ReactNode;
}) {
  const { showDialog, backgoundColor, children } = props;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "0.3s",
        transform: showDialog ? "scale(1)" : "scale(0.95)",
        visibility: showDialog ? "visible" : "hidden",
        backgroundColor: showDialog ? backgoundColor : "transparent",
        backdropFilter: showDialog ? "blur(13px)" : "blur(0px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {children}
    </div>
  );
}

const fadeInStyle = {
  opacity: 1,
  transform: "translateY(0)",
  transition: "opacity 0.5s ease, transform 0.5s ease",
};
