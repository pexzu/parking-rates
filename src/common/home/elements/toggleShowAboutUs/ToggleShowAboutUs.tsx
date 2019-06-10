import * as React from 'react';
import { aboutUs } from '../../../../data/data';
import * as E from './ToggleShowAboutUsStyles';

export interface IToggleShowAboutUsProps {}

export const ToggleShowAboutUs = (props: IToggleShowAboutUsProps) => {
  return <E.AboutUsContainer>{aboutUs}</E.AboutUsContainer>;
};
