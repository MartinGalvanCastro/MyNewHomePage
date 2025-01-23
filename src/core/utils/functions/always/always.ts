/**
 * Creates gunction that always resolves void
 * @returns Function that always resolves void
 */
function resolve(): () => Promise<void>;

/**
 * Creates function that always resolves a value
 * @param function result Value to resolve
 */
function resolve<T>(result: T): () => Promise<T>;

function resolve<T>(result?: T): () => Promise<T | void> {
  return () => Promise.resolve(result);
}

export interface Always {
  void: () => () => void;
  result: <T>(value: T) => () => T;
  resolve: typeof resolve;
  reject: (error?: Error) => () => Promise<never>;
}

export const always: Always = {
  void: () => () => {},
  result: (value) => () => value,
  resolve,
  reject: (error) => () => Promise.reject(error ?? new Error("Rejected")),
};
