import { Data, Welcome7 } from '../../../types';
export const getAllComps = async (): Promise<Data> => {
  const request = await fetch('https://api2.metatft.com/tft-comps-api/comps_data');
  const data: Welcome7 = await request.json();
  return data.results.data;
};
