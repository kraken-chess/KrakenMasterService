# DEVELOPMENT AND CONTRIBUTION

## Development Environment
Use whatever you feel like. [VSCode](https://code.visualstudio.com/) provides good out-of-the-box support for Javascript and Typescript.

(Optional) Use a code-formatter to keep consistent. [prettier](https://prettier.io/docs/en/install.html) is the formatter used by this repository.

## Making a change
This repository uses npm scripts. Use whatever test scripts exist to verify your change. Add any you think should exist.

### Basic build scripts

Useful basic scripts:
```
$ npm run build --> compile typescript to js
$ npm run watch --> watch for chagnes and compile
$ npm run test  --> perform jest unit tests
```

Some additional scripts:

*Linux/MacOS*
```
$ npm run nix-clean-ts --> removes all artifacts created from 'npm run build'
$ npm run nix-clean-cdk --> removes all cdk related artifacts (CloudFormation template)
$ npm run nix-clean-deps --> removes node_modules; will have to do npm install again to re-create node_modules
$ npm run nix-clean --> does all of the above
```

For the Windows equivalent of the above commands, simply replace "nix" with "win":
```
$ npm run win-clean-ts
```

### CDK Build scripts

To deploy the resources to CloudFormation, make sure you have followed the [`setup instructions`](SETUP.md). CDK command line can be used to deploy the CloudFormation resources to your personal AWS resources.

*In the following examples, we will omit ```--profile``` for brevity - it is your responsibility to use (or not use)  ```--profile``` based on your setup.*

Useful CDK commands:
```
$ cdk synth --> emits the synthesized CloudFormation template
$ cdk diff --> compare the deployed stack with the state defined in the package
$ cdk deploy --> deploy this stack to the configured AWS account/region
$ cdk destroy [stack_name] --> delete the stack configured by the CDK CLI
```

You should run ```cdk --help``` to get a full list.

### Development workflow

1. Make changes
2. Run basic build scripts to test non-CDK changes
    ```
    $ npm run nix-clean-ts && npm run nix-clean-cdk
    $ npm run build
    $ npm run test
    ```
3. Run CDK build script to test CDK changes
    ```
    $ cdk diff
    $ cdk synth
    ```
4. Ensure no errors and your CloudFormation template looks correct
5. Deploy your stack to your test account
    ```
    $ cdk deploy
    ``` 
6. If it was successful, go and test your stack resources (ex. for API Gateway, hit endpoint with ```cURL```). If it wasn't successful, delete your stack from the AWS Console and fix your mistake - you will see the reason for why the stack creation failed both in the command line and in the AWS Console.
7. Once testing is done, push to your **forked repo or kraken-chess dev branch**

### Troubleshooting

For most cases, understanding of CloudFormation should logically provide you the reason for stack creation/resource setup errors. As such, I recommend:

+ [Main CloudFormation documentation](https://aws.amazon.com/documentation/cloudformation/)
+ [CloudFormation template reference gudie](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html)
+ [CDK documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
+ [CDK Typescript API](https://docs.aws.amazon.com/cdk/api/latest/typescript/api/index.html)

For more specific errors, search your favourite forum.

## Pull Requests

Ensure that you've performed necessary verifications before you send a PR.

Also, if possible, format your code before sending it in.

This repository should have a PR template - fill it out to the best of your ability.
