import { selector } from 'recoil';
import { modeState } from './atom';

export const getModeState = selector({
  key: 'getModeState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const mode = get(modeState);

    return mode;
  },
});
