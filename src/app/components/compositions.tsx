import React, { useState, useEffect } from 'react';
import { clearString } from '../utils/ClearString';

interface Props {
  compositions:
    | [
        string,
        {
          CompositionName: string;
          PosicionMedia: number;
          EarlyData: any;
          LateData: any;
          leveling: any;
        },
      ][]
    | null;
  elements: string[];
}

export const Compositions: React.FC<Props> = ({ compositions, elements }) => {
  const [uniqueGreenCounts, setUniqueGreenCounts] = useState<{ [key: string]: number }>(
    {},
  );

  useEffect(() => {
    const countUniqueGreens = (dataList: any[], level: string, compName: string) => {
      const uniqueElements = new Set<string>();

      dataList.forEach((data) => {
        clearString(data[1].Unidades || data[1].units_lists)
          .split(' ')
          .forEach((a) => {
            if (elements.some((b) => a === b[0])) {
              uniqueElements.add(a);
            }
          });
      });

      return uniqueElements.size;
    };

    const newCounts: { [key: string]: number } = {};

    compositions?.forEach((element) => {
      let totalUniqueGreens = 0;

      ['4', '5', '6', '7'].forEach((level) => {
        const uniqueCount = countUniqueGreens(
          element[1].EarlyData[level],
          level,
          element[1].CompositionName,
        );
        totalUniqueGreens += uniqueCount;
      });

      const uniqueLateCount = countUniqueGreens(
        element[1].LateData,
        'LateData',
        element[1].CompositionName,
      );
      totalUniqueGreens += uniqueLateCount;

      newCounts[element[1].CompositionName] = totalUniqueGreens;
    });

    setUniqueGreenCounts(newCounts);
  }, [compositions, elements]);

  // Crear un arreglo de composiciones ordenadas por el número de verdes únicos
  const sortedCompositions = compositions?.slice().sort((a, b) => {
    const countA = uniqueGreenCounts[a[1].CompositionName] || 0;
    const countB = uniqueGreenCounts[b[1].CompositionName] || 0;
    return countB - countA; // Orden descendente
  });

  return (
    <div className="">
      {sortedCompositions &&
        sortedCompositions.map((element, index) => (
          <div key={element[1].CompositionName} className="flex flex-wrap text-sm py-5">
            {index < 10 && (
              <div>
                <h1>
                  {element[1].CompositionName}-{element[1].leveling} -{' '}
                  {element[1].PosicionMedia.toString().substring(0, 4)} - Verdes únicos:{' '}
                  {uniqueGreenCounts[element[1].CompositionName] || 0}
                </h1>

                <div className="flex flex-row">
                  <div>
                    <p>Level4</p>
                    {element[1].EarlyData['4'].map(
                      (data: { avg: { toString: () => string } }[]) => {
                        const units = clearString(data[1].Unidades)
                          .split(' ')
                          .map((a, index) => {
                            const found = elements.some((b) => a === b[0]);
                            return (
                              <span
                                className={found ? 'text-green-500' : 'text-red-500'}
                                key={index}
                              >
                                {a}{' '}
                              </span>
                            );
                          });

                        return (
                          <div key={data[1].avg}>
                            <p>
                              {units} {/* Renderizamos todos los spans */}
                              {data[1].avg.toString().substring(0, 4)}
                            </p>
                          </div>
                        );
                      },
                    )}
                  </div>
                  <div>
                    <p>Level5</p>
                    {element[1].EarlyData['5'].map(
                      (data: { avg: { toString: () => string } }[]) => {
                        const units = clearString(data[1].Unidades)
                          .split(' ')
                          .map((a, index) => {
                            const found = elements.some((b) => a === b[0]);
                            return (
                              <span
                                className={found ? 'text-green-500' : 'text-red-500'}
                                key={index}
                              >
                                {a}{' '}
                              </span>
                            );
                          });

                        return (
                          <div key={data[1].avg}>
                            <p>
                              {units} {/* Renderizamos todos los spans */}
                              {data[1].avg.toString().substring(0, 4)}
                            </p>
                          </div>
                        );
                      },
                    )}
                  </div>
                  <div>
                    <p>Level6</p>
                    {element[1].EarlyData['6'].map(
                      (data: { avg: { toString: () => string } }[]) => {
                        const units = clearString(data[1].Unidades)
                          .split(' ')
                          .map((a, index) => {
                            const found = elements.some((b) => a === b[0]);
                            return (
                              <span
                                className={found ? 'text-green-500' : 'text-red-500'}
                                key={index}
                              >
                                {a}{' '}
                              </span>
                            );
                          });

                        return (
                          <div key={data[1].avg}>
                            <p>
                              {units} {/* Renderizamos todos los spans */}
                              {data[1].avg.toString().substring(0, 4)}
                            </p>
                          </div>
                        );
                      },
                    )}
                  </div>
                  <div>
                    <p>Level7</p>
                    {element[1].EarlyData['7'].map(
                      (data: { avg: { toString: () => string } }[]) => {
                        const units = clearString(data[1].Unidades)
                          .split(' ')
                          .map((a, index) => {
                            const found = elements.some((b) => a === b[0]);
                            return (
                              <span
                                className={found ? 'text-green-500' : 'text-red-500'}
                                key={index}
                              >
                                {a}{' '}
                              </span>
                            );
                          });

                        return (
                          <div key={data[1].avg}>
                            <p>
                              {units} {/* Renderizamos todos los spans */}
                              {data[1].avg.toString().substring(0, 4)}
                            </p>
                          </div>
                        );
                      },
                    )}
                  </div>

                  <div>
                    <p>Final Build</p>
                    {element[1].LateData.map(
                      (data: { avg: { toString: () => string } }[], index: number) => {
                        const units = clearString(data[1].units_lists)
                          .split(' ')
                          .map((a, index) => {
                            const found = elements.some((b) => a === b[0]);
                            return (
                              <span
                                className={found ? 'text-green-500' : 'text-red-500'}
                                key={index}
                              >
                                {a}{' '}
                              </span>
                            );
                          });

                        return (
                          <div key={data[1].units_lists + data[1].avg}>
                            {index < 10 && (
                              <div>
                                {units}
                                <p>{data[1].avg.toString().substring(0, 4)}</p>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
