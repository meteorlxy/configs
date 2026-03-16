export const interopDefault = async <
  T,
  Default extends T extends { default: infer U } ? U : T,
>(
  m: Promise<T>,
): Promise<Default> => {
  const resolved = await m;
  return ((resolved as { default?: Default }).default ?? resolved) as Default;
};
