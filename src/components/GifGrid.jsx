import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
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

      <div className='card-grid'>
        {
          Images.map((image) => (
            <GifItem key={image.id}
              {...image} />
          )
          )
        }

      </div>

    </>
  )
}
