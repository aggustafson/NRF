'use client';

import {
  Text as ContentSdkText,
  Link as ContentSdkLink,
  Field,
  LinkField,
  NextImage as ContentSdkImage,
  ImageField,
} from '@sitecore-content-sdk/nextjs';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

interface ProductFields {
  ProductName: Field<string>;
  Description: Field<string>;
  Price: Field<string>;
  Images?: Array<{ id: string; url: string }>;
  WarrantyLink: LinkField;
  ShippingLink: LinkField;
}

type ProductPageHeaderProps = {
  params: { [key: string]: string };
  fields: ProductFields;
};

const DICTIONARY_KEYS = {
  BUTTON_LABEL: 'Add_To_Cart',
};

export const Default = (props: ProductPageHeaderProps) => {
  const t = useTranslations();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = props.fields?.Images ?? [];
  const productImages = images.length === 2 ? [...images, ...images] : images;

  useEffect(() => {
    if (productImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [productImages.length]);

  return (
    <section
      className={`relative flex flex-col lg:justify-end lg:items-end lg:pt-12 lg:min-h-[50rem] overflow-hidden ${props.params?.styles}`}
      data-class-change
    >
      <div className="lg:absolute inset-0 z-10 h-128 lg:h-full">
        {productImages.length > 0 && (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${productImages[currentImageIndex]?.url})` }}
          >
            {productImages.length > 1 && (
              <div className="absolute bottom-6 lg:bottom-14 left-0 w-full lg:w-1/2 flex items-center justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
                  }
                  className="h-10 w-10 bg-secondary hover:bg-secondary-hover border-0"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % productImages.length)}
                  className="h-10 w-10 bg-secondary hover:bg-secondary-hover border-0"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-6 p-10 lg:w-1/3 lg:max-w-md bg-white z-20">
        {props.fields?.ProductName && (
          <h1 className="text-2xl">
            <ContentSdkText field={props.fields.ProductName} />
          </h1>
        )}
        {props.fields?.Description && (
          <p className="text-sm">
            <ContentSdkText field={props.fields.Description} />
          </p>
        )}
        {props.fields?.Price && (
          <p className="border-t border-b border-border font-(family-name:--font-accent) font-medium text-base py-6">
            <ContentSdkText field={props.fields.Price} />
          </p>
        )}

        <button className="btn btn-primary btn-sharp cursor-pointer">
          {t(DICTIONARY_KEYS.BUTTON_LABEL) || 'Add to cart'}
        </button>
        <div className="flex flex-col items-start gap-4 border-t border-border pt-6 text-sm">
          {props.fields?.WarrantyLink && (
            <ContentSdkLink
              field={props.fields.WarrantyLink}
              className="flex items-center gap-2"
              prefetch={false}
            >
              {props.fields.WarrantyLink?.value?.text}
              <span>→</span>
            </ContentSdkLink>
          )}
          {props.fields?.ShippingLink && (
            <ContentSdkLink
              field={props.fields.ShippingLink}
              className="flex items-center gap-2"
              prefetch={false}
            >
              {props.fields.ShippingLink?.value?.text}
              <span>→</span>
            </ContentSdkLink>
          )}
        </div>
      </div>
    </section>
  );
};

