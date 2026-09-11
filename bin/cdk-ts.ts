#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3SampleStack } from '../lib/01-s3-stack';
import { LambdaApiSampleStack } from '../lib/02-lambda-api-stack';
import { VpcSampleStack } from '../lib/03-vpc-stack';

const app = new cdk.App();

new S3SampleStack(app, 'S3SampleStack');
new LambdaApiSampleStack(app, 'LambdaApiSampleStack');
new VpcSampleStack(app, 'VpcSampleStack');
