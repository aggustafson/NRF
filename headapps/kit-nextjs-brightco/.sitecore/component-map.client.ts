// Client-safe component map for App Router

import { BYOCClientWrapper, NextjsContentSdkComponent, FEaaSClientWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

import * as TextSlider from 'src/components/TextSlider';
import * as ProductPageHeader from 'src/components/ProductPageHeader';
import * as ProductComparison from 'src/components/ProductComparison';
import * as MultiPromo from 'src/components/MultiPromo';
import * as HeroST from 'src/components/HeroST';
import * as FeatureBanner from 'src/components/FeatureBanner';
import * as AccordionBlock from 'src/components/AccordionBlock';
import * as LinkList from 'src/components/sxa/LinkList';
import * as MobileMenuWrapper from 'src/components/site-three/MobileMenuWrapper';
import * as MegaMenuItemWrapper from 'src/components/site-three/MegaMenuItemWrapper';
import * as SearchBox from 'src/components/site-three/non-sitecore/SearchBox';
import * as MiniCart from 'src/components/site-three/non-sitecore/MiniCart';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCClientWrapper],
  ['FEaaSWrapper', FEaaSClientWrapper],
  ['Form', Form],
  ['TextSlider', { ...TextSlider }],
  ['ProductPageHeader', { ...ProductPageHeader }],
  ['ProductComparison', { ...ProductComparison }],
  ['MultiPromo', { ...MultiPromo }],
  ['HeroST', { ...HeroST }],
  ['FeatureBanner', { ...FeatureBanner }],
  ['AccordionBlock', { ...AccordionBlock }],
  ['LinkList', { ...LinkList }],
  ['MobileMenuWrapper', { ...MobileMenuWrapper }],
  ['MegaMenuItemWrapper', { ...MegaMenuItemWrapper }],
  ['SearchBox', { ...SearchBox }],
  ['MiniCart', { ...MiniCart }],
]);

export default componentMap;
