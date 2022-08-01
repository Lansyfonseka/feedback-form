export type CustomInputState = {
  value: string,
  isError: boolean,
  isValid: boolean,
  validation: Array<RegExp>
}

export type CustomInputProps = {
  name: string,
  type?: string,
  label: string,
  validations?: Array<RegExp>  
}