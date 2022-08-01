export default function validationConfig(validations:Array<RegExp> | undefined) {
  const defaultValidator = new RegExp('.');
  return validations ? [defaultValidator, ...validations] : [defaultValidator]
}