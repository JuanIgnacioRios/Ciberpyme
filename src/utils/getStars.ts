/*
15-18 puntos: 5 estrellas - Excelente nivel de ciberseguridad.
12-14 puntos: 4 estrellas - Buen nivel, pero con áreas de mejora.
8-11 puntos: 3 estrellas - Nivel medio de seguridad, se requieren medidas adicionales.
4-7 puntos: 2 estrellas - Nivel bajo de seguridad, es urgente mejorar las medidas.
0-3 puntos: 1 estrella - La empresa está en grave riesgo de ciberataques, se deben tomar acciones inmediatas.
*/

export function getStars(score: number) {
  let stars = 0;
  if (score >= 0 && score <= 3) {
    stars = 1;
  }
  if (score >= 4 && score <= 7) {
    stars = 2;
  }
  if (score >= 8 && score <= 11) {
    stars = 3;
  }
  if (score >= 12 && score <= 14) {
    stars = 4;
  }
  if (score >= 15 && score <= 18) {
    stars = 5;
  }
  return stars;
}
