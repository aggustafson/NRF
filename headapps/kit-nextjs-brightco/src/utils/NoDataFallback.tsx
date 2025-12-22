import type { JSX } from 'react';

interface ComponentName {
  componentName: string;
}

const NoDataFallback = (props: ComponentName): JSX.Element => {
  const { componentName } = props;

  return (
    <div className={`component ${componentName.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase()}`}>
      <div className="component-content">
        <span className="is-empty-hint">
          {componentName} requires a datasource item assigned. Please assign a
          datasource item to edit the content.
        </span>
      </div>
    </div>
  );
};

export { NoDataFallback };

