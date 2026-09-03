import { useState } from 'react';
import { motion } from 'framer-motion';
import { isPasscodeConfigured } from '../../utils/batch4Auth';

type Props = {
  onSuccess: (passcode: string) => Promise<boolean>;
};

export default function Batch4PasscodeGate({ onSuccess }: Props) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const configured = isPasscodeConfigured();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const ok = await onSuccess(passcode);
    setLoading(false);
    if (!ok) setError('Incorrect passcode. Please try again.');
  };

  return (
    <div className="b4-page min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-xl border b4-border-accent-strong b4-bg-surface-solid p-8 shadow-xl"
      >
        <p className="b4-text-accent text-sm font-medium mb-1">Seekers Batch 4</p>
        <h1 className="text-2xl font-bold b4-text-heading mb-2">Enter passcode</h1>
        <p className="b4-text-muted text-sm mb-6">
          This page is for Batch 4 classmates. Access is remembered for 7 days on
          this browser.
        </p>

        {!configured && (
          <p className="text-sm mb-4 rounded-lg b4-warn-banner border px-3 py-2">
            Passcode not configured. Set{' '}
            <code className="opacity-90">VITE_BATCH4_PASSCODE_HASH</code> in{' '}
            <code className="opacity-90">.env</code> (SHA-256 of your passcode).
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Passcode"
            autoComplete="current-password"
            disabled={!configured}
            className="b4-input w-full rounded-lg border px-4 py-3 placeholder:b4-text-dim disabled:opacity-50"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={!configured || loading || !passcode}
            className="b4-btn-primary w-full rounded-lg py-3 font-semibold disabled:opacity-50 transition-colors"
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
