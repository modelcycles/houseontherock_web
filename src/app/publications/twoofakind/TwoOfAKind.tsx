import { HouseBody } from "@/app/_components/HouseBody";
import "../../css/page.css";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "@/app/_components/MediaQueryContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function TwoOfAKind() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isDesktop, isMobile, isTablet } = useMedia();

  if (!isClient) return null;

  return (
    <>
      {isDesktop && <DesktopTwoOfAKind />}
      {isTablet && <TabletTwoOfAKind />}
      {isMobile && <MobileTwoOfAKind />}
    </>
  );
}

export function DesktopTwoOfAKind() {
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "50%",
          //   textAlign: "left",
          // background: "#f5ede4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          justifyContent: "center",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              marginBottom: "60px",
              // width: "100%",
              borderBottom: "1px solid black",
              textAlign: "left",
              fontSize: 50,
            }}
          >
            Two Of A Kind
          </p>
        </div>
        {/* </div> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "50%",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center",
              marginRight: "45px",
            }}
          >
            <ImageCarousel images={images} />
            <PerchaseButton url="https://smartstore.naver.com/houseontherock/products/11856435620" />
            {/* <img
              src="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
              alt="Two Of A Kind"
              style={{ width: "100%", height: "auto" }}
            /> */}
          </div>
          <div
            style={{
              width: "50%",
              // background: "white",
              textAlign: "left",
              fontSize: 16,
              fontWeight: "normal",
              // background: "black",
            }}
          >
            <InfoText />
          </div>
        </div>
      </div>
    </HouseBody>
  );
}

export function TabletTwoOfAKind() {
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "100%",
          //   textAlign: "left",
          // background: "#f5ede4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              marginBottom: "60px",
              // width: "100%",
              borderBottom: "1px solid black",
              textAlign: "left",
              fontSize: 50,
            }}
          >
            Two Of A Kind
          </p>
        </div>
        {/* </div> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "50%",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center",
              marginRight: "45px",
            }}
          >
            <ImageCarousel images={images} />
            <PerchaseButton url="https://smartstore.naver.com/houseontherock/products/11856435620" />
            {/* <img
              src="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
              alt="Two Of A Kind"
              style={{ width: "100%", height: "auto" }}
            /> */}
          </div>
          <div
            style={{
              width: "50%",
              // background: "white",
              textAlign: "left",
              fontSize: 16,
              fontWeight: "normal",
              // background: "black",
            }}
          >
            <InfoText />
          </div>
        </div>
      </div>
    </HouseBody>
  );
}

export function MobileTwoOfAKind() {
  return (
    <HouseBody align="center">
      <div
        className="main-text-english"
        style={{
          width: "100%",
          //   textAlign: "left",
          // background: "#f5ede4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              marginBottom: "60px",
              // width: "100%",
              borderBottom: "1px solid black",
              textAlign: "left",
              fontSize: 50,
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "45px",
          }}
        >
          <ImageCarousel images={images} />
          <PerchaseButton url="https://smartstore.naver.com/houseontherock/products/11856435620" />
          {/* <img
            src="/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg"
            alt="Two Of A Kind"
            style={{ width: "100%", height: "auto" }}
          /> */}
        </div>
        <div
          style={{
            width: "100%",
            // background: "white",
            textAlign: "left",
            fontSize: 16,
            fontWeight: "normal",
            // background: "black",
          }}
        >
          <div
            style={{
              width: "100%",
              // background: "white",
              textAlign: "left",
              fontSize: 16,
              fontWeight: "normal",
              // background: "black",
            }}
          >
            <InfoText />
          </div>
        </div>
      </div>
    </HouseBody>
  );
}

function InfoText() {
  return (
    <>
      <div className="main-text-korean">
        <p
          style={{
            fontSize: 32,
            fontWeight: 600,
            borderBottom: "1px solid black",
            paddingBottom: "5px",
            marginBottom: "10px",
          }}
        >
          서지 정보
        </p>
        <div
          className="main-text-korean"
          style={{ textAlign: "left", lineHeight: 1.7 }}
        >
          <p>투 오브 어 카인드 | 조용철</p>
          <p>ISBN : 979-11-992396-0-9</p>
          <p>양장본, 210 x 255, 128 페이지, 작품 103점 </p>
          <p>하우스온더락 출판사, 2025년 5월 12일 발행</p>
          <p>52,000원</p>
        </div>
      </div>
      <div className="main-text-korean">
        <p
          style={{
            fontSize: 32,
            fontWeight: 600,
            borderBottom: "1px solid black",
            paddingBottom: "5px",
            marginTop: "45px",
            marginBottom: "10px",
          }}
        >
          작가 소개
        </p>
        <p
          style={{
            fontSize: 24,
            fontWeight: 600,
            marginBottom: "5px",
          }}
        >
          조용철
        </p>
        <p
          style={{
            textAlign: "justify",
            lineHeight: 1.7,
          }}
        >
          저는 클래식 작곡을 전공하여 현재 편곡 업무에 종사하고 있습니다. 평소에
          음악 작품을 쓸 때 어떠한 장소, 공간을 떠올리며 작품을 써 내려갑니다.
          그 모습은 어떠한 정적인 그림일 때도 있고 동적인 영화일 때도 있으며 그
          가운데 흘러가는 서사를 상상하곤 합니다. 이러한 작업 방식 때문인지
          교회에서 갔던 태국 단기선교 때 지인의 카메라를 사용하여 사진을 찍으며
          사진에 대한 정말 남다르게 큰 매력을 느끼게 되었습니다. 사진이라는 이
          취미가 정말 걷잡을 수 없이 커지게 되었고 이제는 저의 삶의 일부분이
          되었습니다. 사진은 음악과 더불어 저에게 또 하나의 중요한 창작 수단이
          되었습니다.
        </p>
      </div>
      <div className="main-text-korean">
        <p
          style={{
            fontSize: 32,
            fontWeight: 600,
            borderBottom: "1px solid black",
            paddingBottom: "5px",
            marginTop: "45px",
            marginBottom: "10px",
          }}
        >
          책 소개
        </p>
        <p
          style={{
            textAlign: "justify",
            lineHeight: 1.7,
            marginBottom: "10px",
          }}
        >
          이 책은 강원도 강릉에서 총 두번의 여행 2023년 11월 사흘동안의 여행
          그리고 2025년 2월 하루동안의 여행을 통해 기록한 사진을 엮어서 만들게
          되었습니다. 강릉 주변을 여행하면서 본 흥미로운 시선들 그리고 각
          사진들이 서로 주고 받는 대화를 담았습니다.
        </p>
      </div>
      <div className="main-text-korean">
        <p
          style={{
            fontSize: 32,
            fontWeight: 600,
            borderBottom: "1px solid black",
            paddingBottom: "5px",
            marginTop: "45px",
            marginBottom: "10px",
          }}
        >
          출간사
        </p>
        <p
          style={{
            textAlign: "justify",
            lineHeight: 1.7,
            marginBottom: "10px",
          }}
        >
          하우스온더락 출판사를 내며 첫 출판물이 나오기까지 많은 우여곡절이
          있었습니다. 스스로 책의 작가가 되고 또한 출판사의 편집장이 되어 책을
          출판하는 일이 분명 쉽진 않았으나 하나의 분명한 목표가 있었기에
          가능했던것 같습니다. 저의 목표는 사람을 살리는 예술을 하는것입니다. 제
          마음과 감정과 생각에서 나오는 파급력이 그다지 크지 않을 수 있습니다.
          그러나 단 한사람의 영혼이라도 살릴 수 있다면 그것만으로도 저는 너무
          만족합니다. 이 모든것을 가능하게 해주신 하나님께 모든 영광을
          올려드립니다.
        </p>
      </div>
      <div
        className="main-text-korean"
        style={{ marginTop: "45px", marginBottom: "45px" }}
      >
        <p
          style={{
            textAlign: "center",
          }}
        >
          S D G
        </p>
        <p
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Soli Deo Gloria
        </p>
      </div>
    </>
  );
}

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const selectedThumbnail = thumbnailContainerRef.current.children[
        currentIndex
      ] as HTMLElement;
      if (selectedThumbnail) {
        selectedThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  // useEffect(() => {
  //   const preventBodyScroll = (e: WheelEvent) => {
  //     if (
  //       thumbnailContainerRef.current &&
  //       thumbnailContainerRef.current.contains(e.target as Node)
  //     ) {
  //       e.stopPropagation();
  //     }
  //   };

  //   document.body.addEventListener("wheel", preventBodyScroll, {
  //     passive: false,
  //   });
  //   return () => {
  //     document.body.removeEventListener("wheel", preventBodyScroll);
  //   };
  // }, []);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div
        style={{
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{ width: "100%", objectFit: "contain" }}
        />
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "transparent",
            color: "rgba(0, 0, 0, 0.5)",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          <IoIosArrowBack size={"20px"} />
        </button>
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "transparent",
            color: "rgba(0, 0, 0, 0.5)",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          <IoIosArrowForward size={"20px"} />
        </button>
      </div>
      <div
        ref={thumbnailContainerRef}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "10px",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          paddingBottom: "10px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer",
              border: currentIndex === index ? "2px solid black" : "none",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PerchaseButton(props: { url: string }) {
  const [isMouseIn, setIsMouseIn] = useState(false);
  const { url } = props;
  return (
    <div
      className="main-text-korean"
      style={{
        marginTop: "20px",
        width: "100%",
        height: 52,
        fontSize: "16px",
        textAlign: "center",
        cursor: "pointer",
        alignContent: "center",
        borderRadius: "4px",
        background: isMouseIn ? "#03DB63" : "#03C75A",
        color: "white",
        transition: "0.2s",
      }}
      onMouseEnter={() => {
        setIsMouseIn(true);
        // (e.target as HTMLButtonElement).style.background = "#cbbca8";
        // (e.target as HTMLButtonElement).style.color = "black";
      }}
      onMouseLeave={() => {
        setIsMouseIn(false);
        // (e.target as HTMLButtonElement).style.background = "#b6a189";
        // (e.target as HTMLButtonElement).style.color = "white";
      }}
      onClick={() => {
        window.open(url);
      }}
    >
      {/* <Link
        href={url}
        target="_blank"
        style={{ width: "100%", height: "100%" }}
      >
      </Link> */}
      스마트스토어로 이동하기
    </div>
  );
}

// Example usage
const images = [
  "/book_images/two_of_a_kind/thumbnail/two_of_a_kind_cover.jpg",
  "/book_images/two_of_a_kind/sample_images/0101.jpg",
  "/book_images/two_of_a_kind/sample_images/0201.jpg",
  "/book_images/two_of_a_kind/sample_images/0301.jpg",
  "/book_images/two_of_a_kind/sample_images/0401.jpg",
  "/book_images/two_of_a_kind/sample_images/0501.jpg",
  "/book_images/two_of_a_kind/sample_images/0601.jpg",
  "/book_images/two_of_a_kind/sample_images/0701.jpg",
];
