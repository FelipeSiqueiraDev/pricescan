import * as SecureStore from "expo-secure-store";
import { USER_CREDENTIALS } from "@storage/storageConfig";

export default async function deleteUserCredentials() {
  try {
    await SecureStore.deleteItemAsync(USER_CREDENTIALS);
  } catch (error) {
    throw error;
  }
}
