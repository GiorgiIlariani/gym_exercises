import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  console.log(bodyParts);
  const { scrollContainerRef, handleScroll, scrollTo } =
    useSmoothHorizontalScroll();

  return (
    <>
      <Box
        sx={{
          overflowX: "hidden",
          display: "flex",
          justifyContent: "space-between",
        }}
        ref={scrollContainerRef}
        onScroll={handleScroll}
        style={{ overflowX: "scroll" }}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px">
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>
      <div
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginTop: "15px",
        }}>
        <img
          src={LeftArrowIcon}
          alt="left arrow"
          style={{ cursor: "pointer" }}
          onClick={() => scrollTo(-1408)}
        />
        <img
          src={RightArrowIcon}
          alt="right arrow"
          style={{ cursor: "pointer" }}
          onClick={() => scrollTo(1408)}
        />
      </div>
    </>
  );
};

export default HorizontalScrollbar;
