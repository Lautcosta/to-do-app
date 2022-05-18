import React from "react";
import '../css/CreateTodoButton.css';

function CreateTodoButton (props) {
    
    const onClickButton = () => {
        alert('el boton funciona')
    }
    
    return (    
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        > 
        + 
        </button>
    )
    
}

export { CreateTodoButton };