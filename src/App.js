import './App.css';
import Formulario from './components/Formulario';
import TodoListFunctional from './components/TodoListFunctional'
import TodoListStatefull from './components/TodoListStatefull'
import SorveteForm from './components/SorveteForm'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SorveteForm />
        <Formulario />
        <TodoListFunctional/>
        <TodoListStatefull />
      </header>
    </div>
  );
}

export default App;
