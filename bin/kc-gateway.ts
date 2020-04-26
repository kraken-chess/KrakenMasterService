#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { KcGatewayStack } from '../lib/kc-gateway-stack';

const app = new cdk.App();
new KcGatewayStack(app, 'KrakenChessGatewayStack');
