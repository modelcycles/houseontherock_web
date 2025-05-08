import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

export function HouseFooter() {
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
          <FaInstagram size={24} />
        </div>
        <div className="menu-button">
          <BiLogoGmail size={24} />
        </div>
        {/* <div>Instagram : yongcheol_c</div> */}
        {/* <div>e-mail : houseontherock2025@gmail.com</div> */}
      </div>
    </>
  );
}
