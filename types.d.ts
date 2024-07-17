import { EarlyOption, CompositionDataEarly } from './types.d';
export interface Welcome7 {
  results: Results;
  updated: number;
  tft_set: string;
  queue_id: number;
  cluster_id: number;
}

export interface Results {
  data: Data;
  games: { [key: string]: Game[] };
}

export interface Data {
  cluster_id: number;
  tft_set: string;
  cluster_details: { [key: string]: ClusterDetail };
  portals: Portal[];
}

export interface ClusterDetail {
  Cluster: number;
  centroid: number[];
  units_string: string;
  traits_string: string;
  name: Name[];
  name_string: string;
  top_headliner: string[];
  overall: Game;
  stars: string[];
  stars_4: string[];
  builds: Build[];
  build_items: { [key: string]: BuildItem };
  top_itemNames: BuildItem[];
  top_items: string[];
  trends: Trend[];
  top_augments: BuildItem[];
  diff_pick: number;
  diff_place: number;
  difficulty: number;
  levelling: Levelling;
}

export interface BuildItem {
  itemNames?: string;
  count: number;
  avg: number;
  pcnt: number;
  aug?: string;
}

export interface Build {
  cluster: string;
  count: number;
  avg: number;
  unit: string;
  buildName: string[];
  build: string[];
  num_items: number;
  score: number;
  place_change: number;
  unit_numitems_count: number;
}

export enum Levelling {
  Fast8 = 'Fast 8',
  Fast9 = 'Fast 9',
  Lvl5 = 'lvl 5',
  Lvl6 = 'lvl 6',
  Lvl7 = 'lvl 7',
  Standard = 'Standard',
}

export interface Name {
  name: string;
  type: Type;
  score: number;
}

export enum Type {
  Augment = 'augment',
  Trait = 'trait',
  Unit = 'unit',
}

export interface Game {
  count: number;
  avg: number;
}

export interface Trend {
  day: Date;
  count: number;
  avg: number;
  pick: number;
}

export interface Portal {
  portal: string;
  count: number;
  place_sum: number;
  comps: Comp[];
  pickrate: number;
  avg: number;
}

export interface Comp {
  c: string;
  a_diff: number;
  cnt: number;
  p_chng: number;
}

export interface CompositionsFinal {
  [key: string]: {
    CompositionName: string;
    PosicionMedia: number;
    EarlyData: CompositionsLevel;
    LateData: CompositionsDataEarly;
  };
}

export interface CompositionsLevel {
  [key: string]: CompositionDataEarly[];
}

export interface CompositionDataEarly {
  Unidades: string;
  avg: number;
}

interface UnidadInfo {
  Unidades: string;
  avg: number;
}

interface DataSet {
  [key: string]: UnidadInfo | [string, UnidadInfo][];
}
////////////////////////////
export interface Welcome3 {
  cluster: string;
  placements: OverallValue[];
  counters: Counter[];
  players: { [key: string]: number };
  headliner_traits: string[];
  headliner_units: string[];
  final_levels: FinalLevel[];
  unit_stats: UnitStat[];
  options: { [key: string]: Option[] };
  builds: Build[];
  overall: OverallValue;
  itemNames: ItemName[];
  items: string[];
  trends: Trend[];
  traits: Trait[];
  augments: Augment[];
  suggested_legends: string[];
  first_carousel: FirstCarousel[];
  ranks: Rank[];
  levels: Welcome3Level[];
  rerolls: { [key: string]: Reroll };
  positioning: Positioning;
  relative_positioning: RelativePositioning[];
  early_options: { [key: string]: EarlyOption[] };
  portals: Portals;
}

export interface Augment {
  aug: string;
  count: number;
  avg: number;
  orders: { [key: string]: OverallValue };
  pcnt: number;
}

export interface OverallValue {
  count: number;
  avg: number;
}

export interface Build {
  cluster: string;
  unit_buildNames?: string;
  count: number;
  avg: number;
  unit: string;
  buildName: string[];
  build: string[];
  num_items: number;
  score: number;
  place_change: number;
  unit_numitems_count?: number;
}

export interface Counter {
  against: number;
  place_change: number;
  similarity: number;
}

export interface EarlyOption {
  cluster: string;
  unit_list: string;
  count: number;
  level: number;
  avg: number;
  win: number;
}

export interface FinalLevel {
  level: string;
  count: number;
  avg: number;
}

export interface FirstCarousel {
  items: string;
  avg_sum: number;
  count: number;
  avg: number;
}

export interface ItemName {
  itemNames: string;
  count: number;
  avg: number;
  pcnt: number;
  units?: UnitElement[];
}

export interface UnitElement {
  count: number;
  avg: number;
  units: string;
  place_change: number;
  unit_pick: number;
  item_pick: number;
}

export interface Welcome3Level {
  stage: string;
  round: string;
  count: number;
  level: number;
}

export interface Option {
  units_list: string;
  traits_list: string;
  score: number;
  avg: number;
  count: number;
}

export interface Portals {
  overall: PortalsOverall;
  portals: Portal[];
}

export interface PortalsOverall {
  avg: number;
  pickrate: number;
  count: number;
}

export interface Portal {
  portal: string;
  avg: number;
  pickrate: number;
  count: number;
  portal_count: number;
}

export interface Positioning {
  positions: { [key: string]: number };
  units: { [key: string]: UnitValue };
}

export interface UnitValue {
  unit: string;
  positions: Position[];
}

export interface Position {
  cell: string;
  count: number;
}

export interface Rank {
  rank: string;
  count: number;
  avg: number;
  pick: number;
  rank_sort: number;
}

export interface RelativePositioning {
  relative_positions: string;
  count: number;
  avg: number;
}

export interface Reroll {
  rerolls: number;
  matches: number;
  count: number;
}

export interface Trait {
  trait: string;
  score: number;
  count: number;
  place_sum: number;
  weighted_count: number;
  levels: TraitLevel[];
}

export interface TraitLevel {
  level: number;
  count: number;
  avg: number;
}

export interface Trend {
  day: Date;
  count: number;
  avg: number;
  pick: number;
}

export interface UnitStat {
  unit: string;
  tiers: NumItem[];
  num_items: NumItem[];
  count: number;
  avg: number;
  pcnt: number;
}

export interface NumItem {
  num_items?: number;
  avg: number;
  count: number;
  pcnt: number;
  tier?: number;
}
