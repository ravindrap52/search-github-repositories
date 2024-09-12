import type { ButtonTypes, ButtonSize, InputType } from '@/types/types';

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

// option item props
export interface Item {
  label: string;
  value: string;
}

// selectbox props
export interface SelectBoxProps {
  selectBoxDefaultOptions?: Item[];
  selectBoxModelValue?: Item;
  outline?: boolean;
  rounded?: boolean;
  label?: string;
}

// input type props
export interface InputProps {
  name?: string;
  inputModelValue?: string | number | null;
  label?: string;
  placeholder?: string;
  type?: InputType;
  rules?: ((v: string) => boolean | string)[];
  lazyRules?: boolean;
  debounce?: string | number;
  maxLength?: string | number;
  disable?: boolean;
  readonly?: boolean;
  outline?: boolean;
}

interface RangeStart {
  year: number;
  month: number;
  day: number;
}

interface RangeEnd {
  from: RangeStart;
  to: RangeStart;
}

export interface Range {
  from: string;
  to: string;
}

// date props
export interface DateProps {
  inputModelValue?: string;
  name?: string;
  range?: boolean;
  rangeStart?: (from: RangeStart) => void;
  rangeEnd?: (range: RangeEnd) => void;
}

// form props
export interface FilterForm {
  searchByDefaultRepositories: Item[];
  searchByRepository: string;
  searchByStars: string;
}

//
export interface Params {
  [key: string]: string | number;
}

// form data
export interface FormData {
  filterForm?: FilterForm;
}

// url
export interface UrlType {
  objValues: Array<string>;
  searchByStars: string;
}

// GitHubRepository
export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
}
