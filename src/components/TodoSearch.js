import React, { useState } from "react";
import "../css/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }

    return(  
        <div className="box">
            <textarea 
            className="TodoSearch" 
            placeholder="Escribe aqui..."
            value={searchValue}
            onChange={onSearchValueChange}    
            />
        </div>
 
    );
}

export { TodoSearch };