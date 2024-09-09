// nav items for header

import type { ButtonTypes, ButtonSize } from '@/types/types';

// heading props
export interface HeadingProps {
  cssClasses?: string;
  textToDisplay?: string;
}

// button props
export interface ButtonProps {
  type?: ButtonTypes;
  size?: string | ButtonSize;
  flat?: boolean;
  outline?: boolean;
  rounded?: boolean;
  round?: boolean;
  square?: boolean;
  color?: string;
  textColor?: string;
  label?: string | number;
  icon?: string;
  padding?: string;
  disable?: boolean;
}

// combo item props
export interface Item {
  title: string;
  value: string;
}

// input type props
export interface InputProps {
  inputModelValue?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  rules?: ((v: string) => boolean | string)[];
}

// date props
export interface DateProps {
  inputModelValue?: string;
}
