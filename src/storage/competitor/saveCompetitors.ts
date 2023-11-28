import * as SecureStore from "expo-secure-store";
import { COMPETITORS_COLLECTION } from "@storage/storageConfig";
import { CompetitorDTO } from "@dtos/CompetitorDTO";

export default async function saveCompetitors(
  competitorsData: CompetitorDTO[]
) {
  try {
    await SecureStore.setItemAsync(
      COMPETITORS_COLLECTION,
      JSON.stringify(competitorsData)
    );
  } catch (error) {
    throw error;
  }
}
