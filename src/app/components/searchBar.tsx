import { CHAMPIONS } from '../utils/consts';
import { useState } from 'react';

interface Props {
  ChangeElements: (element: string[]) => void;
}

export const SearchBar: React.FC<Props> = ({ ChangeElements }) => {
  const [searchedChampion, setSearchedChampion] = useState<string>();
  const [elements, setElements] = useState([]);

  const filterChampions = (input: string) => {
    const filteredChampions = CHAMPIONS.filter((champion: string) => {
      if (champion.toLowerCase().includes(input.toLowerCase())) {
        return champion;
      }
      return null;
    });
    setSearchedChampion(filteredChampions);
    return filteredChampions;
  };

  const onPressKey = (event) => {
    if (event.key === 'Enter') {
      setElements([...elements, searchedChampion]);
      ChangeElements([...elements, searchedChampion]);
      event.currentTarget.value = '';
    }
  };

  const onChangeElement = (event: React.FormEvent<HTMLInputElement>) => {
    filterChampions(event.currentTarget.value);
  };
  return (
    <>
      <input
        type="text"
        onChange={(event) => onChangeElement(event)}
        onKeyDown={(event) => onPressKey(event)}
        className="text-black"
      />
      <div>
        <p className="flex flex-col">
          {searchedChampion?.length !== 59 && searchedChampion}
        </p>
      </div>
    </>
  );
};
