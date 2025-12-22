'use client';

import {
  Text as ContentSdkText,
  NextImage as ContentSdkImage,
  Field,
  ImageField,
} from '@sitecore-content-sdk/nextjs';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo, useState } from 'react';

interface ProductFields {
  id: string;
  url: string;
  fields: {
    ProductName: Field<string>;
    Price: Field<string>;
    ProductImage: ImageField;
    AmpPower: Field<string>;
    Specifications?: Array<{ name: string; displayName: string }>;
  };
}

interface Fields {
  Title: Field<string>;
  id: string;
  url: string;
  Products: ProductFields[];
}

type ProductComparisonProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DICTIONARY_KEYS = {
  BUTTON_LABEL: 'Buy_Now',
};

export const Default = (props: ProductComparisonProps) => {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = props.fields?.Products || [];

  return (
    <section className={`relative ${props.params?.styles}`} data-class-change>
      <div className="container mx-auto px-4">
        {props.fields?.Title && (
          <h2 className="max-w-3xl mx-auto text-center text-2xl lg:text-5xl uppercase mb-16">
            <ContentSdkText field={props.fields.Title} />
          </h2>
        )}

        <div className="relative text-center">
          {products.length > 0 && (
            <div className="grid gap-4">
              <div className="px-10">
                <ContentSdkImage
                  field={products[currentIndex]?.fields?.ProductImage}
                  className="aspect-square w-full h-full object-contain max-w-2xs mx-auto"
                />
              </div>
              {products[currentIndex]?.fields?.ProductName && (
                <h5 className="text-xl lg:text-2xl mt-8 mb-3">
                  <ContentSdkText field={products[currentIndex].fields.ProductName} />
                </h5>
              )}
              {products[currentIndex]?.fields?.Price && (
                <p className="text-xl lg:text-2xl">
                  <ContentSdkText field={products[currentIndex].fields.Price} />
                </p>
              )}
              {props.params.showButton && (
                <Link
                  href={products[currentIndex]?.url || '#'}
                  className="btn btn-primary mt-3 justify-self-center"
                >
                  {t(DICTIONARY_KEYS.BUTTON_LABEL) || 'Buy Now'}
                </Link>
              )}
              <hr className="border-border my-10"></hr>
              {products[currentIndex]?.fields?.AmpPower && (
                <p className="text-lg lg:text-xl font-medium">
                  <ContentSdkText field={products[currentIndex].fields.AmpPower} />
                </p>
              )}
              {products[currentIndex]?.fields?.Specifications?.map((spec, idx) => (
                <p key={`${products[currentIndex].id}${idx}`} className="text-sm lg:text-base">
                  {spec.displayName || spec.name}
                </p>
              ))}
            </div>
          )}
          {products.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)}
                className="h-10 w-10 bg-secondary hover:bg-secondary-hover border-0"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)}
                className="h-10 w-10 bg-secondary hover:bg-secondary-hover border-0"
                aria-label="Next"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

