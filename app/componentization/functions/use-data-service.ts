export const useDataService = (route: string) => {
  return [
    {
      section: "closeToExpiration",
      modules: [
        {
          module: "Licenças",
          data: [
            { nome: "PH da água", dateToExpire: new Date("2024-01-14") },
            { nome: "Solo não poluído", dateToExpire: new Date("2024-01-15") },
          ],
        },
        {
          module: "Processos Minerários",
          data: [
            {
              nome: "Permissão de excavar",
              dateToExpire: new Date("2024-01-16"),
            },
            {
              nome: "Permissão da cidade",
              dateToExpire: new Date("2024-01-14"),
            },
            {
              nome: "Permissão de orgão ambiental",
              dateToExpire: new Date("2024-01-15"),
            },
          ],
        },
      ],
    },
    {
      section: "expired",
      modules: [
        {
          module: "Processos Minerários",
          data: [
            {
              nome: "Permissão de excavar",
              dateToExpire: new Date("2023-12-30"),
            },
          ],
        },
        {
          module: "Licenças",
          data: [
            { nome: "PH da água", dateToExpire: new Date("2023-12-30") },
            { nome: "Solo não poluído", dateToExpire: new Date("2024-01-01") },
          ],
        },
      ],
    },
    {
      section: "expiringToday",
      modules: [
        {
          module: "Licenças",
          data: [
            {
              nome: "Construir perto de nascente",
              dateToExpire: new Date("2024-01-13"),
            },
          ],
        },
      ],
    },
  ];
};
