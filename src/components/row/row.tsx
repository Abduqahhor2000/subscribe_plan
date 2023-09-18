import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { RowProps } from "./row.props";
import Thumbnail from "../thumbnail/thumbnail";
import { useRef, useState } from "react";

function Row({ title, movies, isBig=false }: RowProps): JSX.Element {
  const [moved, setMoved] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: "left" | "right") => {
    setMoved(true);
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-auto space-y-1 md:space-y-4">
      <h2 className="w-56 cursor-pointer pt-4 md:pt-8 text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200">
        {title}
      </h2>
      {/*Carousel*/}
      <div className="group relative md:ml-2">
        <AiFillCaretLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125"
          onClick={() => handleClick("left")}
        />
        <div
          ref={carouselRef}
          className={`flex scrollbar-hide items-center ${!isBig && 'space-x-1 md:space-x-4'} space-x-1 md:space-x-3 overflow-x-scroll overflow-hidden`}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} isBig={isBig} />
          ))}
        </div>
        <AiFillCaretRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
