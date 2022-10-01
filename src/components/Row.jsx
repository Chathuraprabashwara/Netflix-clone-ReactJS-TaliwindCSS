import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL ,rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((Res) => {
      setMovies(Res.data.results);

    });
  }, [fetchURL])
  
  const slideLeft = () =>{
    var slider =document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () =>{
    var slider =document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className=" left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40}/>
        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((items,id) => (
             <Movie items={items} key={id}/>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} hidden />
      </div>
    </div>
  );
};

export default Row;
