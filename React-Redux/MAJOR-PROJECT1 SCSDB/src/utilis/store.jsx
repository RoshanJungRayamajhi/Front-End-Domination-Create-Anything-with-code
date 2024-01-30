import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "./movieslice"
import popularReducer from "./popularslice"
import peopleReducer from "./peopleslice"
import tvshowReducer from "./tvshowslice"
import trendingReducer from "./trendingslice"

export const store = configureStore({
    reducer:{
    movie: movieReducer,
    trending:trendingReducer,
    popular:popularReducer,
    people:peopleReducer,
    tvshow:tvshowReducer,
    
    }
})