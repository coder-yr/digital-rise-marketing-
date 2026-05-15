const DEFAULT_API_URL = 'https://digitalrise-marketing-backend-3.onrender.com';
const LOCAL_API_URL = 'http://localhost:5000';

export function getApiBaseUrls() {
  const configured = process.env.NEXT_PUBLIC_API_URL;
  const urls = [configured || DEFAULT_API_URL];

  if (process.env.NODE_ENV !== 'production') {
    urls.push(LOCAL_API_URL);
  }

  return Array.from(new Set(urls.filter(Boolean)));
}

export async function fetchJsonWithFallback<T>(paths: string[]) {
  const timeoutMs = process.env.NODE_ENV === 'production' ? 8000 : 4000;

  for (const baseUrl of getApiBaseUrls()) {
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    for (const path of paths) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), timeoutMs);

        const res = await fetch(`${cleanBaseUrl}${path}`, {
          cache: 'no-store',
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) {
          continue;
        }

        return (await res.json()) as T;
      } catch {
        continue;
      }
    }
  }

  return null;
}