#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ResourceStack } from '../lib/resource-stack';

const app = new cdk.App();
const resourceStack = new ResourceStack(app, 'ResourceStack', {});