import { HouseBody } from "@/app/_components/HouseBody";
import "../../css/page.css";

export default function TwoOfAKind() {
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "100%",
          //   textAlign: "left",
          // background: "#f5ede4",
          display: "block",
          justifyItems: "center",
        }}
      >
        {/* <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        > */}
        <div
          style={{
            width: "100%",
          }}
        >
          <p
            style={{
              marginBottom: "75px",
              width: "100%",
              borderBottom: "1px solid black",
              textAlign: "left",
              fontSize: 60,
            }}
          >
            Two Of A Kind
          </p>
        </div>
        {/* </div> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src="/two_of_a_kind.jpg"
            alt="Two Of A Kind"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div
          style={{
            width: "80%",
            // background: "white",
            textAlign: "left",
            fontSize: 16,
            fontWeight: "normal",
          }}
        >
          <p className="main-text-english">ISBN | 979-11-992396-0-9</p>
          <div>
            <span className="main-text-korean">제본 </span>
            <span className="main-text-english"> | </span>
            <span className="main-text-korean">하드커버 각양장제본 </span>
          </div>
          <div>
            <span className="main-text-korean">크기 </span>
            <span className="main-text-english"> | </span>
            <span className="main-text-english">210 x 255</span>
            <span className="main-text-korean">페이지</span>
          </div>
        </div>
      </div>
    </HouseBody>
  );
}
