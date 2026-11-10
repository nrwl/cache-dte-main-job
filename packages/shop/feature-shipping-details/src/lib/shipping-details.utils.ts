import { mathNumber } from '@org/shop-util-math-number';
import { validateNumber } from '@org/shop-util-validate-number';
import { validateName } from '@org/shop-util-validate-name';
import {
  emptyShippingDetailsTotals,
  type ShippingDetailsItem,
  type ShippingDetailsStatus,
  type ShippingDetailsTotals,
} from './shipping-details.model';

export type ShippingDetailsSortKey =
  'name' | 'amount' | 'quantity' | 'createdAt';

export function totalShippingDetails(
  items: ReadonlyArray<ShippingDetailsItem>,
): ShippingDetailsTotals {
  const totals = emptyShippingDetailsTotals();
  for (const item of items) {
    totals.amount += item.amount;
    totals.quantity += item.quantity;
    totals[item.status] += 1;
  }
  return totals;
}

export function groupShippingDetailsByStatus(
  items: ReadonlyArray<ShippingDetailsItem>,
): Record<ShippingDetailsStatus, ShippingDetailsItem[]> {
  const grouped: Record<ShippingDetailsStatus, ShippingDetailsItem[]> = {
    active: [],
    pending: [],
    archived: [],
  };
  for (const item of items) {
    grouped[item.status].push(item);
  }
  return grouped;
}

export function filterShippingDetails(
  items: ReadonlyArray<ShippingDetailsItem>,
  query: string,
): ShippingDetailsItem[] {
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

export function sortShippingDetails(
  items: ReadonlyArray<ShippingDetailsItem>,
  key: ShippingDetailsSortKey,
  direction: 'asc' | 'desc' = 'asc',
): ShippingDetailsItem[] {
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

export function describeShippingDetailsItem(item: ShippingDetailsItem): string {
  const amount = mathNumber(item.amount);
  const name = validateName(validateNumber(item.name));
  return `${name} · ${amount} · ${item.quantity} pcs · ${item.status}`;
}

export function formatShippingDetailsAmount(amount: number): string {
  return mathNumber(amount);
}

export function shippingDetailsStatusTone(
  status: ShippingDetailsStatus,
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

export function pickShippingDetailsHighlights(
  items: ReadonlyArray<ShippingDetailsItem>,
  limit = 3,
): ShippingDetailsItem[] {
  return sortShippingDetails(items, 'amount', 'desc').slice(
    0,
    Math.max(0, limit),
  );
}
