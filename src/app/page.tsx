"use client";
import { HouseBody } from "./_components/HouseBody";
import "./css/page.css";

export default function Home() {
  return (
    <HouseBody>
      <div className="main-text-korean" style={{ fontSize: 70 }}>
        <p style={{ marginTop: "20%", marginBottom: 50 }}>사진책으로</p>
        <p style={{ marginBottom: 50 }}>감동을 전달하는 출판사</p>
        <p style={{ marginBottom: 50 }}>하우스온더락입니다.</p>
      </div>
    </HouseBody>
  );
}
