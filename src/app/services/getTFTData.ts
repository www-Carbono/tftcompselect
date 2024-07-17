export const getTFTData = async () => {
  const requuest = await fetch(
    'https://raw.communitydragon.org/latest/cdragon/tft/en_us.json',
  );
  const data = await requuest.json();
  return data;
};
