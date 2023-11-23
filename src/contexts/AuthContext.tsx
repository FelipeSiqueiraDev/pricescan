import { createContext, ReactNode, useState } from "react";

import Toast from "react-native-toast-message";

import { api } from "@services/axios";
import { UserDTO } from "@dtos/UserDTO";
import saveUserCredentials from "@storage/user/saveUser.credentials";
import deleteUserCredentials from "@storage/user/deleteUser.credentials";

export type AuthContextDataProps = {
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
  const [logged, setLogged] = useState(false);

  async function signIn({ username, password }: UserDTO) {
    const nome = username.split(".")[0];

    await api
      .post("Account/Login", { username, password })
      .then(async (resp) => {
        await saveUserCredentials({ username, password });
        Toast.show({
          type: "success",
          text1: `Olá ${
            nome.charAt(0).toUpperCase() + nome.slice(1)
          }, bem vindo(a) de volta`,
        });

        setLogged(true);
      })
      .catch(async (error) => {
        Toast.show({
          type: "error",
          text1: "Usuário ou senha incorretos!",
          text2: "Verifique as credenciais e tente novamente",
        });
        console.log(error);
      });
  }

  async function singOut() {
    try {
      await deleteUserCredentials();
      setLogged(false);
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, logged, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
