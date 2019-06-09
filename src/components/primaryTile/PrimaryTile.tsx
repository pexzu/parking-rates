import * as React from 'react';
import * as E from './PrimaryTileStyles';
import { DropdownIcon } from '../../assets/DropdownIcon';

export interface PrimaryTileProps {
  onClick: () => void;
  label: string;
  rotate: boolean;
}

export function PrimaryTile(props: PrimaryTileProps) {
  const { onClick, label, rotate } = props;
  return (
    <E.PrimaryTileBlock onClick={onClick}>
      <E.PrimaryTileBlockLabel>{label}</E.PrimaryTileBlockLabel>
      <E.PrimaryTileBlockIcon rotate={rotate}>
        <DropdownIcon />
      </E.PrimaryTileBlockIcon>
    </E.PrimaryTileBlock>
  );
}
