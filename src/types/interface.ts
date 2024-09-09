// nav items for header

import type { ButtonTypes, ThemeColors, OptionsForRoundedCorners, ButtonVariants } from '@/types/types';

export interface HeaderNavItem {
  path: string;
  text: string;
}

// button props
export interface ButtonProps {
  type?: ButtonTypes;
  text?: string;
  icon?: string;
  disabled?: boolean;
  color?: ThemeColors;
  customClass?: string;
  rounded?: OptionsForRoundedCorners;
  variant?: ButtonVariants;
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