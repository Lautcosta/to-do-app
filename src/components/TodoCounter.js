import React from "react";
import "../css/TodoCounter.css";

function TodoCounter({total, completed}) {

    return(

        <h2 className="TodoCounter">Haz completado {completed} de {total} tareas</h2>
    );
};

export {TodoCounter};