import * as SecureStore from "expo-secure-store";
import { USER_CREDENTIALS } from "@storage/storageConfig";
import { UserDTO } from "@dtos/UserDTO";

export default async function getUserCredentials() {
  try {
    const userCredential = await SecureStore.getItemAsync(USER_CREDENTIALS);
    const userData: UserDTO = userCredential
      ? JSON.parse(userCredential)
      : undefined;

    if (!userData) {
      throw userData;
    }

    return userData;
  } catch (error) {
    throw error;
  }
}
