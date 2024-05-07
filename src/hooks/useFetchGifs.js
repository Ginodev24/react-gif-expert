import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook no es más que una función. Este es un ejemplo de un custom Hook
export const useFetchGifs = ( {category} ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true );

    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    },[]);

    return {
        images, //si la propiedad y el valor se llaman igual se puede obviar uno de los 2  => images: images
        isLoading //isLoading : isLoading
    }
}