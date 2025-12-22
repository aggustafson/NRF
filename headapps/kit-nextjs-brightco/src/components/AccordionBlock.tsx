'use client';

import {
  Link as ContentSdkLink,
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  Field,
  RichTextField,
  LinkField,
} from '@sitecore-content-sdk/nextjs';
import { useMemo, useState } from 'react';

interface AccordionItemFields {
  id: string;
  heading?: Field<string>;
  description?: RichTextField;
}

interface Fields {
  data: {
    datasource: {
      heading?: Field<string>;
      description?: Field<string>;
      link?: LinkField;
      children: {
        results: AccordionItemFields[];
      };
    };
  };
}

type AccordionProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AccordionBlockItem = (props: AccordionItemFields & { isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-border mb-10">
      <button
        onClick={props.onToggle}
        className="w-full text-left flex justify-between items-center py-4"
      >
        {props.heading && (
          <h5 className="text-base">
            <ContentSdkText field={props.heading} />
          </h5>
        )}
        <span>{props.isOpen ? '−' : '+'}</span>
      </button>
      {props.isOpen && props.description && (
        <div className="pb-4">
          <ContentSdkRichText field={props.description} />
        </div>
      )}
    </div>
  );
};

export const Default = (props: AccordionProps) => {
  const datasource = useMemo(() => props.fields?.data?.datasource, [props.fields?.data?.datasource]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className={`relative py-20 overflow-hidden ${props.params.styles}`} data-class-change>
      <span className="absolute top-1/3 -left-1/3 w-screen h-64 bg-primary opacity-50 blur-[400px] rotate-15 z-10"></span>
      <div className="relative container mx-auto px-4 z-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {datasource?.heading && (
            <h2 className="text-2xl lg:text-5xl">
              <ContentSdkText field={datasource.heading} />
            </h2>
          )}
          <div>
            <div className="w-full mb-12">
              {datasource?.children?.results?.map((item) => (
                <AccordionBlockItem
                  key={item.id}
                  {...item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              )) || []}
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 self-center lg:col-start-2 p-5 bg-primary">
              {datasource?.description && (
                <h6 className="text-sm">
                  <ContentSdkText field={datasource.description} />
                </h6>
              )}
              {datasource?.link && (
                <ContentSdkLink
                  field={datasource.link}
                  prefetch={false}
                  className="btn btn-secondary btn-sharp"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TwoColumn = (props: AccordionProps) => {
  const datasource = useMemo(() => props.fields?.data?.datasource, [props.fields?.data?.datasource]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className={`relative py-20 overflow-hidden ${props.params.styles}`} data-class-change>
      <span className="absolute top-1/3 -left-1/3 w-screen h-64 bg-primary opacity-50 blur-[400px] rotate-15 z-10"></span>
      <div className="relative container mx-auto px-4 z-20">
        {datasource?.heading && (
          <h2 className="text-2xl lg:text-5xl">
            <ContentSdkText field={datasource.heading} />
          </h2>
        )}
        <div className="w-full grid lg:grid-cols-2 gap-x-12 my-12">
          {datasource?.children?.results?.map((item) => (
            <AccordionBlockItem
              key={item.id}
              {...item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          )) || []}
        </div>
        <div className="grid lg:grid-cols-2 gap-x-12">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 self-center lg:col-start-2 p-5 bg-primary">
            {datasource?.description && (
              <h6 className="text-sm">
                <ContentSdkText field={datasource.description} />
              </h6>
            )}
            {datasource?.link && (
              <ContentSdkLink
                field={datasource.link}
                prefetch={false}
                className="btn btn-secondary btn-sharp"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Vertical = (props: AccordionProps) => {
  const datasource = useMemo(() => props.fields?.data?.datasource, [props.fields?.data?.datasource]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className={`relative py-20 overflow-hidden ${props.params.styles}`} data-class-change>
      <span className="absolute -top-20 w-screen h-64 bg-primary opacity-50 blur-[400px] z-10"></span>
      <div className="relative container mx-auto px-4 z-20">
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          {datasource?.heading && (
            <h2 className="text-2xl lg:text-5xl text-center">
              <ContentSdkText field={datasource.heading} />
            </h2>
          )}
          <div className="w-full">
            {datasource?.children?.results?.map((item) => (
              <AccordionBlockItem
                key={item.id}
                {...item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            )) || []}
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 self-center lg:col-start-2 p-5 bg-primary">
            {datasource?.description && (
              <h6 className="text-sm">
                <ContentSdkText field={datasource.description} />
              </h6>
            )}
            {datasource?.link && (
              <ContentSdkLink
                field={datasource.link}
                prefetch={false}
                className="btn btn-secondary btn-sharp"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const BoxedAccordion = (props: AccordionProps) => {
  const datasource = useMemo(() => props.fields?.data?.datasource, [props.fields?.data?.datasource]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className={`bg-primary py-20 ${props.params.styles}`} data-class-change>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {datasource?.heading && (
            <h2 className="text-2xl lg:text-5xl">
              <ContentSdkText field={datasource.heading} />
            </h2>
          )}
        </div>
        <div className="flex flex-col gap-12 max-w-3xl mx-auto bg-white p-4 lg:p-12 mt-12 shadow-2xl">
          <div className="w-full">
            {datasource?.children?.results?.map((item) => (
              <AccordionBlockItem
                key={item.id}
                {...item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            )) || []}
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 self-center lg:col-start-2 p-5 bg-primary">
            {datasource?.description && (
              <h6 className="text-sm">
                <ContentSdkText field={datasource.description} />
              </h6>
            )}
            {datasource?.link && (
              <ContentSdkLink
                field={datasource.link}
                prefetch={false}
                className="btn btn-secondary btn-sharp"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const BoxedContent = (props: AccordionProps) => {
  const datasource = useMemo(() => props.fields?.data?.datasource, [props.fields?.data?.datasource]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className={`bg-gradient py-20 ${props.params.styles}`} data-class-change>
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 lg:p-12 shadow-2xl">
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {datasource?.heading && (
              <h2 className="text-2xl lg:text-5xl max-w-2xl">
                <ContentSdkText field={datasource.heading} />
              </h2>
            )}
            <div className="w-full">
              {datasource?.children?.results?.map((item) => (
                <AccordionBlockItem
                  key={item.id}
                  {...item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              )) || []}
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 self-center lg:col-start-2 p-5 bg-primary">
              {datasource?.description && (
                <h6 className="text-sm">
                  <ContentSdkText field={datasource.description} />
                </h6>
              )}
              {datasource?.link && (
                <ContentSdkLink
                  field={datasource.link}
                  prefetch={false}
                  className="btn btn-secondary btn-sharp"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

