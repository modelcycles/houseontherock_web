"use client";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import "../css/FooterStyle.css";

export function HouseFooter() {
  const [showDialog, setShowDialog] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("houseontherock2025@gmail.com");
    setShowDialog(true);

    // 2초 후 메시지 숨기기
    setTimeout(() => {
      setShowDialog(false);
    }, 2000);
  };

  return (
    // #dfd3c3
    <>
      <div
        style={{
          height: "100px",
          background: "#dfd3c3",
          color: "black",
          justifyItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="menu-button">
          <Link href="https://www.instagram.com/yongcheol_c/" target="_blank">
            <Image
              src="/instagram_logo.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="menu-button">
          <Link
            href="https://smartstore.naver.com/houseontherock"
            target="_blank"
          >
            <Image
              src="/smartstore_logo.svg"
              alt="smartstore"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div
          className="menu-button"
          style={{
            position: "relative",
            cursor: "pointer",
            // backgroundColor: "blue",
          }}
        >
          <BiLogoGmail
            size={28}
            onClick={() => {
              handleCopyEmail();
            }}
          />
          <SpeechBubble showDialog={showDialog} />
        </div>
        {/* <div>Instagram : yongcheol_c</div> */}
        {/* <div>e-mail : houseontherock2025@gmail.com</div> */}
      </div>
    </>
  );
}

function SpeechBubble(props: { showDialog: boolean }) {
  const { showDialog } = props;
  return (
    <div
      className="font-config"
      style={{
        position: "absolute",
        bottom: "85px", // Position further above the icon
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0, 0, 0, 0.6)",
        color: "white",
        fontSize: "16px", // Updated font size
        padding: "8px 16px", // Larger padding
        borderRadius: "16px", // More rounded corners
        visibility: showDialog ? "visible" : "hidden",
        opacity: showDialog ? 1 : 0,
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
        whiteSpace: "nowrap",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        pointerEvents: showDialog ? "auto" : "none",
      }}
    >
      Mail address copied!
      <div
        style={{
          position: "absolute",
          top: "100%", // Align the triangle with the bottom of the dialog
          left: "50%",
          transform: "translateX(-50%)",
          width: "0",
          height: "0",
          borderLeft: "10px solid transparent", // Larger triangle
          borderRight: "10px solid transparent", // Larger triangle
          borderTop: "10px solid rgba(0, 0, 0, 0.6)", // Larger triangle
        }}
      ></div>
    </div>
  );
}
