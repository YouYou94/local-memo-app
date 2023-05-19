import { atom } from 'recoil';

export const modeState = atom<boolean>({
  key: 'modeState',
  default: JSON.parse(localStorage.getItem('mode') || 'false'),
});
