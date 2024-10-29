/*
15-18 puntos: 5 estrellas - Excelente nivel de ciberseguridad.
12-14 puntos: 4 estrellas - Buen nivel, pero con áreas de mejora.
8-11 puntos: 3 estrellas - Nivel medio de seguridad, se requieren medidas adicionales.
4-7 puntos: 2 estrellas - Nivel bajo de seguridad, es urgente mejorar las medidas.
0-3 puntos: 1 estrella - La empresa está en grave riesgo de ciberataques, se deben tomar acciones inmediatas.
*/

export const diagnostico = {
  1: "La empresa está en grave riesgo de ciberataques, se deben tomar acciones inmediatas.",
  2: "Nivel bajo de seguridad, es urgente mejorar las medidas.",
  3: "Nivel medio de seguridad, se requieren medidas adicionales.",
  4: "Buen nivel, pero con áreas de mejora.",
  5: "Excelente nivel de ciberseguridad.",
};

export const MAX_SCORE = 18;

export interface IListaDeAccion {
  rango: string;
  nivel: string;
  mensaje?: string;
  acciones: IAccion[];
}

export interface IAccion {
  titulo: string;
  descripcion: string;
}

export const listaDeAccion: Record<number, IListaDeAccion> = {
  5: {
    rango: "15-18 puntos",
    nivel: "Excelente nivel de ciberseguridad",
    mensaje: "Tu empresa está muy bien protegida. Para seguir mejorando:",
    acciones: [
      {
        titulo: "Monitoreo en tiempo real",
        descripcion:
          "Implementar un sistema de monitoreo en tiempo real para detectar amenazas y alertas de seguridad.",
      },
      {
        titulo: "Simulaciones de ciberataques",
        descripcion:
          "Programar simulaciones regulares de ciberataques para entrenar al personal en la respuesta a incidentes.",
      },
      {
        titulo: "Revisión periódica de políticas",
        descripcion:
          "Establecer un calendario anual para la revisión y actualización de las políticas de seguridad, teniendo en cuenta las nuevas amenazas.",
      },
      {
        titulo: "Reforzar la seguridad",
        descripcion:
          "Revisar la infraestructura de seguridad y considerar nuevas soluciones, como inteligencia artificial para detectar amenazas.",
      },
    ],
  },
  4: {
    rango: "12-14 puntos",
    nivel: "Buen nivel, con áreas de mejora",
    acciones: [
      {
        titulo: "Implementar MFA",
        descripcion:
          "Revisar qué sistemas críticos aún no tienen MFA (autenticación multifactor) y proceder con su implementación.",
      },
      {
        titulo: "Capacitación continua",
        descripcion:
          "Diseñar y ofrecer capacitaciones periódicas sobre ciberseguridad para todo el personal, al menos una vez al año.",
      },
      {
        titulo: "Auditorías de seguridad",
        descripcion:
          "Programar auditorías internas de seguridad para identificar vulnerabilidades y aplicar un plan de remediación basado en los resultados.",
      },
      {
        titulo: "Actualizar software y sistemas",
        descripcion:
          "Verificar que todos los sistemas estén actualizados de acuerdo con las últimas versiones.",
      },
    ],
  },
  3: {
    rango: "8-11 puntos",
    nivel: "Nivel medio, se requieren mejoras",
    acciones: [
      {
        titulo: "Actualizar automáticamente el software",
        descripcion:
          "Configurar actualizaciones automáticas para todos los sistemas y aplicaciones de la empresa.",
      },
      {
        titulo: "Implementar gestor de contraseñas",
        descripcion:
          "Seleccionar y poner en marcha un gestor de contraseñas para todo el equipo.",
      },
      {
        titulo: "Configurar red Wi-Fi separada",
        descripcion:
          "Crear una red Wi-Fi para empleados y otra para invitados, protegiéndolas con contraseñas seguras.",
      },
      {
        titulo: "Evaluar la implementación de MFA",
        descripcion:
          "Identificar áreas donde MFA aún no está implementado y considerar su implementación.",
      },
    ],
  },
  2: {
    rango: "4-7 puntos",
    nivel: "Nivel bajo, es urgente mejorar",
    acciones: [
      {
        titulo: "Instalar antivirus y firewall",
        descripcion:
          "Asegurarse de que todos los dispositivos tengan un software antivirus actualizado y un firewall activado.",
      },
      {
        titulo: "Implementar un gestor de contraseñas",
        descripcion:
          "Implementar inmediatamente un gestor de contraseñas para evitar el uso de contraseñas débiles o reutilizadas.",
      },
      {
        titulo: "Capacitación en ciberseguridad",
        descripcion:
          "Organizar una capacitación básica para todo el personal sobre ciberseguridad, incluyendo temas de protección de datos y phishing.",
      },
      {
        titulo: "Crear un plan de respuesta a incidentes",
        descripcion:
          "Diseñar y documentar un plan de acción ante incidentes de ciberseguridad y asignar roles y responsabilidades.",
      },
    ],
  },
  1: {
    rango: "0-3 puntos",
    nivel: "Grave riesgo de ciberataques",
    acciones: [
      {
        titulo: "Instalar software de seguridad",
        descripcion:
          "Comprar e instalar software de seguridad (antivirus y firewall) en todos los dispositivos de la empresa.",
      },
      {
        titulo: "Implementar MFA y fortalecer contraseñas",
        descripcion:
          "Implementar MFA en todos los accesos críticos y asegurar contraseñas seguras y únicas.",
      },
      {
        titulo: "Automatizar copias de seguridad",
        descripcion:
          "Configurar copias de seguridad automáticas diarias para todos los datos críticos, tanto en almacenamiento externo como en la nube.",
      },
      {
        titulo: "Capacitar al personal",
        descripcion:
          "Organizar inmediatamente una capacitación en ciberseguridad básica, con especial énfasis en evitar ataques de phishing.",
      },
      {
        titulo: "Establecer un plan de respuesta a incidentes",
        descripcion:
          "Crear un plan básico de respuesta ante incidentes y asignar responsables para ejecutar las acciones necesarias.",
      },
    ],
  },
};
