import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook no es más que una función. Este es un ejemplo de un custom Hook
export const useFetchGifs = ( {category} ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true );


    useEffect(() => {

        getGifs(category)
            .then(newImages => setImages(newImages));
        setIsLoading(false);

    }, []);

    return {
        images, //si la propiedad y el valor se llaman igual se puede obviar uno de los 2  => images: images
        isLoading //isLoading : isLoading
    }
}
