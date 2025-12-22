import {
  RichText as ContentSdkRichText,
  Text as ContentSdkText,
  Link as ContentSdkLink,
  Field,
  RichTextField,
  LinkField,
  AppPlaceholder,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import componentMap from '.sitecore/component-map';

interface Fields {
  Title: Field<string>;
  CopyrightText: RichTextField;
  FacebookLink: LinkField;
  InstagramLink: LinkField;
  LinkedinLink: LinkField;
}

type FooterSTProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterSTProps) => {
  return (
    <section
      className={`relative bg-primary pt-16 lg:pt-30 pb-8 bg-cover bg-center ${props.params.styles}`}
      style={{ backgroundImage: 'url("/footer-texture.webp")' }}
      data-class-change
    >
      <div className="container mx-auto px-4">
        {props.fields?.Title && (
          <h2 className="text-4xl lg:text-7xl mb-10 lg:mb-20 uppercase">
            <ContentSdkText field={props.fields.Title} />
          </h2>
        )}
        <div className="max-w-5xl mx-auto mb-6 lg:mb-12 font-(family-name:--font-heading) text-2xl uppercase">
          <AppPlaceholder
            name={`footer-primary-links-${props.params.DynamicPlaceholderId}`}
            rendering={props.rendering}
            page={props.page}
            componentMap={componentMap}
          />
        </div>
        <div className="max-w-5xl mx-auto font-(family-name:--font-accent) font-medium">
          <AppPlaceholder
            name={`footer-secondary-links-${props.params.DynamicPlaceholderId}`}
            rendering={props.rendering}
            page={props.page}
            componentMap={componentMap}
          />
        </div>
      </div>
      <div className="h-20 lg:h-40 bg-sound-waves bg-contain bg-repeat bg-center my-12 lg:my-16"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between">
          <div className="flex justify-center gap-4">
            {props.fields?.FacebookLink && (
              <ContentSdkLink
                field={props.fields.FacebookLink}
                prefetch={false}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </ContentSdkLink>
            )}
            {props.fields?.InstagramLink && (
              <ContentSdkLink
                field={props.fields.InstagramLink}
                prefetch={false}
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </ContentSdkLink>
            )}
            {props.fields?.LinkedinLink && (
              <ContentSdkLink
                field={props.fields.LinkedinLink}
                prefetch={false}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </ContentSdkLink>
            )}
          </div>
          <div>
            {props.fields?.CopyrightText && (
              <ContentSdkRichText field={props.fields.CopyrightText} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const LogoLeft = (props: FooterSTProps) => {
  return (
    <section
      className={`relative bg-primary pt-16 lg:pt-30 bg-cover bg-center ${props.params.styles}`}
      style={{ backgroundImage: 'url("/footer-texture.webp")' }}
      data-class-change
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2">
          {props.fields?.Title && (
            <h2 className="text-4xl lg:text-7xl mb-10 lg:mb-0 uppercase">
              <ContentSdkText field={props.fields.Title} />
            </h2>
          )}
          <div className="lg:flex justify-end items-start gap-12">
            <div className="mb-6 lg:mb-0 font-(family-name:--font-heading) uppercase text-2xl">
              <AppPlaceholder
                name={`footer-primary-links-${props.params.DynamicPlaceholderId}`}
                rendering={props.rendering}
                page={props.page}
                componentMap={componentMap}
              />
            </div>
            <div className="font-(family-name:--font-accent) font-medium">
              <AppPlaceholder
                name={`footer-secondary-links-${props.params.DynamicPlaceholderId}`}
                rendering={props.rendering}
                page={props.page}
                componentMap={componentMap}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between mt-8">
          <div className="flex justify-center gap-4">
            {props.fields?.FacebookLink && (
              <ContentSdkLink
                field={props.fields.FacebookLink}
                prefetch={false}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </ContentSdkLink>
            )}
            {props.fields?.InstagramLink && (
              <ContentSdkLink
                field={props.fields.InstagramLink}
                prefetch={false}
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </ContentSdkLink>
            )}
            {props.fields?.LinkedinLink && (
              <ContentSdkLink
                field={props.fields.LinkedinLink}
                prefetch={false}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </ContentSdkLink>
            )}
          </div>
          <div>
            {props.fields?.CopyrightText && (
              <ContentSdkRichText field={props.fields.CopyrightText} />
            )}
          </div>
        </div>
      </div>
      <div className="h-10 lg:h-20 bg-sound-waves bg-[length:auto_200%] bg-repeat bg-top bg-center-x mt-12 lg:mt-16"></div>
    </section>
  );
};

export const LogoRight = (props: FooterSTProps) => {
  return (
    <section
      className={`relative bg-primary pb-8 bg-cover bg-center ${props.params.styles}`}
      style={{ backgroundImage: 'url("/footer-texture.webp")' }}
      data-class-change
    >
      <div className="h-10 lg:h-20 bg-sound-waves bg-[length:auto_200%] bg-repeat bg-bottom bg-center-x mb-12 lg:mb-16"></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2">
          {props.fields?.Title && (
            <h2 className="lg:order-2 text-4xl lg:text-7xl mb-10 lg:mb-0 lg:text-right uppercase">
              <ContentSdkText field={props.fields.Title} />
            </h2>
          )}
          <div className="lg:flex items-start gap-12">
            <div className="mb-6 lg:mb-0 font-(family-name:--font-heading) uppercase text-2xl">
              <AppPlaceholder
                name={`footer-primary-links-${props.params.DynamicPlaceholderId}`}
                rendering={props.rendering}
                page={props.page}
                componentMap={componentMap}
              />
            </div>
            <div className="font-(family-name:--font-accent) font-medium">
              <AppPlaceholder
                name={`footer-secondary-links-${props.params.DynamicPlaceholderId}`}
                rendering={props.rendering}
                page={props.page}
                componentMap={componentMap}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between mt-8">
          <div className="flex justify-center gap-4">
            {props.fields?.FacebookLink && (
              <ContentSdkLink
                field={props.fields.FacebookLink}
                prefetch={false}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </ContentSdkLink>
            )}
            {props.fields?.InstagramLink && (
              <ContentSdkLink
                field={props.fields.InstagramLink}
                prefetch={false}
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </ContentSdkLink>
            )}
            {props.fields?.LinkedinLink && (
              <ContentSdkLink
                field={props.fields.LinkedinLink}
                prefetch={false}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </ContentSdkLink>
            )}
          </div>
          <div>
            {props.fields?.CopyrightText && (
              <ContentSdkRichText field={props.fields.CopyrightText} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Centered = (props: FooterSTProps) => {
  return (
    <section
      className={`relative bg-primary py-8 lg:py-20 bg-cover bg-center ${props.params.styles}`}
      style={{ backgroundImage: 'url("/footer-texture.webp")' }}
      data-class-change
    >
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-20 lg:h-40 bg-sound-waves bg-contain bg-repeat bg-center filter invert opacity-75 z-10"></div>
      <div className="relative container mx-auto px-4 z-20">
        <div className="grid lg:grid-cols-3 lg:gap-4">
          {props.fields?.Title && (
            <h2 className="text-4xl lg:text-5xl mb-10 lg:mb-0 uppercase">
              <ContentSdkText field={props.fields.Title} />
            </h2>
          )}
          <div>
            <div className="mb-6 lg:mb-12 font-(family-name:--font-heading) uppercase text-2xl">
              <AppPlaceholder
                name={`footer-primary-links-${props.params.DynamicPlaceholderId}`}
                rendering={props.rendering}
                page={props.page}
                componentMap={componentMap}
              />
            </div>
            <div className="font-(family-name:--font-accent) font-medium">
              <AppPlaceholder
                name={`footer-secondary-links-${props.params.DynamicPlaceholderId}`}
                rendering={props.rendering}
                page={props.page}
                componentMap={componentMap}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-end lg:self-end mt-8">
            <div className="flex justify-center gap-4">
              {props.fields?.FacebookLink && (
                <ContentSdkLink
                  field={props.fields.FacebookLink}
                  prefetch={false}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </ContentSdkLink>
              )}
              {props.fields?.InstagramLink && (
                <ContentSdkLink
                  field={props.fields.InstagramLink}
                  prefetch={false}
                  aria-label="Instagram"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </ContentSdkLink>
              )}
              {props.fields?.LinkedinLink && (
                <ContentSdkLink
                  field={props.fields.LinkedinLink}
                  prefetch={false}
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </ContentSdkLink>
              )}
            </div>
            <div>
              {props.fields?.CopyrightText && (
                <ContentSdkRichText field={props.fields.CopyrightText} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

