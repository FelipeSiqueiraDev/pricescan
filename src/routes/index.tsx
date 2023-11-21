import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigatorRoutesProps, AuthRoutes } from "@routes/auth.routes";

import { useAuth } from "@hooks/useAuth";
import { ProgramRoutes } from "./program.routes";

export function Routes() {
  const { logged } = useAuth();

  return (
    <NavigationContainer>
      {logged ? <ProgramRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
