import * as React from 'react';

export const translateContext = React.createContext<{t:(key:string) => string}>({} as any);
