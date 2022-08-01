export default function middlewareConfig(middlewares:Array<Function> | undefined){
  const defaultMiddleware = (value: string | number) => value;
  return middlewares ? [defaultMiddleware, ...middlewares] : [defaultMiddleware]
}