import * as React from 'react';
import * as E from './PrimaryTileStyles';
import { DropdownIcon } from '../../assets/DropdownIcon';
import zenscroll from 'zenscroll';

export interface PrimaryTileProps {
  onClick: () => void;
  label: string;
  rotate: boolean;
}

export default class PrimaryTile extends React.PureComponent<PrimaryTileProps> {
  private tile = React.createRef<HTMLDivElement>();

  onClick = () => {
    this.props.onClick();
    zenscroll.toY((this.tile.current && this.tile.current.offsetTop) || 0);
  };
  render() {
    const { label, rotate } = this.props;
    return (
      <E.PrimaryTileBlock onClick={this.onClick} ref={this.tile}>
        <E.PrimaryTileBlockLabel>{label}</E.PrimaryTileBlockLabel>
        <E.PrimaryTileBlockIcon rotate={rotate}>
          <DropdownIcon />
        </E.PrimaryTileBlockIcon>
      </E.PrimaryTileBlock>
    );
  }
}
