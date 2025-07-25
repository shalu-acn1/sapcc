import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        //baseUrl: 'OCC_BACKEND_BASE_URL_VALUE', prefix: '/occ/v2/'
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD', 'EUR'],
      baseSite: ['electronics-spa'],
      urlParameters: ['baseSite', 'language', 'currency']
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: { en: translationsEn },
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '2211.46.3'
    }
  })]
})
export class SpartacusConfigurationModule { }
