/*
15-18 puntos: 5 estrellas - Excelente nivel de ciberseguridad.
12-14 puntos: 4 estrellas - Buen nivel, pero con áreas de mejora.
8-11 puntos: 3 estrellas - Nivel medio de seguridad, se requieren medidas adicionales.
4-7 puntos: 2 estrellas - Nivel bajo de seguridad, es urgente mejorar las medidas.
0-3 puntos: 1 estrella - La empresa está en grave riesgo de ciberataques, se deben tomar acciones inmediatas.
*/

import { IActionState } from "../store/slices/diagnosticSlice";

export const diagnostico = {
  1: "La empresa está en grave riesgo de ciberataques, se deben tomar acciones inmediatas.",
  2: "Nivel bajo de seguridad, es urgente mejorar las medidas.",
  3: "Nivel medio de seguridad, se requieren medidas adicionales.",
  4: "Buen nivel, pero con áreas de mejora.",
  5: "Excelente nivel de ciberseguridad.",
};

export const MAX_SCORE = 33;

export interface IListaDeAccion {
  nivel: string;
  acciones: IActionState[];
}

export const listaDeAccion: Record<number, IListaDeAccion> = {
  5: {
    nivel: "Excelente nivel de ciberseguridad",
    acciones: [
      {
        titulo: "Monitoreo en tiempo real",
        descripcion:
          "Implementar un sistema de monitoreo en tiempo real para detectar amenazas y alertas de seguridad.",
        id: 1,
        completed: false,
      },
      {
        titulo: "Simulaciones de ciberataques",
        descripcion:
          "Programar simulaciones regulares de ciberataques para entrenar al personal en la respuesta a incidentes.",
        id: 2,
        completed: false,
      },
      {
        titulo: "Revisión periódica de políticas",
        descripcion:
          "Establecer un calendario anual para la revisión y actualización de las políticas de seguridad, teniendo en cuenta las nuevas amenazas.",
        id: 3,
        completed: false,
      },
      {
        titulo: "Reforzar la seguridad",
        descripcion:
          "Revisar la infraestructura de seguridad y considerar nuevas soluciones, como inteligencia artificial para detectar amenazas.",
        id: 4,
        completed: false,
      },
    ],
  },
  4: {
    nivel: "Buen nivel, con áreas de mejora",
    acciones: [
      {
        titulo: "Implementar MFA",
        descripcion:
          "Revisar qué sistemas críticos aún no tienen MFA (autenticación multifactor) y proceder con su implementación.",
        id: 5,
        completed: false,
      },
      {
        titulo: "Capacitación continua",
        descripcion:
          "Diseñar y ofrecer capacitaciones periódicas sobre ciberseguridad para todo el personal, al menos una vez al año.",
        id: 6,
        completed: false,
      },
      {
        titulo: "Auditorías de seguridad",
        descripcion:
          "Programar auditorías internas de seguridad para identificar vulnerabilidades y aplicar un plan de remediación basado en los resultados.",
        id: 7,
        completed: false,
      },
      {
        titulo: "Actualizar software y sistemas",
        descripcion:
          "Verificar que todos los sistemas estén actualizados de acuerdo con las últimas versiones.",
        id: 8,
        completed: false,
      },
    ],
  },
  3: {
    nivel: "Nivel medio, se requieren mejoras",
    acciones: [
      {
        titulo: "Actualizar automáticamente el software",
        descripcion:
          "Configurar actualizaciones automáticas para todos los sistemas y aplicaciones de la empresa.",
        id: 9,
        completed: false,
      },
      {
        titulo: "Implementar gestor de contraseñas",
        descripcion:
          "Seleccionar y poner en marcha un gestor de contraseñas para todo el equipo.",
        id: 10,
        completed: false,
      },
      {
        titulo: "Configurar red Wi-Fi separada",
        descripcion:
          "Crear una red Wi-Fi para empleados y otra para invitados, protegiéndolas con contraseñas seguras.",
        id: 11,
        completed: false,
      },
      {
        titulo: "Evaluar la implementación de MFA",
        descripcion:
          "Identificar áreas donde MFA aún no está implementado y considerar su implementación.",
        id: 12,
        completed: false,
      },
    ],
  },
  2: {
    nivel: "Nivel bajo, es urgente mejorar",
    acciones: [
      {
        titulo: "Instalar antivirus y firewall",
        descripcion:
          "Asegurarse de que todos los dispositivos tengan un software antivirus actualizado y un firewall activado.",
        id: 13,
        completed: false,
      },
      {
        titulo: "Implementar un gestor de contraseñas",
        descripcion:
          "Implementar inmediatamente un gestor de contraseñas para evitar el uso de contraseñas débiles o reutilizadas.",
        id: 14,
        completed: false,
      },
      {
        titulo: "Capacitación en ciberseguridad",
        descripcion:
          "Organizar una capacitación básica para todo el personal sobre ciberseguridad, incluyendo temas de protección de datos y phishing.",
        id: 15,
        completed: false,
      },
      {
        titulo: "Crear un plan de respuesta a incidentes",
        descripcion:
          "Diseñar y documentar un plan de acción ante incidentes de ciberseguridad y asignar roles y responsabilidades.",
        id: 16,
        completed: false,
      },
    ],
  },
  1: {
    nivel: "Grave riesgo de ciberataques",
    acciones: [
      {
        titulo: "Instalar software de seguridad",
        descripcion:
          "Comprar e instalar software de seguridad (antivirus y firewall) en todos los dispositivos de la empresa.",
        id: 17,
        completed: false,
      },
      {
        titulo: "Implementar MFA y fortalecer contraseñas",
        descripcion:
          "Implementar MFA en todos los accesos críticos y asegurar contraseñas seguras y únicas.",
        id: 18,
        completed: false,
      },
      {
        titulo: "Automatizar copias de seguridad",
        descripcion:
          "Configurar copias de seguridad automáticas diarias para todos los datos críticos, tanto en almacenamiento externo como en la nube.",
        id: 19,
        completed: false,
      },
      {
        titulo: "Capacitar al personal",
        descripcion:
          "Organizar inmediatamente una capacitación en ciberseguridad básica, con especial énfasis en evitar ataques de phishing.",
        id: 20,
        completed: false,
      },
      {
        titulo: "Establecer un plan de respuesta a incidentes",
        descripcion:
          "Crear un plan básico de respuesta ante incidentes y asignar responsables para ejecutar las acciones necesarias.",
        id: 21,
        completed: false,
      },
    ],
  },
};
