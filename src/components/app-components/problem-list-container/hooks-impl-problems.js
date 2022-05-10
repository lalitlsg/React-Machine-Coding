import { UID } from '../../../constant/constant';

export const hooksImplProblems = [
  {
    linkName: 'useMemo',
    componentName: 'use-memo',
    uid: UID.USE_MEMO,
    subList: [
      { id: 'fact', name: 'Calculate Factorial', uid: UID.USE_MEMO_FACTORIAL },
      { id: 'sorting', name: 'Sorting', uid: UID.USE_MEMO_SORTING },
    ],
  },
];
