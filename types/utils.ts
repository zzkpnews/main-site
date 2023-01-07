export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;
