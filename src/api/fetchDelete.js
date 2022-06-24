const newConnection = {name: 'string', area: 'string'};
fetch('apiURL', {
  method: 'delete',
  body: JSON.stringify(newConnection)
})
  .then(response => response.json())
  .then(data =>{
    alert(`mostramos los datos de la api: ${data} `)
  })
  .catch(error => {
    alert('mostramos el error' + error)
});
