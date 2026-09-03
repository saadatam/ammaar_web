import { useEffect, useState } from 'react';
import {
  isBatch4Authenticated,
  isPasscodeConfigured,
  verifyBatch4Passcode,
} from '../utils/batch4Auth';

export function useBatch4Auth() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const configured = isPasscodeConfigured();

  useEffect(() => {
    setAuthed(isBatch4Authenticated());
    setChecking(false);
  }, []);

  const login = async (passcode: string) => {
    const ok = await verifyBatch4Passcode(passcode);
    if (ok) setAuthed(true);
    return ok;
  };

  return { authed, checking, configured, login };
}
