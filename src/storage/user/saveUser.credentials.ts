import * as SecureStore from "expo-secure-store";
import { USER_CREDENTIALS } from "@storage/storageConfig";
import { UserDTO } from "@dtos/UserDTO";

export default async function saveUserCredentials(credentials: UserDTO) {
  try {
    await SecureStore.setItemAsync(
      USER_CREDENTIALS,
      JSON.stringify(credentials)
    );
  } catch (error) {
    throw error;
  }
}
