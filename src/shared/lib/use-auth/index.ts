import { ConnectorNames } from 'shared/config/wallet';
import { useCallback } from 'react';
import {
  useConnect,
  useDisconnect
} from 'wagmi';

const useAuth = () => {
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const login = useCallback(async (connectorID: ConnectorNames) => {
    const findConnector = connectors.find((c) => c.id === connectorID);
    try {
      return await connectAsync({ connector: findConnector });
    } catch (error) {
      console.error(error);
    }
    return undefined;
  }, [connectors, connectAsync]);

  const logout = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error(error);
    }
  }, [disconnectAsync]);

  return { login, logout };
};

export default useAuth;
