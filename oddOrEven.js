// Create a function 
// integer as an argument 
// and returns "Even" for even numbers
// or "Odd" for odd numbers.

function even_or_odd(number) {
  var rest = number % 2; // retorna dentro de rest o resto da divisão. % Módulo %
    
  if (rest == 0) {
    return 'Even' // par
  } else {
    return 'Odd' // ímpar
  }
} 