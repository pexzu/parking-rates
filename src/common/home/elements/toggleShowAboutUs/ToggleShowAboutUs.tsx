import * as React from 'react';
import { aboutUs } from '../../../../mockData/mockData';
import * as E from './ToggleShowAboutUsStyles';

export interface IToggleShowAboutUsProps {}

export function ToggleShowAboutUs(props: IToggleShowAboutUsProps) {
  return <E.AboutUsContainer>{aboutUs}</E.AboutUsContainer>;
}
