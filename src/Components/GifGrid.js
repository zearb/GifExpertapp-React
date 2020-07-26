import React,{} from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
    // console.log(data);


    return (
        <div>
            <h3 className="animate__animated animate__zoomIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash animate__infinite infinite animate__slow	2s">Cargando...</p>}

            <div className="cont_cards">
                {
                    images.map( img => 
                    
                        <GifGridItem
                            key = {img.id}
                            {...img}
                        />

                    )
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}