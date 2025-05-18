import { useEffect, useState } from "react";
import { HouseBody } from "../_components/HouseBody";
import { useMedia } from "../_components/MediaQueryContext";

export function AboutUs() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isDesktop, isMobile, isTablet } = useMedia();
  if (!isClient) return null;
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "100%",
          textAlign: "left",
          // background: "#f5ede4",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            // marginBottom: "75px",
            width: "100%",
            borderBottom: "1px solid black",
            fontSize: 70,
          }}
        >
          About Us
        </p>
        <div
          style={{
            width: "100%",
            // height: "100%",
            display: "flex",
            flexDirection: isDesktop || isTablet ? "row" : "column",
            // justifyItems: "center",
            justifyContent: "left",
            // alignContent: "space-between",
            alignItems: isDesktop || isTablet ? "baseline" : "center",
          }}
        >
          <div
            className="main-text-korean"
            style={{
              maxWidth: "430px",
              textAlign: "justify",
              marginRight: isDesktop || isTablet ? 40 : 0,
            }}
          >
            <p
              style={{
                marginTop: "50px",
                marginBottom: 20,
              }}
            >
              하우스온더락은 마태복음 7장 25절 말씀을 기반으로 시작한 1인
              출판사입니다.
            </p>
            <div
              style={{
                width: "100%",
                background: "#b6a189",
                padding: 15,
                marginBottom: 20,
                borderRadius: 10,
              }}
            >
              <p style={{ color: "black" }}>
                비가 내리고 창수가 나고 바람이 불어 그 집에 부딪치되 무너지지
                아니하나니 이는 주추를 반석 위에 놓은 까닭이요
              </p>
              <p style={{ textAlign: "right" }}>마태복음 7장 25절</p>
            </div>
            <p style={{ marginBottom: 20 }}>
              우리 출판사의 목표는 한가지 입니다. 그것은 바로 사람을 살리는
              예술을 하는것입니다. 단 한 영혼이라도 빛을 보게 되어 살아난다면
              우리의 발걸음은 헛되지 않을 것입니다.
            </p>
            <p style={{ marginBottom: 20 }}>
              하나님의 시선과 마음을 담은 사진 책들을 출간하며 예수님이라는
              견고한 터 위에 집을 지어 완공하는 날까지 하우스온더락은 계속
              나아가겠습니다.
            </p>
            <p
              style={{ marginBottom: 20, textAlign: "right", fontWeight: 400 }}
            >
              설립자 조용철
            </p>
          </div>
          {/* <div
            className="main-text-korean"
            style={{
              width: "100%",
              maxWidth: "430px",
              textAlign: "justify",
              marginTop: 50,
            }}
          >
            <p style={{ marginBottom: 20 }}>조용철</p>
            <p style={{ marginBottom: 20 }}>
              조용철은 한국예술종합학교 작곡과를 졸업하였으며 황성호 김성기 배동진에게 사사하였다. 제 11회 세일 한국가곡 콩쿠르
              작곡부문 3위, 제2회 두남재 콩쿠르 2023년 한국가곡 대축제 in 당진
              한국가곡 콩쿠르 금상
            </p>
          </div> */}
          {/* <img
            style={{ width: "50%", maxWidth: "700px", padding: 30 }}
            src="/about_us.jpg"
          ></img> */}
        </div>
      </div>
    </HouseBody>
  );
}
