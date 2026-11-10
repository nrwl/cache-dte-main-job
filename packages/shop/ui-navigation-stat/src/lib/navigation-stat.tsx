import { collectionText } from '@org/shop-util-collection-text';
import { storageName } from '@org/shop-util-storage-name';
import { FeedbackBadge } from '@org/shop-ui-feedback-badge';
import type { NavigationStatProps } from './navigation-stat.types';
import { resolveNavigationStatStyle } from './navigation-stat-variants';

export function NavigationStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-navigation-stat',
  onSelect,
  children,
}: NavigationStatProps) {
  const formatted = value === undefined ? '' : collectionText(value);
  const style = resolveNavigationStatStyle(tone, size);
  const ariaLabel = storageName(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-navigation-stat ui-element"
      data-testid={testId}
      data-tone={tone}
      data-size={size}
      style={style}
      aria-label={ariaLabel}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect ? handleClick : undefined}
    >
      <span className="ui-label">{label}</span>
      {formatted ? <span className="ui-value">{formatted}</span> : null}
      {children ? <div className="ui-content">{children}</div> : null}
      <FeedbackBadge
        label="Feedback Badge"
        value={value}
        tone={tone}
        size="sm"
      />
    </div>
  );
}

export default NavigationStat;
