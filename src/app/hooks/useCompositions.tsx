'use client';
import { useEffect, useState } from 'react';
import { getAllComps } from '../services/getAllComps';
import { getCompInfo } from '../services/getCompInfo';
import { convertText } from '../utils/DataFromTFT';
import { CompositionsFinal } from '../../../types';

export const UseCompositions = (): {
  compositionsSort: [string, { CompositionName: string; PosicionMedia: number }][] | null;
} => {
  const [compositions, setCompositions] = useState<CompositionsFinal | null>(null);
  const [compositionsSort, setCompositionsSort] = useState<
    | [
        string,
        {
          CompositionName: string;
          PosicionMedia: number;
        },
      ][]
    | null
  >(null);

  const fetchingData = async () => {
    const dataObject: CompositionsFinal = {};
    const data = await getAllComps();
    const clusterId = data.cluster_id;
    for (const element of Object.values(data.cluster_details)) {
      const data = await getCompInfo(element.Cluster, clusterId);
      const levelCuatro = [];
      const levelCinco = [];
      const levelSeis = [];
      const levelSiete = [];
      const EarlyData = [];
      const LateData = [];

      for (const early_options of Object.entries(data.early_options)) {
        for (const option of early_options[1]) {
          //4,5,6,7
          let index = 0;
          if (early_options[0][index] === '4') {
            levelCuatro.push({
              Unidades: option.unit_list,
              avg: option.avg,
            });
          }
          if (early_options[0][index] === '5') {
            levelCinco.push({
              Unidades: option.unit_list,
              avg: option.avg,
            });
          }
          if (early_options[0][index] === '6') {
            levelSeis.push({
              Unidades: option.unit_list,
              avg: option.avg,
            });
          }

          if (early_options[0][index] === '7') {
            levelSiete.push({
              Unidades: option.unit_list,
              avg: option.avg,
            });
          }

          index++;
        }
      }
      EarlyData.push({
        '4': OrderComposition(levelCuatro),
        '5': OrderComposition(levelCinco),
        '6': OrderComposition(levelSeis),
        '7': OrderComposition(levelSiete),
      });

      for (const option of Object.entries(data.options)) {
        if (option[0] === '8') {
          for (const opt of option[1]) {
            LateData.push({
              units_lists: opt.units_list,
              avg: opt.avg,
            });
          }
        }
      }

      if (typeof element === 'object' && EarlyData !== undefined) {
        dataObject[element.Cluster] = {
          CompositionName: convertText(element.name_string),
          PosicionMedia: element.overall.avg,
          EarlyData: EarlyData[0],
          LateData: OrderComposition(LateData),
          leveling: element.levelling,
        };
      }
    }
    console.log(dataObject);
    setCompositions(dataObject);
  };

  const OrderData = () => {
    const compositionsSort = compositions;
    if (compositionsSort) {
      const compositionsSorted = Object.entries(compositionsSort).sort(
        (a, b) => a[1].PosicionMedia - b[1].PosicionMedia,
      );

      return compositionsSorted;
    }
  };

  const OrderComposition = (data) => {
    const compositionsSort = data;
    if (compositionsSort) {
      const compositionsSorted = Object.entries(compositionsSort).sort(
        (a, b) => a[1].avg - b[1].avg,
      );

      return compositionsSorted;
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    if (compositions !== null && compositions !== undefined) {
      const data = OrderData();
      if (data !== undefined) {
        setCompositionsSort(data);
      }
    }
  }, [compositions]);

  return { compositionsSort };
};
