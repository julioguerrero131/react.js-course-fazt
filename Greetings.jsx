// no es necesario la extension, es solo para indicar que dentro hay componentes
// con vite si es necesario, con create react app no
// Siempre usar Pascal Case
export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  const valid = true;
  const user = {
    firstname: "jane",
    lastname: "doe",
  };
  function add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      <h1>{user.firstname}</h1>
      <h1>{valid.toString()}</h1>
      <h1>{add(3, 2)}</h1>
      <h1>
        {title}, de {name}
      </h1>
    </div>
  );
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>User Card</h1>
      <h3>Nombre: {props.name}</h3>
      <p>Monto: ${props.amount}💸</p>
      <h1>{props.married ? "estoy casado 🥰" : "no estoy casado 😀"}</h1>
      <ul>
        <li>City: {props.address.city}</li>
        <li>City: {props.address.street}</li>
      </ul>
    </div>
  );
}
