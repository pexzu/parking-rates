import styled from '@emotion/styled';

export const PrimaryButton = styled('button')`
  label: PrimaryButton;

  padding: 6px 15px;
  margin: 6px;
  color: #ffffff;
  background: #224172;
  border-radius: 3px;
  border: 0;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    background: #d3d3d3;
    cursor: not-allowed;
    &:hover {
      opacity: 1;
    }
  }
`;
