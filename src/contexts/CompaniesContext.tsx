import { createContext, ReactNode, useEffect, useState } from "react";

import Toast from "react-native-toast-message";

import { api } from "@services/axios";
import { CompetitorDTO } from "@dtos/CompetitorDTO";

import saveCompetitors from "@storage/competitor/saveCompetitors";
import getAllCompetitors from "@storage/competitor/getAllCompetitors";
import deleteAllCompetitors from "@storage/competitor/deleteAllCompetitors";

export type CompaniesContextDataProps = {
  competitors: CompetitorDTO[];
  synchronization: () => Promise<void>;
};

export const CompaniesContext = createContext<CompaniesContextDataProps>(
  {} as CompaniesContextDataProps
);

type CompaniesContextProviderProps = {
  children: ReactNode;
};

export function CompaniesContextProvider({
  children,
}: CompaniesContextProviderProps) {
  const [competitors, setCompetitors] = useState<CompetitorDTO[]>([]);

  async function synchronization() {
    // FAZER UMA REQUISIÇÃO PARA O BACKEND PARA PEGAR OS CONCORRENTES
    const concorrentes: CompetitorDTO[] = [
      {
        id: 1,
        insertUserId: 1,
        insertDate: "22/10/2023",
        updateUserId: 1,
        updateDate: "22/10/2023",
        nome: "Concorrente 1",
        endereco: {
          logradouro: "Rua 1",
          numero: 1,
          cidade: "Itabirito",
          CEP: "35450-000",
          UF: "MG",
        },
        regiao: "Centro",
      },
      {
        id: 2,
        insertUserId: 2,
        insertDate: "22/10/2023",
        updateUserId: 2,
        updateDate: "22/10/2023",
        nome: "Concorrente 2",
        endereco: {
          logradouro: "Rua 2",
          numero: 2,
          cidade: "Itabirito",
          CEP: "35450-000",
          UF: "MG",
        },
        regiao: "Centro",
      },
      {
        id: 3,
        insertUserId: 3,
        insertDate: "22/10/2023",
        updateUserId: 3,
        updateDate: "22/10/2023",
        nome: "Concorrente 3",
        endereco: {
          logradouro: "Rua 3",
          numero: 3,
          cidade: "Itabirito",
          CEP: "35450-000",
          UF: "MG",
        },
        regiao: "Sudeste",
      },
      {
        id: 4,
        insertUserId: 4,
        insertDate: "22/10/2023",
        updateUserId: 4,
        updateDate: "22/10/2023",
        nome: "Concorrente 4",
        endereco: {
          logradouro: "Rua 4",
          numero: 4,
          cidade: "Itabirito",
          CEP: "35450-000",
          UF: "MG",
        },
        regiao: "Sudeste",
      },
    ];
    // /////////////////////////////////// //

    deleteAllCompetitors();
    saveCompetitors(concorrentes);
    setCompetitors(concorrentes);
  }

  return (
    <CompaniesContext.Provider value={{ competitors, synchronization }}>
      {children}
    </CompaniesContext.Provider>
  );
}
