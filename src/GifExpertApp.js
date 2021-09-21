import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     //1) 
    //     //setCategories([...categories, 'HunterXHunter']);
    //     //2)
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }


    return (
        <>
            <h2>Buscar Gif:</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
