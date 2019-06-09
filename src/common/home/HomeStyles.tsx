import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';

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

export const HomeInputBlockMessage = styled.div`
  label: HomeInputBlockMessage;
`;

export const drop = keyframes`
  from {
    max-height: 0%;
    opacity:.5;
  }
  to { 
    max-height: 100%;
    opacity:1;
  }
`;
