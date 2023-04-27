import React from "react";
import "./style.css";
import { Button } from "@material-tailwind/react";



// import Button from '@material-ui/core/Button';

const navbar = ({filterItem , menuList }) =>
{
  
  return (
    <>
    <nav className="navbar">
    <div className="btn-group">        
        {menuList.map((curElem)=>
            {
                return(
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-24 rounded"
                onClick={()=>filterItem(curElem)}>
                {curElem}
                </Button>
                );
            })}
    </div>
    </nav> 
    
    

    </>
  )
}

export default navbar
