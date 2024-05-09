import "./task.css";

export function TaskCard({ ready }) {
  // Estilos
  const titleStyles = { fontWeight: "lighter" };

  return (
    <div className="card">
      <h1 style={titleStyles}>Mi primera tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </span>
    </div>
  );
}
