import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoList } from '../components/TodoList';
import {TodoItem} from "../components/TodoItem";

function AppUI ({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo, 
}) {

    return (

      <React.Fragment>

        <TodoCounter 
            total={totalTodos} 
            completed={completedTodos} 
        />

        <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
        />

        <TodoList>

          {loading && <p>Cargando...</p>}
          {error && <p>Hubo un error</p>}
          {(!loading && !searchedTodos.length ) && <p>!Escribe tu primer TODO!</p>} 

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </React.Fragment>

    );
}

export { AppUI };