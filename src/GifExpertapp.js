import React,{useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {
        
    const [categories, setCategories] = useState(['DBZ']);
    
    // const handleAdd = () => {
    //     // const updateCategories = [...categories,'Pokemon'];
    //     // setCategories(updateCategories);
    //     setCategories( categ => [...categ,'pokemon'] ); 
    // }

    return (
        <>
            <h1 className="animate__animated animate__fadeInDown">GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category = {category}
                    />
                ))
            }
        </>
    );
}

export default GifExpertApp;