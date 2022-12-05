/* eslint-disable import/no-extraneous-dependencies */
// Specific setups that are runned before any test is executed.

import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
