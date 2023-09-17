import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { RowProps } from "./row.props";
import Thumbnail from "../thumbnail/thumbnail";

function Row({ title, movies }: RowProps): JSX.Element {
  return (
    <div className="h-[500px] space-y-1 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200">
        {title}
      </h2>
      {/*Carousel*/}
      <div className="group relative md:ml-2">
        <AiFillCaretLeft className="absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125" />
        <div className="flex scrollbar-hide items-center space-x-1 overflow-x-scroll md:space-x-4">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie}/>
          ))}
        </div>
        <AiFillCaretRight className="absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125" />
      </div>
    </div>
  );
}

export default Row;
