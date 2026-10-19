/**
 * Motoryat V2 — opt-in, server-side, read-only Supabase transport.
 *
 * Does not run unless explicitly imported and MOTORYAT_DATA_SOURCE=supabase.
 * NEVER expose a service-role or secret key in NEXT_PUBLIC_* variables.
 * This transport does not modify the existing demo data or routes.
 *
 * Set MOTORYAT_SUPABASE_URL and MOTORYAT_SUPABASE_ANON_KEY on the
 * application server after HTTP 402 restriction is resolved and public
 * read-only RLS policies have been reviewed.
 */
import 'server-only';

const allowedSchemas = new Set([
  'catalog', 'companies', 'content', 'geo', 'marketplace',
  'products', 'stores'
]);

export function isSupabaseDataEnabled() {
  return process.env.MOTORYAT_DATA_SOURCE === 'supabase';
}

export class SupabaseReadError extends Error {
  constructor(status, description) {
    super(`Supabase REST read failed (${status}): ${description}`);
    this.name = 'SupabaseReadError';
    this.status = status;
  }
}

/**
 * Read a page from an explicitly named schema/table.
 * All input filters should come from server-owned code, not raw user text.
 *
 * Usage:
 *   await readSupabasePage({schema:'stores', table:'stores',
 *     select:'id,canonical_name,status', limit:100, offset:0});
 */
export async function readSupabasePage({
  schema, table, select = '*', limit = 100, offset = 0, filters = {}
}) {
  if (!isSupabaseDataEnabled()) {
    throw new Error('Supabase reads are disabled. Use demo data until activation.');
  }
  const base = process.env.MOTORYAT_SUPABASE_URL;
  const anonKey = process.env.MOTORYAT_SUPABASE_ANON_KEY;
  if (!base || !anonKey) {
    throw new Error('Missing server-side Supabase configuration.');
  }
  if (!allowedSchemas.has(schema) || !/^[a-z][a-z0-9_]*$/.test(table)) {
    throw new Error('Unrecognized Supabase schema or table.');
  }
  if (!Number.isInteger(limit) || limit < 1 || limit > 500 ||
      !Number.isInteger(offset) || offset < 0) {
    throw new Error('Invalid pagination settings.');
  }
  const params = new URLSearchParams({
    select, limit: String(limit), offset: String(offset)
  });
  for (const [key, value] of Object.entries(filters)) {
    if (!/^[a-z][a-z0-9_]*$/.test(key) || typeof value !== 'string') {
      throw new Error('Invalid server-defined filter.');
    }
    params.set(key, value);
  }
  const url = `${base.replace(/\/$/, '')}/rest/v1/${table}?${params}`;
  const response = await fetch(url, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      'Accept-Profile': schema
    },
    cache: 'no-store'
  });
  if (!response.ok) {
    const body = (await response.text()).slice(0, 250);
    throw new SupabaseReadError(response.status, body);
  }
  return response.json();
}
