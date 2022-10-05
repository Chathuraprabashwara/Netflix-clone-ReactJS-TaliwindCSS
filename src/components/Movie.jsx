import React from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa';
import { useEffect,useState } from "react";
import {MdChevrontLeft, MdChevronRight} from 'react-icons/md';
import { UserAuth } from "../context/AuthContext";
import {db} from '../firebase';
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
const trantcating =(str,num) =>{
  if(str?.length > num){
      return str.slice(0,num) + '...';

  } else{
      return str;
  }
}

const Movie = ({items,key}) => {
    const {user} =UserAuth();
    const [saved,setSaved] = useState(false);
    const [like,setLike] = useState(false);

    const movieID = doc(db,'users', `${user?.email}`)

    const saveShow = async (passedID) => {
console.log(passedID)
      console.log("clicked")
      if(user?.email && items.id == passedID){
        setLike(!like)
        setSaved(true)
        await updateDoc (movieID, {
          savedShows: arrayUnion({
            id: items.id,
            title: items.title,
            img: items.backdrop_path
          })
        })
      }
      else if(!like && (items.id !== passedID)){
        console.log("if clickerd")
          db.collection("users").doc(passedID).delete();
      
      }
      else{
        alert('please log in to save a movie');
      }
    }

  return (
    <div  key={items.id} className="w-[160px] sm:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2 ">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
        alt={items?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal  text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
           {trantcating(items?.title,20)}
        </p>
        
        <p onClick={()=> saveShow(items.id)} >
          {like ? < FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
