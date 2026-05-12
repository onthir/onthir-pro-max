export const isExternal = (url: string | undefined | null): boolean =>
  !!url && /^https?:\/\//i.test(url);
