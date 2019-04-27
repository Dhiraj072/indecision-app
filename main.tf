provider "aws" {
  region = "ap-southeast-1"
}

terraform {
  backend "s3" {
    bucket = "tfm-states"
    key    = "indecision-app"
    region = "ap-southeast-1"
  }
}

// S3 bucket with website files
resource "aws_s3_bucket" "indecision_app" {
  bucket = "indecision-app.dappsr.com"
  acl    = "public-read"
  website {
    index_document = "index.html"
  }
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::indecision-app.dappsr.com/*"
      ]
    }
  ]
}
POLICY
}

locals {
  s3_origin_id = "indecisionAppS3Origin"
}

// Cloudfront distribution for the s3 bucket
resource "aws_cloudfront_distribution" "indecision_app" {
  origin {
    domain_name = "${aws_s3_bucket.indecision_app.bucket_regional_domain_name}"
    origin_id   = "${local.s3_origin_id}"
  }
  
  enabled = true
  default_root_object = "index.html"
   aliases = ["indecision-app.dappsr.com"]
  
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${local.s3_origin_id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:733012925755:certificate/902834b3-14a9-4b59-889a-0b3ceedb4586"
    ssl_support_method = "sni-only"
  }
}

data "aws_route53_zone" "dappsr" {
  name = "dappsr.com."
}

resource "aws_route53_record" "indecision_app" {
  zone_id = "${data.aws_route53_zone.dappsr.zone_id}"
  name    = "indecision-app.dappsr.com"
  type    = "A"
  alias {
    name                   = "${aws_cloudfront_distribution.indecision_app.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.indecision_app.hosted_zone_id}"
    evaluate_target_health = false
  }
}
