#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkTemplateStack } from '../lib/aws-cdk-template-stack';

const app = new cdk.App();
new AwsCdkTemplateStack(app, 'AwsCdkTemplateStack');
