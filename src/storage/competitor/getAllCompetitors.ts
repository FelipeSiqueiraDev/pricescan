import * as SecureStore from "expo-secure-store";
import { COMPETITORS_COLLECTION } from "@storage/storageConfig";
import { CompetitorDTO } from "@dtos/CompetitorDTO";

export default async function getAllCompetitors() {
  try {
    const competitors = await SecureStore.getItemAsync(COMPETITORS_COLLECTION);
    const competitorsList: CompetitorDTO[] = competitors
      ? JSON.parse(competitors)
      : undefined;

    if (!competitorsList) {
      throw competitorsList;
    }
    return competitorsList;
  } catch (error) {
    throw error;
  }
}
