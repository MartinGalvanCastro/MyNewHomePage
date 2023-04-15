/* eslint-disable @typescript-eslint/no-empty-function */
import { afterEach, beforeAll, vi, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(()=>{
	cleanup();
	vi.clearAllMocks();
	vi.resetAllMocks();
});
beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: vi.fn().mockImplementation(query => ({
			matches: false,
			media: query,
			onchange: null,
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(),
		}))
	});
});