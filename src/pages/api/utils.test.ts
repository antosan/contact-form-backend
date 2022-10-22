import { spinalCase } from './utils';

import { expect, test } from 'vitest';

test('spinalCase', () => {
  expect(spinalCase('Antony Sande')).toBe('antony-sande');
  expect(spinalCase('antony sande')).toBe('antony-sande');
  expect(spinalCase('Antony_Sande')).toBe('antony-sande');
  expect(spinalCase('antony_sande')).toBe('antony-sande');
  expect(spinalCase('AntonySande')).toBe('antony-sande');
  expect(spinalCase('antonysande')).toBe('antonysande');
});
