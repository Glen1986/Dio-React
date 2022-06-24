import axios from 'axios'

axios.post('apiURL', {
  name:'string',
  area: 'string'
})
  .then(data => {
    alert(`mostramos la respuesta de axios: ${data}`)
  })
  .catch(error => {
    alert('mostramos el error: ' + error)
})
