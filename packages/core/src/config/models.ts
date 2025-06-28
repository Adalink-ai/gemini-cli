/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEFAULT_GEMINI_MODEL = 'gemini-2.5-pro';
export const DEFAULT_GEMINI_FLASH_MODEL = 'gemini-2.5-flash';
export const DEFAULT_GEMINI_EMBEDDING_MODEL = 'gemini-embedding-001';

export const CUSTOM_MODELS = ['koder-pro', 'koder-flash'];
export const SUPPORTED_MODELS = [
  DEFAULT_GEMINI_MODEL,
  DEFAULT_GEMINI_FLASH_MODEL,
  ...CUSTOM_MODELS,
];
