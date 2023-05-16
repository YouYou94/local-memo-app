import { atom } from 'recoil';

export const modeState = atom<boolean>({
  key: 'modeState',
  default: false,
});
