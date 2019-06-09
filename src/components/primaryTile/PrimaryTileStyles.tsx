import styled from '@emotion/styled';

export const PrimaryTileBlock = styled.div`
  label: PrimaryTileBlock;
  transition: 0.3s ease;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  padding: 0 48px;
  box-shadow: 0 0 1px 0;
  background: #224172;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const PrimaryTileBlockLabel = styled.div`
  label: PrimaryTileBlockLabel;
  padding: 25px 0;
  font-size: 21px;
  color: #ffffff;
`;

interface IPrimaryTileBlockIconContainer {
  rotate: boolean;
}
export const PrimaryTileBlockIcon = styled.span<IPrimaryTileBlockIconContainer>`
  label: PrimaryTileBlockIcon;
  transform: ${props => (props.rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.3s ease;
  width: 24px;
  height: 24px;
  > svg {
    fill: #ffffff;
  }
`;
