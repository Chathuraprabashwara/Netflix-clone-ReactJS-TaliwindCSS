import React from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa';
import { useEffect,useState } from "react";
import {MdChevrontLeft, MdChevronRight} from 'react-icons/md';

const Movie = ({items,key}) => {
    const [like,setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2 ">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
        alt={items?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal  text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {items?.title}
        </p>
        <p className="absolute top-4 left-4 text-gray-300">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
