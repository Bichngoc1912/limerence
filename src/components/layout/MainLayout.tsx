import React from 'react';
import { LayoutPropsInterface } from './types';

export default function MainLayout({ children }: LayoutPropsInterface) {
  return <div>{children}</div>;
}
