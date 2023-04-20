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
const getPlantDetailsQuery = gql`
  query Plants($slug:String!) {
    plants(where:{slug:$slug}) {
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
const getHomePlantsQuery = gql`
  query Plants {
    plants(first:6) {
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
export const getPlants = async ({type,slug}:{type:"all" |"partial" | "single",slug?:string | string[]}) => {
  const res: TotalPlantReponse = await request(API, type==="partial" ? getHomePlantsQuery : type==="single" ? getPlantDetailsQuery : getPlantsQuery,{slug});
  return res.plants;
};
