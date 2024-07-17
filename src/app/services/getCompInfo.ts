import { Welcome3 } from '../../../types';
export const getCompInfo = async (
  cluster: number,
  clusterId: number,
): Promise<Welcome3> => {
  const request = await fetch(
    `https://api2.metatft.com/tft-comps-api/comp_details?comp=${cluster}&cluster_id=${clusterId}`,
  );
  const data = await request.json();
  return data.results;
};
