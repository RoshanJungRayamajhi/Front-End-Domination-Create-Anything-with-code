import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utilis/axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmovie } from "../utilis/movieslice";
import { Usemoviedetails } from "../Hooks/Usemoviedetails";
import { Img_Url } from "../utilis/constant";
import loading from "../loading";
import Loading from "../loading";

const Moviedetails = () => {
  const navigate = useNavigate();
  const { info } = useSelector((store) => store?.movie);
  Usemoviedetails();
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,.9))`,
        backgroundImage: `url(${Img_Url}${info?.detail?.backdrop_path})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" w-screen h-screen px-[10%]"
    >
      <div>
        <nav className=" w-full text-zinc-300  flex gap-8 h-[10vh] text-xl items-center">
          <Link
            onClick={() => navigate(-1)}
            className=" hover:text-[#6556CD] ri-arrow-left-line mr-2"
          ></Link>
          <a target="blank" href={info?.detail?.homepage}>
            <i class="  hover:text-[#6556CD] ri-external-link-fill"></i>
          </a>
          <a
            target="blank"
            href={`https://www.wikidata.org/wiki/${info?.external_ids?.wikidata_id}`}
          >
            <i class="  hover:text-[#6556CD] ri-earth-fill"></i>
          </a>
          <a
            target="blank"
            href={`https://www.imdb.com/title/${info?.external_ids?.imdb_id}`}
          >
            imdb
          </a>
        </nav>
        {/* part1 poster and details */}
        <div className=" w-full flex">
          <img
            className="h-[45vh] bg-cover rounded-md shadow-md object-cover"
            src={
              info.detail.poster_path || info.detail.backdrop_path
                ? Img_Url +
                  (info.detail.poster_path ||
                    info.detail.backdrop_path ||
                    info.detail.profile_path)
                : noimage
            }
            alt=""
          />
          <div className="content ml-[5%]">
            <h1 className=" text-5xl font-black text-white">{info.detail.original_title || info.detail.original_name || info.detail.name || info.detail.title}
            <span className=" ml-3 text-4xl font-bold text-zinc-300">({info.detail.release_date.split("-")[0]})</span>
            </h1>
          </div>
          
        </div>

        {/* part3 available platform */}
        <div className=" w-[80%]">

        {info.wastchproviders &&
            info.wastchproviders.flatrate && (
              <div className=" flex justify-start items-center gap-x-10  text-zinc-100 text-xl">
                <h1>Available on</h1>
                {info.wastchproviders &&
            info.wastchproviders.flatrate &&
            info.wastchproviders.flatrate.map((w) => (
              <img
              title={w.provider_name}
                className=" rounded-md mt-5 w-[5vh] object-cover h-[5vh]"
                src={Img_Url + w.logo_path}
                alt=""
              />
            ))}
              </div>
            )}
           {info.wastchproviders &&
            info.wastchproviders.rent && (
              <div className=" text-zinc-100 text-xl flex gap-x-10 items-center justify-start">
                <h1 >Available Rent</h1>
                {info.wastchproviders.rent.map((w) => (
              <img
              title={w.provider_name}
                className=" rounded-md mt-5 w-[5vh] object-cover h-[5vh]"
                src={Img_Url + w.logo_path}
                alt=""
              />
            ))}
              </div>
            )}

         {info.wastchproviders &&
            info.wastchproviders.buy && (
              <div className=" text-zinc-100 text-xl flex gap-x-10 items-center justify-start">
               
                <h1>Availabe for buy</h1>
                {info.wastchproviders &&
            info.wastchproviders.buy &&
            info.wastchproviders.buy.map((w) => (
              <img
              title={w.provider_name}
                className=" rounded-md mt-5 w-[5vh] object-cover h-[5vh]"
                src={Img_Url + w.logo_path}
                alt=""
              />
            ))}
              </div>
            )}

         
             
        </div>
        {/* part1 navigation completed */}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
