import { atom } from 'recoil';

export const modeState = atom<string>({
  key: 'modeState',
  default: 'bright',
});
