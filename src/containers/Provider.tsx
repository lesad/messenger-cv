import React from 'react';
import { SWRConfig } from 'swr';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { RecoilRoot } from 'recoil';
import fetcher from '../core/api/fetcher'

setDefaultBreakpoints([{ mobile: 0 }, { desktop: 700 }]);

interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = ({ children }) => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher,
    }}
  >
    <RecoilRoot>
      <BreakpointProvider>{children}</BreakpointProvider>
    </RecoilRoot>
  </SWRConfig>
);

export default Provider;
