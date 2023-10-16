terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.21.0"
    }
  }
}


provider "aws" {
    region = "us-west-1"
}

resource "aws_instance" "eCommerce_backend" {
    ami = "ami-0f8e81a3da6e2510a"
    instance_type = var.instance_size
    key_name = "mit_admin"
    vpc_security_group_ids = [aws_security_group.test-sg.id]
    

    tags = {
        Name = "eCommerce_backend"
    }

    depends_on = [
        aws_security_group.test-sg
    ]

}