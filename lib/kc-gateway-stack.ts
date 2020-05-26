import * as cdk from "@aws-cdk/core";
import { Mfa, UserPool, IUserPoolClient } from "@aws-cdk/aws-cognito";
import { Duration } from "@aws-cdk/core";

export class KcGatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const krakenChessUserPool: UserPool = new UserPool(
      this,
      "KrakenChessUserPool",
      {
        userPoolName: "kraken-chess-user-pool",
        mfa: Mfa.OFF,
        passwordPolicy: {
          tempPasswordValidity: Duration.days(1),
        },
        requiredAttributes: {
          email: true,
        },
        selfSignUpEnabled: true,
        signInAliases: {
          username: true,
          email: true
        },
      }
    );

    const krakenChessClient: IUserPoolClient = krakenChessUserPool.addClient(
      "KrakenChessClient",
      {
        userPoolClientName: "kraken-chess-client",
      }
    );

    new cdk.CfnOutput(this, "KrakenChessUserPoolClientId", {
      value: krakenChessClient.userPoolClientId,
      exportName: "KrakenChessUserPoolClientId",
    });

    new cdk.CfnOutput(this, "KrakenChessUserPoolId", {
      value: krakenChessUserPool.userPoolId,
      exportName: "KrakenChessUserPoolId",
    });
  }
}
