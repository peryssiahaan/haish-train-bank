import { TDIFFICULTIES } from 'src/common/constant/object';

export interface IQuestion {
  id: string;
  value: string;
  difficulty: TDIFFICULTIES;
}
