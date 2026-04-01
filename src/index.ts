import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

export interface OpenAICompatibleConfig {
  name?: string;
  apiKey: string;
  baseURL: string;
  fetch?: typeof globalThis.fetch;
  [key: string]: unknown;
}

export function createOpenAICompatibleProvider(config: OpenAICompatibleConfig) {
  const { name, apiKey, baseURL, fetch: customFetch, ...rest } = config;

  return createOpenAICompatible({
    name: name ?? 'openai-compatible',
    baseURL,
    apiKey,
    ...(customFetch ? { fetch: customFetch } : {}),
    ...rest,
  });
}

export default createOpenAICompatibleProvider;
export type { LanguageModel } from 'ai';
