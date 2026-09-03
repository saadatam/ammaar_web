const AUTH_STORAGE_KEY = 'batch4_auth_v1';
const AUTH_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

type AuthRecord = {
  expiresAt: number;
  token: string;
};

async function sha256(message: string): Promise<string> {
  const data = new TextEncoder().encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function getExpectedPasscodeHash(): string | undefined {
  return import.meta.env.VITE_BATCH4_PASSCODE_HASH?.trim() || undefined;
}

export function isBatch4Authenticated(): boolean {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return false;
    const record: AuthRecord = JSON.parse(raw);
    return record.expiresAt > Date.now();
  } catch {
    return false;
  }
}

export function clearBatch4Auth(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export async function verifyBatch4Passcode(input: string): Promise<boolean> {
  const expected = getExpectedPasscodeHash();
  if (!expected) return false;

  const hash = await sha256(input.trim());
  if (hash !== expected.toLowerCase()) return false;

  const record: AuthRecord = {
    expiresAt: Date.now() + AUTH_TTL_MS,
    token: crypto.randomUUID(),
  };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(record));
  return true;
}

export function isPasscodeConfigured(): boolean {
  return Boolean(getExpectedPasscodeHash());
}
