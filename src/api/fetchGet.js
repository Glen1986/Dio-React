
fetch('apiURL')
  .then(response => response.json())
  .then(data => {
    alert(`muestra los resultados de la coneccion: ${data}` );
  })
  .catch(error => {
    alert('mostramos el error: ' + error);
});
