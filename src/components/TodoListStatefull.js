import React, {Component} from "react";

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
    /*
    [...this.state.items, item] é o mesmo que:
    let itemsUpdated = this.state.items;
    itemsUpdated.push(item);
    this.setState({ items: itemsUpdated }); 
    */
  this.setState({items: [...this.state.items, item]});

}

removeItem = () => {
      /*
    [...this.state.items.slice(1)] é o mesmo que:
    let itemsUpdated = this.state.items;
    itemsUpdated.pop();
    this.setState({ items: itemsUpdated }); 
    */
  this.setState({items: [...this.state.items.slice(1)]});

}
render(){
  const {items} = this.state;
  return(
    <div style={{border: '1px solid white',padding:'2rem', margin:'1rem'}} className="bloco-lista">
    <p>my statefull list </p>
    <ul className="lista-estilizada">
      {items.map(item =><li>{item}</li>)}
    </ul>
      <button onClick={()=> this.addItem()} type="submit">add</button>
      <button onClick={()=> this.removeItem()} type="submit">remove</button>
 </div>
  )
}
}
export default TodoListStatefull
