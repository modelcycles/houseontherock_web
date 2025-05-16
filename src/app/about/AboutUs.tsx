import { HouseBody } from "../_components/HouseBody";

export function AboutUs() {
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="main-text-korean"
            style={{ width: "80%", maxWidth: "768px", textAlign: "justify" }}
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
            <p style={{ marginBottom: 20 }}>
              [마7:24-25] 24 그러므로 누구든지 나의 이 말을 듣고 행하는 자는 그
              집을 반석 위에 지은 지혜로운 사람 같으리니 25 비가 내리고 창수가
              나고 바람이 불어 그 집에 부딪치되 무너지지 아니하나니 이는 주추를
              반석 위에 놓은 까닭이요
            </p>
            <p style={{ marginBottom: 20 }}>
              우리 출판사의 목표는 한가지 입니다. 그것은 바로 사람을 살리는
              예술을 하는것입니다. 단 한 영혼이라도 빛을 보게 되어 살아난다면
              우리는 성공한 출판사가 될것입니다.
            </p>
            <p style={{ marginBottom: 20 }}>
              하나님의 시선과 마음을 담은 사진 책들을 출간하며 예수님이라는
              견고한 터 위에 집을 지어 완공하는 날까지 하우스온더락은 계속
              나아가겠습니다.
            </p>
          </div>
        </div>
      </div>
    </HouseBody>
  );
}
