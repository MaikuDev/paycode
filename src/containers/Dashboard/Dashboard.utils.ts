import { DiffPercentageType } from './Dashboard.types';

function getIncome(revenues: number[]): number {
  const income = revenues.reduce((a, b) => a + b, 0);

  return income;
}

function getDiffPercentage(current: number, prev: number): DiffPercentageType {
  const diff = prev - current;

  let percentage = Math.abs(diff) / (prev * 0.01);
  percentage = Math.round((percentage + Number.EPSILON) * 100) / 100;

  return {
    percentage,
    type: diff < 0 ? 'up' : 'down',
  };
}

export { getIncome, getDiffPercentage };
