export function annualManualCost(employees: number, hours: number, hourlyCost: number, overhead: boolean) {
 return Math.round(Math.max(0, employees) * Math.max(0, hours) * Math.max(0, hourlyCost) * 52 * (overhead ? 1.35 : 1));
}
export function planPrice(monthly: number, annual: boolean) { return annual ? Math.round(monthly * 0.8) : monthly; }