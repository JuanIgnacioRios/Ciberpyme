export function calcularTiempoFuerzaBruta(
  password: string,
  intentosPorSegundo = 1000000000000
) {
  let combinaciones = 1;
  const longitud = password.length;

  // Definir el conjunto de caracteres basado en la diversidad de la contraseña
  let caracteresPosibles = 0;
  if (/[a-z]/.test(password)) caracteresPosibles += 26; // Letras minúsculas
  if (/[A-Z]/.test(password)) caracteresPosibles += 26; // Letras mayúsculas
  if (/\d/.test(password)) caracteresPosibles += 10; // Números
  if (/[^a-zA-Z0-9]/.test(password)) caracteresPosibles += 32; // Caracteres especiales

  // Calcular el espacio de combinaciones posibles
  combinaciones = Math.pow(caracteresPosibles, longitud);

  // Calcular el tiempo en segundos
  const tiempoEnSegundos = combinaciones / intentosPorSegundo;

  // Convertir el tiempo a unidades legibles
  const segundosEnAnio = 60 * 60 * 24 * 365;
  if (tiempoEnSegundos > segundosEnAnio) {
    return (tiempoEnSegundos / segundosEnAnio).toFixed(2) + " años";
  } else if (tiempoEnSegundos > 60 * 60 * 24) {
    return (tiempoEnSegundos / (60 * 60 * 24)).toFixed(2) + " días";
  } else if (tiempoEnSegundos > 60 * 60) {
    return (tiempoEnSegundos / (60 * 60)).toFixed(2) + " horas";
  } else if (tiempoEnSegundos > 60) {
    return (tiempoEnSegundos / 60).toFixed(2) + " minutos";
  } else {
    return tiempoEnSegundos.toFixed(2) + " segundos";
  }
}

export function calcularSeguridad(password) {
  const passwordLength = password.length >= 12;
  const passwordUppercase = /[A-Z]/.test(password);
  const passwordLowercase = /[a-z]/.test(password);
  const passwordNumber = /\d/.test(password);
  const passwordSpecial = /[^A-Za-z0-9]/.test(password);
  const passwordPatterns =
    /(\d)\1{2,}/.test(password) || /(abc|123|password|qwerty)/i.test(password);

  let score = 0;
  // Criterio de longitud
  if (password.length >= 8) score++;
  if (passwordLength) score += 3;
  if (password.length >= 16) score += 2;

  // Criterio de diversidad de caracteres
  if (passwordUppercase) score++;
  if (passwordLowercase) score++;
  if (passwordNumber) score += 2;
  if (passwordSpecial) score += 2;

  // Penalización por patrones comunes
  if (passwordPatterns) {
    score -= 3;
  }
  return {
    score,
    length: passwordLength,
    uppercase: passwordUppercase,
    lowercase: passwordLowercase,
    number: passwordNumber,
    special: passwordSpecial,
    patterns: passwordPatterns,
  };
}

export function generatePassword(longitud = 12) {
  // Definir los caracteres posibles
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Asegurar que haya al menos uno de cada tipo de carácter
  let contrasena = [
    mayusculas[Math.floor(Math.random() * mayusculas.length)],
    minusculas[Math.floor(Math.random() * minusculas.length)],
    numeros[Math.floor(Math.random() * numeros.length)],
    especiales[Math.floor(Math.random() * especiales.length)],
  ];

  // Combinar todos los caracteres posibles
  const todosLosCaracteres = mayusculas + minusculas + numeros + especiales;

  // Completar la contraseña con caracteres aleatorios hasta alcanzar la longitud deseada
  for (let i = contrasena.length; i < longitud; i++) {
    contrasena.push(
      todosLosCaracteres[Math.floor(Math.random() * todosLosCaracteres.length)]
    );
  }

  // Mezclar los caracteres de la contraseña
  contrasena = contrasena.sort(() => Math.random() - 0.5);

  // Convertir el array a una cadena de texto
  return contrasena.join("");
}
