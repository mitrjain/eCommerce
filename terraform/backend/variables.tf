variable "instance_size" {
    type = string
    default = "t2.micro"
}

data "aws_vpc" "default" {
  filter {
    name = "tag:Name"
    values = ["default"]
  }
}