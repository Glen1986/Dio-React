import React, {Component} from "react";

let value1 = '';
class TodoListStatefull extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [
        'tomate',
        'lechuga',
        'banana'
      ]
    }
  }

addItem =(item ) =>{
  this.setState({items: [...this.state.items, item]});

}

removeItem = () => {
  this.setState({items: [...this.state.items.slice(1)]});
}
ghhjhhjjghgjhrender(){
  const {items} = this.state;
  return(
    <div style={{border: '1px solid white',padding:'2rem', margin:'1rem'}} className="bloco-lista">
    <p>my statefull list </p>
    <ul className="lista-estilizada">
      {items.map(item =><li>{item}</li>)}
    </ul>
    <form action="">
      <input type="text" name="value1" id="value1" value={value1}/>
      <button onClick={()=>this.addItem() } type="submit">add</button>
      <button onClick={()=> this.removeItem()} type="submit">remove</button>

    </form>
 </div>
  )
}
}
export default TodoListStatefull
