import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import {Todo}  from './mycomponents/Todo';
import {Todos}  from './mycomponents/Todos';
import {Footer}  from './mycomponents/Footer';


function App() {
  return (
    <>
      
        <Header title= 
      "My Todo List" searchbox={true} />
        <Todos/>
        <Footer/>
      
    </>
  );
}

export default App;
