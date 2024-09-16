import FormularioTareas from "./components/FormularioTareas"
import FiltroTareas from "./components/FiltroTareas"
import ListadoTareas from "./components/ListadoTareas"


function App() {

  return (
    <>
    <div className="bg-purple-400 text-xl mx-auto p-6 max-w-2xl text-1xl font-bold mb-4 text-center"> 
      Gestor De Tareas - ¡Organiza tu dia!
      
    </div>

    <div className="bg-slate-300 mx-auto p-4 max-w-2xl">
      <FormularioTareas />
      <FiltroTareas />
      <ListadoTareas />
    </div>
    </>
  )
}

export default App
