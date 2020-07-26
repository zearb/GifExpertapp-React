import { useState, useEffect } from "react";
import {getGif} from '../Helpers/getGif';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect( () => {

        getGif(category)
            .then( (gifs) => {

                    
                setState({
                    data:gifs,
                    loading:false
                });


            } );

    }, [category] );


    return state;

}