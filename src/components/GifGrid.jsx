import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'


export const GifGrid = ({ category }) => {

  const [Images, setImages] = useState([])


  useEffect(() => {

    getGifs(category)
      .then(newImages => setImages(newImages));

  }, []);

  return (
    <>
      <h3> {category} </h3>

      <ol>
      {
        /*
        Images.map(image => (
          <li key={image.id}>{image.title}</li>
        )
        )*/
        Images.map( ({id, title}) => (
          <li key={id}>{title}</li>
        )
        )
      }
      
      </ol>
      
    </>
  )
}
