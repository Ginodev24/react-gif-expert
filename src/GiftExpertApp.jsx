//import React from 'react'}
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch','Dragon Ball']);
    

  const onAddCategory = (newCategory) => {
    //setCategories( categories.push('Valorant') );  //El push marca error porque muta los arreglos y los hooks no mutan
    if( categories.includes(newCategory) ) return;

    setCategories( [ newCategory , ...categories]);
  };



  return (
    <>
        {/*titulo */}
        <h1>GiftExpertApp</h1>

        {/*input */}
        <AddCategory 
          //setCategories={setCategories}
          onNewCategory={event => onAddCategory(event)}
        />

        {/*listado de gift */}
            {/*gift item */}
        
        <ol>
            {
                categories.map( category => {
                    return <li key={category}> {category} </li>
                })
            }
        </ol>
    
    </>    
  )
}