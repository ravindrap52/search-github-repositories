// types related to Button
export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// types related to input
export type InputType =
  | 'number'
  | 'text'
  | 'search'
  | 'password'
  | 'textarea'
  | 'email'
  | 'tel'
  | 'file'
  | 'url'
  | 'time'
  | 'date'
  | 'datetime-local';

// types relatd to httpmethod
export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}
// types related to input value
export type InputValueType = string | number | null;
