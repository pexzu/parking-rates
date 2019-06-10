import * as React from 'react';
import * as E from './ToggleInfoContentStyles';
import { rates } from '../../../../mockData/mockData';

export interface IToggleInfoContentProps {}

export const ToggleInfoContent = (props: IToggleInfoContentProps) => {
  return (
    <E.ToggleInfoContentContainer>
      {rates.map((item, keyIndex) => (
        <E.ToggleInfoContentBlock key={item.name + keyIndex}>
          <E.ToggleInfoContentBlockSection>
            <E.ToggleInfoContentBlockLeftSide>
              <E.ToggleInfoContentBlockLabel>{item.name}</E.ToggleInfoContentBlockLabel>
            </E.ToggleInfoContentBlockLeftSide>
            {item.entry && item.exit && (
              <E.ToggleInfoContentBlockConditon>
                {item.entry} and {item.exit}
              </E.ToggleInfoContentBlockConditon>
            )}
            <E.ToggleInfoContentBlockRightSide>
              {typeof item.price === 'string' ? (
                <E.ToggleInfoContentBlockPrice>{item.price}</E.ToggleInfoContentBlockPrice>
              ) : (
                renderOtherRates(item.price)
              )}
              <E.ToggleInfoContentBlockType>({item.type})</E.ToggleInfoContentBlockType>
            </E.ToggleInfoContentBlockRightSide>
          </E.ToggleInfoContentBlockSection>
        </E.ToggleInfoContentBlock>
      ))}
    </E.ToggleInfoContentContainer>
  );
};

const renderOtherRates = (price: [{}]) => {
  return (
    <E.OtherRatesContainer>
      {price.map((item: any) =>
        Object.keys(item).map((key, keyIndex) => (
          <E.OtherRatesBlock key={keyIndex}>
            <E.OtherRatesPeriod> {key}</E.OtherRatesPeriod>
            <E.OtherRatesCost> {item[key]}</E.OtherRatesCost>
          </E.OtherRatesBlock>
        ))
      )}
    </E.OtherRatesContainer>
  );
};
