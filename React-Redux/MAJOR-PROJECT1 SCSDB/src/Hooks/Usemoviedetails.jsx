import { useDispatch } from "react-redux";
import axios from "../utilis/axios";
import { addmovie, removemovie } from "../utilis/movieslice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Usemoviedetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const getmoviesuggestion = async () => {
    try {
      const details = await axios.get(`/movie/${id}`);
      const external_ids = await axios.get(`/movie/${id}/external_ids`);
      const recommendations = await axios.get(`/movie/${id}/recommendations`);
      const similar = await axios.get(`/movie/${id}/similar`);
      const videos = await axios.get(`/movie/${id}/videos`);
      const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
      let theultimatedetails = {
        detail: details.data,
        external_ids: external_ids.data,
        recommendations: recommendations.data,
        similar: similar.data.results,
        videos: videos.data.results.filter((m,i)=>m.type === "Trailer"),
        wastchproviders: watchproviders.data.results.IN,
      };
      dispatch(addmovie(theultimatedetails));
      console.log(theultimatedetails);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getmoviesuggestion();
    return ()=>{
        dispatch(removemovie())
    }
  }, []);
};
