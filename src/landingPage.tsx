import { HouseBody } from "./app/_components/HouseBody";

export function LandingPage() {
  return (
    <>
      <DesktopLandingPage />
    </>
  );
}

function DesktopLandingPage() {
  return (
    <>
      <HouseBody align="center">
        <>
          <div>
            <img
              src={"/landing_image.jpg"}
              alt="Two Of A Kind"
              style={{
                // position: "absolute",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                marginBottom: 20,
                // zIndex: 0,
              }}
            ></img>
            <div
              className="main-text-korean"
              style={{
                width: "100%",
                fontSize: 32,
                zIndex: 1,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p style={{ marginBottom: 20 }}>사진 책으로</p>
              <p style={{ marginBottom: 20 }}>빛을 전하는 출판사</p>
              <p style={{}}>하우스온더락입니다.</p>
            </div>
          </div>
        </>
      </HouseBody>
    </>
  );
}
