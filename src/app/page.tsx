'use client';
import { UseCompositions } from './hooks/useCompositions';
import { Compositions } from './components/compositions';
import { SearchBar } from './components/searchBar';
import { useState } from 'react';

export default function Home() {
  const { compositionsSort } = UseCompositions();
  const [elements, setElements] = useState<string[]>([]);

  const ChangeElements = (element: string[]) => {
    setElements(element);
  };

  return (
    <main>
      <SearchBar ChangeElements={ChangeElements} />
      {compositionsSort !== null && (
        <Compositions compositions={compositionsSort} elements={elements} />
      )}
    </main>
  );
}
