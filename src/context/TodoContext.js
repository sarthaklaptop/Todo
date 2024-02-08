import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // properties
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            // this is the byDefault value of the to is completed or not
            completed: false,
        }, {}, {}, {}
    ],

    // functionality
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
})


export const useTodo = () => {
    return useContext (TodoContext);
}

export const TodoProvider = TodoContext.Provider 