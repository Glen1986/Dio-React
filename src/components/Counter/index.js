import React from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component{
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }
    
  decrement = ()=> {
    this.props.dispatch({type: 'DECREMENT'})
  }

  render(){
    return(
      <>
        <div>
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>menos</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>mas</button>
          </div>
        </div>
      </>
    )
  }
}
//conectamos el estado de nuestra aplicacion con el estado
//count:0
//la funcion mapStateToProps recibe el estado de la aplicacion
//yretorna el valorde count:....
function mapStateToProps(state){
  return{
    count: state.count
  }
};

export default connect(mapStateToProps)(Counter) 
