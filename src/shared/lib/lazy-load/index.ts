import React from 'react';

export const namedLazy = <T extends Record<string, any>>(
  loader: () => Promise<T>,
  name: keyof T
): React.LazyExoticComponent<T[keyof T]> => React.lazy(async () => {
    const module = await loader();
    return { default: module[name] };
  });
