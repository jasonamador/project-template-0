aws --endpoint-url=http://localhost:4572 s3 mb s3://localstack-demo-bucket
aws --endpoint-url=http://localhost:4572 s3api put-bucket-acl --bucket localstack-demo-bucket --acl public-read
aws --endpoint-url=http://localhost:4576 sqs create-queue --queue-name localstack-demo-queue

