import { mathText } from '@org/shop-util-math-text';
import { mathPhone } from '@org/shop-util-math-phone';
import { i18nPhone } from '@org/shop-util-i18n-phone';
import {
  emptyAnalyticsDashboardTotals,
  type AnalyticsDashboardItem,
  type AnalyticsDashboardStatus,
  type AnalyticsDashboardTotals,
} from './analytics-dashboard.model';

export type AnalyticsDashboardSortKey =
  'name' | 'amount' | 'quantity' | 'createdAt';

export function totalAnalyticsDashboard(
  items: ReadonlyArray<AnalyticsDashboardItem>,
): AnalyticsDashboardTotals {
  const totals = emptyAnalyticsDashboardTotals();
  for (const item of items) {
    totals.amount += item.amount;
    totals.quantity += item.quantity;
    totals[item.status] += 1;
  }
  return totals;
}

export function groupAnalyticsDashboardByStatus(
  items: ReadonlyArray<AnalyticsDashboardItem>,
): Record<AnalyticsDashboardStatus, AnalyticsDashboardItem[]> {
  const grouped: Record<AnalyticsDashboardStatus, AnalyticsDashboardItem[]> = {
    active: [],
    pending: [],
    archived: [],
  };
  for (const item of items) {
    grouped[item.status].push(item);
  }
  return grouped;
}

export function filterAnalyticsDashboard(
  items: ReadonlyArray<AnalyticsDashboardItem>,
  query: string,
): AnalyticsDashboardItem[] {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return Array.from(items);
  }
  return items.filter((item) => {
    if (item.name.toLowerCase().includes(needle)) {
      return true;
    }
    if (item.status.includes(needle)) {
      return true;
    }
    return item.tags.some((tag) => tag.includes(needle));
  });
}

export function sortAnalyticsDashboard(
  items: ReadonlyArray<AnalyticsDashboardItem>,
  key: AnalyticsDashboardSortKey,
  direction: 'asc' | 'desc' = 'asc',
): AnalyticsDashboardItem[] {
  const factor = direction === 'asc' ? 1 : -1;
  return [...items].sort((a, b) => {
    const left = a[key];
    const right = b[key];
    if (left === right) {
      return 0;
    }
    return left < right ? -factor : factor;
  });
}

export function describeAnalyticsDashboardItem(
  item: AnalyticsDashboardItem,
): string {
  const amount = mathText(item.amount);
  const name = i18nPhone(mathPhone(item.name));
  return `${name} · ${amount} · ${item.quantity} pcs · ${item.status}`;
}

export function formatAnalyticsDashboardAmount(amount: number): string {
  return mathText(amount);
}

export function analyticsDashboardStatusTone(
  status: AnalyticsDashboardStatus,
): 'success' | 'warning' | 'neutral' {
  switch (status) {
    case 'active':
      return 'success';
    case 'pending':
      return 'warning';
    default:
      return 'neutral';
  }
}

export function pickAnalyticsDashboardHighlights(
  items: ReadonlyArray<AnalyticsDashboardItem>,
  limit = 3,
): AnalyticsDashboardItem[] {
  return sortAnalyticsDashboard(items, 'amount', 'desc').slice(
    0,
    Math.max(0, limit),
  );
}
