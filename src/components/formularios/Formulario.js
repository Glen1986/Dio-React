import React from 'react'
import {Link} from 'wouter'

class Formulario extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  handleSubmit(e){
    alert('el nombre enviado: ' + this.state.value)
    e.preventDefault()
  }
  render(){
  return(
  <form onSubmit={this.handleSubmit}>
    <Link to="/select"><p>Formulario</p></Link>
    <labe>
      Input:
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <input type="submit" value="Submit"/>
    </labe>
  </form>
  )
}
}
export default Formulario
