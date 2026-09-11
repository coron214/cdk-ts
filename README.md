# cdk-ts

AWS CDK + TypeScript の学習用リポジトリです。

## セットアップ

```bash
npm install
npx cdk synth
```

AWSへデプロイする前に、初回だけ bootstrap が必要です。

```bash
npx cdk bootstrap
```

## サンプル

### 01 S3
`lib/01-s3-stack.ts`

学ぶこと:
- `Stack` と `Construct`
- S3 Bucket の作成
- RemovalPolicy
- 暗号化
- パブリックアクセスブロック

読解問題:
1. このコードから何個のS3 Bucketが作られる？
2. `RemovalPolicy.DESTROY` は何を意味する？
3. `blockPublicAccess` を外すと何が変わり得る？

### 02 Lambda + API Gateway
`lib/02-lambda-api-stack.ts`

学ぶこと:
- Lambda Function
- API Gateway HTTP API
- Lambda Integration
- CDKリソース間の参照

読解問題:
1. HTTPリクエストは最終的にどのLambdaへ届く？
2. Lambdaのランタイムは何？
3. API GatewayとLambdaの接続はどのConstructが担当する？

### 03 VPC
`lib/03-vpc-stack.ts`

学ぶこと:
- VPC
- Public Subnet
- Isolated Subnet
- Availability Zone
- NAT Gateway

このサンプルでは料金を抑えるため `natGateways: 0` にしています。

読解問題:
1. VPCのCIDRはどのように決まる？
2. Public SubnetとIsolated Subnetの違いは？
3. NAT Gatewayを0にするとPrivate側からインターネットへ出られる？

## 実行例

CloudFormationテンプレートを確認:

```bash
npx cdk synth
```

Stack一覧:

```bash
npx cdk list
```

1つだけデプロイ:

```bash
npx cdk deploy S3SampleStack
```

削除:

```bash
npx cdk destroy S3SampleStack
```

## 学習のおすすめ順

1. `bin/cdk-ts.ts` を読む
2. `lib/01-s3-stack.ts`
3. `npx cdk synth S3SampleStack` でCloudFormationを見る
4. `lib/02-lambda-api-stack.ts`
5. `lib/03-vpc-stack.ts`

ポイントは「CDKのTypeScriptコード」だけで終わらず、`cdk synth` 後のCloudFormationと対応付けることです。
