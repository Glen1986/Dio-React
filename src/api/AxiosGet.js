import axios from 'axios'

axios.get('apiURL')
  .then(data => {
    alert(`mostramos la respuesta de axios: ${data}`)
  })
  .cactch(error => {
    alert('mostramos el error: ' + error)
  })
