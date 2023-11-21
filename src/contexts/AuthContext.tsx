import { createContext, ReactNode, useState } from "react";

import Toast from "react-native-toast-message";

import { api } from "@services/axios";
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (user: UserDTO) => Promise<void>;
  logged: boolean;
  singOut: () => void;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [logged, setLogged] = useState(false);

  async function signIn({ username, password }: UserDTO) {
    const nome = username.split(".")[0];
    try {
      const { data } = await api.post("Account/Login", { username, password });

      console.log(data);
      Toast.show({
        type: "success",
        text1: `Olá ${
          nome.charAt(0).toUpperCase() + nome.slice(1)
        }, bem vindo(a) de volta`,
      });

      setLogged(true);
    } catch (error) {
      console.log("Ops, Usuário ou senha inválidos");
      Toast.show({
        type: "error",
        text1: "Usuário ou senha inválidos",
        text2: "Confira as credenciais e tente novamente",
      });

      throw error;
    }
  }

  function singOut() {
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, logged, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
