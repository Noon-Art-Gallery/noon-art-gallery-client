import "./Footer.scss";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <Box
      className="footer"
      bg="#fff6ea"
      borderTop="1px solid"
      borderColor="gray.200"
      py={16}
    >
      <Container maxW="1200px">
        <Flex
          justify="space-between"
          align="start"
          direction={{ base: "column", md: "row" }}
          gap={10}
        >
          {/* Artist Info */}
          <Stack spacing={4} maxW="300px">
            <Image
              height="5rem"
              width={20}
              margin={1}
              rounded="md"
              src="src/assets/images/logo-large.svg"
              alt="logo"
            />
            <Heading size="md">Negin Bandar</Heading>

            <Text fontSize="sm" color="gray.600">
              Oil paintings exploring transformation, emotion, and memory.
              Original works and intimate workshops.
            </Text>
          </Stack>

          {/* Navigation */}
          <Stack spacing={3}>
            <Heading size="sm">Explore</Heading>

            <Link href="/shop">Shop</Link>
            <Link href="/workshops">Workshops</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Stack>

          {/* Newsletter */}
          <Stack spacing={4} maxW="300px">
            <Heading size="sm">Stay Connected</Heading>

            <Text fontSize="sm" color="gray.600">
              Get updates about new paintings and workshops.
            </Text>

            <Flex gap={2} alignItems="center" direction="column" width="100%">
              <Input placeholder="Email address" bg="white" height={10} />

              <Button
                className="button"
                bg="#A77F5F"
                color="white"
                _hover={{ bg: "#916b4e" }}
                height={10}
                lineHeight="1"
              >
                Subscribe
              </Button>
            </Flex>
          </Stack>
          <Flex
            className="social-links"
            gap={6}
            fontSize="sm"
            direction="column"
            alignItems="center"
          >
            <Link href="https://www.instagram.com/noon_art.gallery?igsh=MWZtdTR4ZzBua2pqdg%3D%3D&utm_source=qr">
              <FaInstagram size="1.5rem" />
            </Link>
            <Link href="mailto:bandar.negin@gmail.com">
              <FiMail size="1.4rem" />
            </Link>
          </Flex>
        </Flex>

        {/* Bottom bar */}

        <Flex
          mt={16}
          pt={6}
          borderTop="1px solid"
          borderColor="gray.200"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text fontSize="sm" color="gray.500">
            © 2026 Noon Art Gallery. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
