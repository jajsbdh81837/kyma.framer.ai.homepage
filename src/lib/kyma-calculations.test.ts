import { describe, expect, it } from 'vitest';
import { annualManualCost, planPrice } from './kyma-calculations';
describe('Reference calculator', () => {
 it('returns the reference default annual cost with overhead', () => expect(annualManualCost(10,20,30,true)).toBe(421200));
 it('excludes overhead when switched off', () => expect(annualManualCost(10,20,30,false)).toBe(312000));
 it('applies the displayed annual discount', () => expect(planPrice(2500,true)).toBe(2000));
 it('preserves the monthly price', () => expect(planPrice(499,false)).toBe(499));
});