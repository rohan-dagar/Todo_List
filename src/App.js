import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useEffect, useState } from "react";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    // // Deleteing this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.slice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Routes>
      
          <Route exact path="/" render={()=>{
            return (
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
        <Header title="My Todos List" searchBar={false} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
