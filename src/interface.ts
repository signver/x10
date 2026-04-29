export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export interface SlotFactory<
  TKey extends string,
  TApi extends object,
  TBase extends object,
> {
  (context: { extendFrom: TBase }): [TKey, TApi];
}

export type InferSlot<T> = T extends (
  context: infer TContext,
) => [infer TKey, infer TApi]
  ? TContext extends { extendFrom: infer TBase }
    ? TBase extends object
      ? TKey extends string
        ? {
            key: TKey;
            api: TApi;
            extendFrom: TBase;
            slot: { [K in TKey]: TApi };
          }
        : never
      : never
    : never
  : never;

export type Converge<TBase, TSlots> =
  TSlots extends Array<infer TFactory>
    ? InferSlot<TFactory> extends { slot: infer TSlot }
      ? TBase & UnionToIntersection<TSlot>
      : never
    : never;
