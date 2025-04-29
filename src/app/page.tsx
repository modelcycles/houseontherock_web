"use client";
import Image from "next/image";
import { HouseHeader } from "./houseHeader";
import { HouseBody } from "./houseBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/aboutUs";
import { LandingPage } from "./pages/landingPage";
import { Gallery } from "./pages/gallery";
import { PublishedBooks } from "./pages/publishedBooks";

export default function Home() {
  return (
    <BrowserRouter>
      <div>
        <HouseHeader />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/publications" element={<PublishedBooks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
