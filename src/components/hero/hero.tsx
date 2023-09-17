import { useEffect, useState } from "react";
import { HeroProps } from "./hero.props";
import { IMovie } from "src/interfaces/app.interface";
import { image_base } from "src/helper/constants";
import Image from "next/image";
import { TbPlayerPlay } from "react-icons/tb";
import ReactStars from "react-stars";

export default function Hero({ trending }: HeroProps): JSX.Element {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie);
  }, [trending]);

  // console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-center">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={`${movie?.title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="py-1 px-4 bg-[#e5e5e5]/50 inline-block rounded-tr rounded-es w-max">
        {movie?.media_type}
      </div>

      <div className="flex items-center space-x-2">
        <ReactStars
          edit={false}
          count={10}
          value={movie?.vote_average}
          color2={"white"}
        />
        <p>({movie?.vote_count})</p>
      </div>

      <h1 className="text-2xl text-shadow-md font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-xs text-shadow-md md:text-lg lg:text-2xl">
        {movie?.overview?.slice(0, 100)} . . .
      </p>

      <div>
        <button className="flex justify-center items-center bg-white/60 font-bold text-black w-[200px] h-[56px] rounded-full">
          <TbPlayerPlay className="h-5 w-5 md-h-8 md:w-8" /> Watch now
        </button>
      </div>
    </div>
  );
}
