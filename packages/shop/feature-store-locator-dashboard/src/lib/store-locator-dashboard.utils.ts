import { mathName } from '@org/shop-util-math-name';
import { storageText } from '@org/shop-util-storage-text';
import {
  emptyStoreLocatorDashboardTotals,
  type StoreLocatorDashboardItem,
  type StoreLocatorDashboardStatus,
  type StoreLocatorDashboardTotals,
} from './store-locator-dashboard.model';

export type StoreLocatorDashboardSortKey =
  'name' | 'amount' | 'quantity' | 'createdAt';

export function totalStoreLocatorDashboard(
  items: ReadonlyArray<StoreLocatorDashboardItem>,
): StoreLocatorDashboardTotals {
  const totals = emptyStoreLocatorDashboardTotals();
  for (const item of items) {
    totals.amount += item.amount;
    totals.quantity += item.quantity;
    totals[item.status] += 1;
  }
  return totals;
}

export function groupStoreLocatorDashboardByStatus(
  items: ReadonlyArray<StoreLocatorDashboardItem>,
): Record<StoreLocatorDashboardStatus, StoreLocatorDashboardItem[]> {
  const grouped: Record<
    StoreLocatorDashboardStatus,
    StoreLocatorDashboardItem[]
  > = {
    active: [],
    pending: [],
    archived: [],
  };
  for (const item of items) {
    grouped[item.status].push(item);
  }
  return grouped;
}

export function filterStoreLocatorDashboard(
  items: ReadonlyArray<StoreLocatorDashboardItem>,
  query: string,
): StoreLocatorDashboardItem[] {
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

export function sortStoreLocatorDashboard(
  items: ReadonlyArray<StoreLocatorDashboardItem>,
  key: StoreLocatorDashboardSortKey,
  direction: 'asc' | 'desc' = 'asc',
): StoreLocatorDashboardItem[] {
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

export function describeStoreLocatorDashboardItem(
  item: StoreLocatorDashboardItem,
): string {
  const amount = mathName(item.amount);
  const name = storageText(item.name);
  return `${name} · ${amount} · ${item.quantity} pcs · ${item.status}`;
}

export function formatStoreLocatorDashboardAmount(amount: number): string {
  return mathName(amount);
}

export function storeLocatorDashboardStatusTone(
  status: StoreLocatorDashboardStatus,
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

export function pickStoreLocatorDashboardHighlights(
  items: ReadonlyArray<StoreLocatorDashboardItem>,
  limit = 3,
): StoreLocatorDashboardItem[] {
  return sortStoreLocatorDashboard(items, 'amount', 'desc').slice(
    0,
    Math.max(0, limit),
  );
}
