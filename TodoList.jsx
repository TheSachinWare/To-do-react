import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    // let [todos, setTodos] = useState(["Sample Task."]);
    let [todos, setTodos] = useState([{ task : "Sample Task", id : uuidv4(), isDone :  false }]);//Creating array of objects.
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // console.log("We have to add new task in todo.");
        // setTodos( [...todos, { task : newTodo, id : uuidv4() }] );

        setTodos((prevTodo) => {
            return [...prevTodo, { task : newTodo, id : uuidv4(), isDone : false }]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let deleteTodo= (id) => {
        // console.log("Task to be deleted.");
        // console.log(id);

        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            return {...todo, task : todo.task.toUpperCase() };
        })
        // console.log(newArr);
    )};

    let upperCaseOne = (id) => {
        // console.log("One");
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if(todo.id == id){     
                    return { ...todo, task : todo.task.toUpperCase() };
                } else {
                    return todo;
                }
            })
        );
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo,
                        isDone : true
                    };
                } else {
                    return todo;
                }
            })
        )
    }

    let markAllDone = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                return { ...todo, isDone : true }
            })
        );
    }

    return (
        <div>
            <h1>To do Web App </h1>
            <input placeholder="Add a task" style={ {height : 35, width:250, fontSize: 20, fontFamily: "italic"}} value={newTodo} onChange={updateTodoValue}></input> <br /><br />

            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />


            <h2>Task Todo</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={ todo.id }>
                        <span style={ todo.isDone ? { textDecorationLine : "line-through", opacity : 0.5, margin : "0.3rem"} : { margin : "0.3rem"} }> {todo.task}</span> &nbsp; &emsp;
                        
                        <button style={ { backgroundColor : "cyan", color : "black", border : "1px solid black", height: 26, fontSize : 15, paddingBottom : 28, margin : "0.3rem"}} onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>  &nbsp; &emsp;

                        <button style={ { backgroundColor : "yellow", color : "black", border : "1px solid black", height: 26, fontSize : 15, paddingBottom : 28, margin : "0.3rem"}} onClick={() => markAsDone(todo.id)}>Mark as Done</button>  &nbsp; &emsp;

                        <button style={ { backgroundColor : "red" , border : "1px solid black", height: 26, fontSize : 15, paddingBottom : 28, margin : "0.3rem"}} onClick={() => deleteTodo(todo.id)}>Delete</button> 
                        {/*Arrow function doesn't execute method, it just make copy of it with some arument.*/}
                    </li>
                ))}
            </ul>
            <br /><br />

            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={markAllDone} style={ { margin : 20 } }>Mark all as Done</button>
        </div>
    );
}