import './App.css'
import {Link, Route} from 'wouter'

import TodoListFunctional from './components/TodoListFunctional';
import TodoListStatefull from './components/TodoListStatefull'
import Select from './components/Select';
import Formulario from './components/formularios/Formulario';
import SorveteForm from './components/formularios/SorveteForm'; 


function App() {
  return (
    <div className="App">
     <header className="App-header">
      <section>
          <Link to="/">App </Link>
          <Link to="/select">Formularios Select</Link>
          <Link to="/statefunction">lista Function</Link>
          <Link to="/statefull">lista statefull</Link>
      </section>
       <Route path="/"
        />
        <Route path="/select"
          component={Select}
        />      
    
        <Route path="/statefunction"
          component={TodoListFunctional}
        />
        <Route path="/statefull"
          component={TodoListStatefull}
        />
        
        <Route path="/formularios/formulario"
          component={Formulario}
        />
        <Route path="/formularios/sorveteria"
          component={SorveteForm}
        />
      </header>
    </div>
  );
}

export default App;
