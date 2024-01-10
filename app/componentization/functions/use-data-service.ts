export const useDataService = (route: string) => {
  return {
    closeToExpiration: {
      Licenças: [
        { nome: "PH da água", dateToExpire: new Date("2024-01-13") },
        { nome: "Solo não poluído", dateToExpire: new Date("2024-01-14") },
      ],
      "Processos Minerários": [
        {
          nome: "Permissão de excavar",
          dateToExpire: new Date("2024-01-13"),
        },
        {
          nome: "Permissão da cidade",
          dateToExpire: new Date("2024-01-14"),
        },
        {
          nome: "Permissão de orgão ambiental",
          dateToExpire: new Date("2024-01-13"),
        },
      ],
    },
    expired: {
      "Processos Minerários": [
        {
          nome: "Permissão de excavar",
          dateToExpire: new Date("2023-12-30"),
        },
      ],
      Licenças: [
        { nome: "PH da água", dateToExpire: new Date("2023-12-30") },
        { nome: "Solo não poluído", dateToExpire: new Date("2024-01-01") },
      ],
    },
    expiringToday: {
      Licenças: [
        {
          nome: "Construir perto de nascente",
          dateToExpire: new Date("2024-01-12"),
        },
      ],
    },
  };
};
