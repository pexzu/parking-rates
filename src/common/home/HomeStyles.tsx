import styled from '@emotion/styled';

import { DropdownIcon } from '../../assets/DropdownIcon';

export const HomeContainer = styled.div`
  label: HomeContainer;
  height: 100vh;
  background: #f2f2f2;
`;

export const HomeHeaderBlock = styled.header`
  label: HomeHeaderBlock;
  color: #224172;
  text-align: center;
  font-size: 1.6rem;
  padding: 50px 0;
  font-weight: 300;
`;

export const HomeInputBlock = styled.div`
  label: HomeInputBlock;
  text-align: center;
  background: #ffffff;
  padding: 50px 0;
`;

export const HomeInfoBlock = styled.div`
  label: HomeInfoBlock;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 0 1px 0;
  background: #224172;
`;

export const HomeInfoBlockLabel = styled.div`
  label: HomeInfoBlockLabel;
  padding: 36px;
  font-size: 21px;
  color: #ffffff;
`;

interface IHomeInfoBlockIconContainer {
  rotate: boolean;
}
export const HomeInfoBlockIcon = styled.span<IHomeInfoBlockIconContainer>`
  label: HomeInfoBlockIcon;
  transform: ${props => props.rotate && 'rotate(180deg)'};
  transition: 0.3s ease;
  width: 24px;
  height: 24px;
  > svg {
    fill: #ffffff;
  }
`;

export const HomeInputBlockMessage = styled.div`
  label: HomeInputBlockMessage;
`;
