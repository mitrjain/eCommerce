resource "aws_security_group" "test-sg" {
name = "test-sg"
vpc_id = data.aws_vpc.default.id

ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]

    from_port = 22
    to_port = 22
    protocol = "tcp"
  }

  egress {
   from_port = 0
   to_port = 0
   protocol = "-1"
   cidr_blocks = ["0.0.0.0/0"]
 }

 tags = {
        Name = "test-sg"
    }


}