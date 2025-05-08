import Link from "next/link";

export function HouseHeader() {
  return (
    <>
      <div
        style={{
          height: "5vh",
          background: "#dfd3c3",
          borderBottom: "1px solid black",
          color: "black",
          alignContent: "center",
        }}
      >
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
                style={{ fontSize: 30, height: "5vh", alignContent: "center" }}
              >
                House on the Rock
              </div>
            </Link>
          </div>
          <div style={{ display: "flex", height: "5vh" }}>
            <Link
              href={"/publications"}
              prefetch={false}
              style={{ marginRight: 20, alignContent: "center" }}
            >
              <div>Published Books</div>
            </Link>
            <Link
              href={"/about"}
              prefetch={false}
              style={{ marginRight: 20, alignContent: "center" }}
            >
              <div>About Us</div>
            </Link>
            <Link
              href={"/gallery"}
              prefetch={false}
              style={{ marginRight: 20, alignContent: "center" }}
            >
              <div>Gallery</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
