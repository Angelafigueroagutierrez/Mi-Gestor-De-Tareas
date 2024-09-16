import { useTareasContext } from "../context/TareasContext"

export default function ListadoTareas() {

  const { tareas, removeTarea, filter } = useTareasContext()
  
  const tareasFiltradas = filter ? tareas.filter( tarea => tarea.label.toUpperCase() === filter ) : tareas

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pendientes:</h2>
      {tareasFiltradas.map(( tarea => (
        <div
        className="flex justify-between p-2 bg-green-100 rounden mb-2"
          key={tarea.id}
        >
          <span>{tarea.text}</span>
          <button
            className="bg-red-500 txt-white px-2 py-1 rounded"
            onClick={() => removeTarea(tarea.id)}
          >
            Eliminar
          </button>
        </div>
      )))}
    </div>
  )
}
