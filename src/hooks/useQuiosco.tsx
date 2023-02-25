import { QuioscoContext } from '@/context/QuioscoProvider';
import { useContext } from 'react';

export const useQuiosco = () => {
  return useContext(QuioscoContext);
};
