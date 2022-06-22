import React from 'react'

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
    <p>Formulario</p>
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
