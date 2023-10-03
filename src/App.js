import "./App.css";
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import { About } from "./mycomponents/About";
import { Footer } from "./mycomponents/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("List") === null) {
    initTodo = "";
  } else {
    initTodo = JSON.parse(localStorage.getItem("List"));
  }

  const onDelete = (todo) => {
    console.log("this is to be delete", todo);
    
    setTodos(
      listtodo.filter((e) => {
        return e !== todo;
      })
    );
  };
  
  const addTodo = (title) => {
    let snos;
    if (listtodo.length === 0) {
      snos = 0;
    } else {
      snos = listtodo[(listtodo.length) - 1].sno + 1;
    }

    const myList = {
      sno: snos,
      title: title,
    };
    setTodos([myList,...listtodo ]);
    console.log(listtodo);
    
  };
const onUpdate=(todo, t)=>{
 addTodo(t);
 setTimeout(() => {
  onDelete(todo)
 }, 1000);
 
}
  const [listtodo, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(listtodo));
  }, [listtodo]);

  return (
    <>
      <div>
        <Router>
          <Header title="My Todo List" searchbox={false} addTodo={addTodo} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Todos todos={listtodo} onDelete={onDelete} update = {onUpdate}/>}
            />
            <Route exact path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
