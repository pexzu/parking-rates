import * as React from 'react';
import { getRate } from '../../../../logic/RateCalculation';
import * as E from './CalculatedResultStyles';

export interface ICalculatedResult {
  entry: Date;
  exit: Date;
}

export const CalculatedResult = (props: ICalculatedResult) => {
  return (
    <E.CalculatedResultContatiner>{getRate(props.entry, props.exit)}</E.CalculatedResultContatiner>
  );
};
