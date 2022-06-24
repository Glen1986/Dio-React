import React, {useState} from "react";
import NameForm from './formularios/NameForm'

const TodoListFunctional = () =>{

  const [items, setItems] = useState(['tomate', 'lechuga', 'banana'])
  // const [value, setValue] = useState('')
  const addItem = ({item}) =>{
     setItems([...items, item])
  }

  const removeItem = () => {
    setItems([...items.slice(1)])
  }
  // const handlehange = (e) => {
    // const palabra = e.target.value
     // setValue([...value,   palabra ])
  // }

  return(
    <div style={{border: '1px solid white',padding:'2rem', margin:'1rem'}} className="bloco-lista">
      <p>my functional list</p>
      <ul className="lista-estilizada">
        {items.map(item => <li>{item}</li>)}
      </ul>
      <button onClick = {()=> addItem('zapallo')} type="submit">add</button>
      <button onClick = {()=> removeItem()} type="submit">remove</button>
      <NameForm />

    </div>
  )
}
export default TodoListFunctional

