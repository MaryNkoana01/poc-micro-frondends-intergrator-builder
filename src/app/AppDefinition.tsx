// DO not chnage anything (rename)
import { FeatureAppDefinition } from '@feature-hub/core';
import { ReactFeatureApp } from '@feature-hub/react';
import React from 'react';
import { helloWorldServiceDefinition } from './services/feature-app-service';
import {App} from "./App"
import { Platform,Variant } from '@mtnkente/paragon-foundation';

const FeatureHubAppDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  dependencies: {
    featureServices: {
      'test:hello-world-service': '1.0.0',
    },
  },

  ownFeatureServiceDefinitions: [helloWorldServiceDefinition],

  create: ({ featureServices }) => {
    const helloService: any = featureServices['test:hello-world-service'];

    return {
      render: () => {
        return (
         <App themeType={Platform.MOMO} themeVarient={Variant.DARK}/>
        );
      },
    };
  },
};
export default FeatureHubAppDefinition;
