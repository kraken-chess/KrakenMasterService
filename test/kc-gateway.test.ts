import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import KcGateway = require('../lib/kc-gateway-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new KcGateway.KcGatewayStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
