import * as React from 'react';
import { getRate } from '../../../../logic/RateCalculation';

export interface ICalculatedResult {
  entry: Date;
  exit: Date;
}

export const CalculatedResult = (props: ICalculatedResult) => {
  return (
    <div>
      The total cost for your parking period is :{getRate(props.entry, props.exit)}
      <div />
    </div>
  );
};
