// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCServerWrapper, NextjsContentSdkComponent, FEaaSServerWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as Video from 'src/components/Video';
import * as TextSlider from 'src/components/TextSlider';
import * as SignupBanner from 'src/components/SignupBanner';
import * as ProductPageHeader from 'src/components/ProductPageHeader';
import * as ProductComparison from 'src/components/ProductComparison';
import * as PageHeaderST from 'src/components/PageHeaderST';
import * as MultiPromo from 'src/components/MultiPromo';
import * as ImageBanner from 'src/components/ImageBanner';
import * as HeroST from 'src/components/HeroST';
import * as HeaderST from 'src/components/HeaderST';
import * as FooterST from 'src/components/FooterST';
import * as FeatureBanner from 'src/components/FeatureBanner';
import * as AccordionBlock from 'src/components/AccordionBlock';
import * as input from 'src/components/ui/input';
import * as button from 'src/components/ui/button';
import * as LinkList from 'src/components/sxa/LinkList';
import * as Container from 'src/components/sxa/Container';
import * as MobileMenuWrapper from 'src/components/site-three/MobileMenuWrapper';
import * as MegaMenuItemWrapper from 'src/components/site-three/MegaMenuItemWrapper';
import * as MegaMenuItem from 'src/components/site-three/MegaMenuItem';
import * as SearchBox from 'src/components/site-three/non-sitecore/SearchBox';
import * as MiniCart from 'src/components/site-three/non-sitecore/MiniCart';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCServerWrapper],
  ['FEaaSWrapper', FEaaSServerWrapper],
  ['Form', Form],
  ['Video', { ...Video }],
  ['TextSlider', { ...TextSlider, componentType: 'client' }],
  ['SignupBanner', { ...SignupBanner }],
  ['ProductPageHeader', { ...ProductPageHeader, componentType: 'client' }],
  ['ProductComparison', { ...ProductComparison, componentType: 'client' }],
  ['PageHeaderST', { ...PageHeaderST }],
  ['MultiPromo', { ...MultiPromo, componentType: 'client' }],
  ['ImageBanner', { ...ImageBanner }],
  ['HeroST', { ...HeroST, componentType: 'client' }],
  ['HeaderST', { ...HeaderST }],
  ['FooterST', { ...FooterST }],
  ['FeatureBanner', { ...FeatureBanner, componentType: 'client' }],
  ['AccordionBlock', { ...AccordionBlock, componentType: 'client' }],
  ['input', { ...input }],
  ['button', { ...button }],
  ['LinkList', { ...LinkList, componentType: 'client' }],
  ['Container', { ...Container }],
  ['MobileMenuWrapper', { ...MobileMenuWrapper, componentType: 'client' }],
  ['MegaMenuItemWrapper', { ...MegaMenuItemWrapper, componentType: 'client' }],
  ['MegaMenuItem', { ...MegaMenuItem }],
  ['SearchBox', { ...SearchBox, componentType: 'client' }],
  ['MiniCart', { ...MiniCart, componentType: 'client' }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
]);

export default componentMap;
