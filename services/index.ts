import { error } from "console";
import { GraphQLClient, request, gql } from "graphql-request";

export interface TotalPlantReponse {
  plants: SinglePlantResponse[];
}
export interface SinglePlantResponse {
  fullDescription: string;
  name: string;
  shortDescription: string;
  slug: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}
const API = process.env.NEXT_PUBLIC_CONTENT_API ? process.env.NEXT_PUBLIC_CONTENT_API : "";
const gqlClient = new GraphQLClient(API);
const getPlantsQuery = gql`
  query Plants {
    plants {
      fullDescription
      name
      shortDescription
      slug
      image {
        url
        width
        height
      }
    }
  }
`;
export const getAllPlants = async () => {
  const res: TotalPlantReponse = await request(API, getPlantsQuery);
  return res.plants;
};
