This is a template Serverless application to quickly start a web App.

Infrastructure includes:
 - CloudFront distribution
 - S3 bucket for access logs
 - Route 53 record for the app (optional)
 - Lambda layer to keep dependencies independent from source code (optional)
 - API Gateway + Lambda (standard serverless setup)

Software level includes:
 - Sentry.io integration
 - ENV files
 - Serverless-offline plugin to run functions locally. 
 - Showcase of 1 controller to generate http response.
