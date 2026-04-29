import type { Converge, SlotFactory } from './interface'

export type { SlotFactory } from './interface'

/**
 * Creates a blueprint function that extends the base object with the APIs provided by the slot factories.
 * Each blueprint function generates a new object that inherits from the base implementation.
 * The base object is shared across all instances created by the blueprint, while the APIs provided by the slot factories are unique to each instance.
 * @param schematic - The base object that serves as the foundation for the blueprint. It can be extended with additional APIs provided by the slot factories.
 * @returns extended base object
 * @example
 * const createWidget = blueprint({ getConfig(key) {} });
 * const dataWidget = createWidget(
 *   (context) => ["data", { read(key) {} }],
 * )
 * const eventWidget = createWidget(
 *   (context) => ["event", { dispatch(event) {} }],
 * )
 */
export function blueprint<T extends object>(schematic: T) {
  return <S extends Array<SlotFactory<any, any, T>>>(
    ...init: S
  ): Converge<T, S> => {
    const extenstion = Object.fromEntries(
      init.map((factory) => factory({ extendFrom: schematic })),
    ) as Converge<{}, S>;
    const xbase = Object.assign(Object.create(schematic), extenstion);
    return xbase as Converge<T, S>;
  };
}