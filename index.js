// Archivo Principal a cargar
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greetings";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
import { VscBug } from "react-icons/vsc";
import { func } from "prop-types";

// Aplicacion inicial de React
const root = ReactDOM.createRoot(document.getElementById("root"));

// ARRAY
// Generalmente estos objetos JSON vendrán del backend
const users = [
  {
    id: 1,
    name: "Jane Doe",
    image: "https://robohash.org/user21",
  },
  {
    id: 2,
    name: "Rick Sanchez",
    image: "https://robohash.org/2ZE.png?set=set1&size=150x150",
  },
];

// COMPONENTES
// Son estructuras que forman la interfaz
// Solo hay un componente que contiene al resto: root
// Generalemente se hace referencia a funciones, que retornan una interfaz
// Es necesario la primera mayus
// Es necesario que un elemento padre: contiene a los otros elementos

// JSX
// Combinar HTML y JavaScript

// EVENT HANDLER
const changeHandler = (e) => {
  console.log(e.target.value);
};

// REACT HOOKS
// variable que cambia en la interfaz
function Counter() {
  const [message, setMessage] = useState("");
  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]); // lo que esta dentro, ve si ha cambiado 
  // Arreglo Vacio: se ejecuta una vez, no en cada cambio
  // es decir, solo se ejecuta al ser creado el componente
  

  return (
    <div>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("el mensaje es: " + message);
        }}
      >
        Save
      </button>

      <hr/>

      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Incrementar
      </button>
    </div>
  );

}

root.render(
  <>
    <Counter />

    {users.map((user, i) => {
      return (
        <div>
          <h3 key={i}>{user.name}</h3>
          <img src={user.image} />
        </div>
      );
    })}

    <Posts />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviando datos del form");
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>send</button>
    </form>

    <input id="hola" onChange={changeHandler} />

    <Saludar />
    <TaskCard ready={false} />
    <TaskCard ready={true} />

    <Button text="click me" name="jose" />
    <Button />

    <Greeting title="hola" name="joe" />

    <UserCard
      title="hola"
      name="joe"
      amount={2000}
      married={true}
      points={[1, 2, 3]}
      address={{ street: "123 Main Street", city: "Quito" }}
      greet={function () {
        alert("hola");
      }}
    />

    <Product />
    <Navbar />
  </>
); // render espera elementos html
// usar self-closing tags
// se puede llamar a la funcion entre llaves {}
// <> es un contenedor vacio
