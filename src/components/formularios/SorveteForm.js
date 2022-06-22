import React from "react";
import {Link} from 'wouter'

class SorveteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sabor: 'uva',
      casquinha: true,
      guardanapos: 'sim'
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  handleInputChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }
  handleSubmit(e){
    const {sabor, casquinha, guardanapos} = this.state;
    alert("sabor es: "+ sabor  + ', casquinha: '+ casquinha + ', guardanapos: '+ guardanapos)
    e.preventDefault()
  }
  render(){
    return(
      <div style={{border: '1px solid white',padding:'2rem', margin:'1rem'}}>
      <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column'}}>
      <Link to="/select"><h3>Sorveteria</h3></Link>
      <label>
        escolha o sabor:
        <select name="" id="">
          <option value="uva">Uva</option>
          <option value="manzana">Manzana</option>
          <option value="platano">Platano</option>
          <option value="frutilla">Frutilla</option>
          <option value="papalla">Papalla</option>
          <option value="chocolate">Chocolate</option>
        </select>
      </label>
      <label>
       colocar casinha?
        <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChange} id="casquinha"/>
      </label>
      <label>
        Guadanapos?
         <div className="radio">
          <label> 
            <input type="radio" name="guardanapos" id="guardanapos" value="sim" checked={this.state.guardanapos === 'sim'} onChange={this.handleInputChange}/>
            Sim
            </label>
          </div>       <div className="radio">
          <label> 
            <input type="radio" name="guardanapos" id="guardanapos" value="nao" checked={this.state.guardanapos === 'nao'} onChange={this.handleInputChange}/>
            Nao
            </label>
          </div>
      </label>
        <label>

        </label>
        <label>
          <input type="submit" value="Pedir"/>
        </label>
    </form>
        </div>
    )
  }
}
export default SorveteForm
