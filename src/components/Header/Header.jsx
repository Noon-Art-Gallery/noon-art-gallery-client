import "./Header.scss";
import { Container, Flex, Heading, Link, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container className="header" maxW="75rem" py={5}>
      <Flex justify="space-between" align="center" direction="column">
        <Image
          height="5rem"
          margin={1}
          rounded="md"
          src="src/assets/images/logo-large.svg"
          alt="logo"
        />

        <Flex gap={10} fontSize="sm">
          <Link className="nav-item" href="#Portfolio">
            Portfolio
          </Link>
          <Link className="nav-item" href="#Collections">
            Collections
          </Link>
          <Link className="nav-item" href="#Workshops">
            Workshops
          </Link>
          <Link className="nav-item" href="#Shop">
            Shop
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}
