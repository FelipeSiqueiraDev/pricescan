import * as SecureStore from "expo-secure-store";
import { COMPETITORS_COLLECTION } from "@storage/storageConfig";
import { CompetitorDTO } from "@dtos/CompetitorDTO";

export default async function deleteAllCompetitors() {
  try {
    await SecureStore.deleteItemAsync(COMPETITORS_COLLECTION);
  } catch (error) {
    throw error;
  }
}
