// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  // Solicitar el número al usuario
  let input = prompt("Ingresa un número para calcular su factorial:");
  let num = Number(input);
  
  // Verificar que sea un número válido
  if (isNaN(num)) {
    console.error("Error: El valor ingresado no es un número.");
    document.body.innerHTML += "<p style='color:red;'>Error: El valor ingresado no es un número.</p>";
  } else {
    // Calcular y mostrar el factorial en la consola
    let res = factorial(num);
    console.log("El factorial de " + num + " es: " + res);
  
    // Mostrar el resultado en el DOM
    let div = document.createElement("div");
    div.innerHTML = "<p>El factorial de " + num + " es: " + res + "</p>";
    document.body.appendChild(div);
  }
  