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
]);

export default componentMap;
