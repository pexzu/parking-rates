import styled from '@emotion/styled';
import { drop } from '../../HomeStyles';

export const ToggleInfoContentBlock = styled.div`
  label: ToggleInfoContentBlock;
  background: #ffffff;
  border-bottom: 1px inset;
`;

export const ToggleInfoContentBlockLabel = styled.div`
  label: ToggleInfoContentBlockLabel;
`;

export const ToggleInfoContentBlockSection = styled.div`
  label: ToggleInfoContentBlockSection;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
`;

export const ToggleInfoContentBlockLeftSide = styled.div`
  label: ToggleInfoContentBlockLeftSide;
`;

export const ToggleInfoContentBlockRightSide = styled.div`
  label: ToggleInfoContentBlockRightSide;
`;

export const ToggleInfoContentBlockConditon = styled.div`
  label: ToggleInfoContentBlockConditon;
  font-size: 12px;
  text-align: center;
  padding-bottom: 3px;
`;

export const ToggleInfoContentBlockType = styled.div`
  label: ToggleInfoContentBlockType;
  font-size: 12px;
  text-align: center;
`;

export const ToggleInfoContentContainer = styled.div`
  label: ToggleInfoContentContainer;
  animation: ${drop} 0.4s linear forwards;
`;

export const ToggleInfoContentBlockPrice = styled.div`
  label: ToggleInfoContentBlockPrice;
  font-weight: bold;
  padding: 3px;
`;

export const OtherRatesContainer = styled.div`
  label: OtherRatesContainer;
`;

export const OtherRatesBlock = styled.div`
  label: OtherRatesBlock;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px inset;
`;

export const OtherRatesPeriod = styled.div`
  label: OtherRatesPeriod;
  padding: 0 6px;
`;

export const OtherRatesCost = styled(ToggleInfoContentBlockPrice)`
  label: OtherRatesCost;
  padding: 6px;
`;
