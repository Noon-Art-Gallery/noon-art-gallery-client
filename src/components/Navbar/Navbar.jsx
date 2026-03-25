import "./Navbar.scss";
import {
  Container,
  Flex,
  Heading,
  Link,
  Image,
  Button,
  Code,
  Menu,
  Portal,
  Stack,
  useMenu,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const menu = useMenu();
  const navLinks = ["Collections", "Workshops", "Commission", "Portfolio"];
  return (
    <Container className="navbar" maxW="100%" py={1}>
      <Flex justify="space-between" align="center">
        <Image
          height="5rem"
          rounded="md"
          src="/logo/logo-large.svg"
          alt="logo"
        />
        <Stack className="menu--mobile" gap="4" align="flex-start">
          <Menu.RootProvider value={menu}>
            <Menu.Trigger asChild>
              <Button className="button--menu" variant="outline" size="lg">
                <FiMenu />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner width="100%">
                <Menu.Content height="sm">
                  {navLinks.map((text) => (
                    <Menu.Item
                      key={text}
                      value={text.toLowerCase().replace(" ", "-")}
                      fontSize="xl"
                      py={4}
                      px={6}
                      my={2}
                      className="nav-item"
                    >
                      {" "}
                      {text}{" "}
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.RootProvider>
        </Stack>
        <Flex className="menu--desk" gap={10} fontSize="sm">
          {navLinks.map((text) => (
            <Link
              key={text}
              href={`/${text.toLowerCase().replace(" ", "-")}`}
              className="nav-link"
            >
              {text}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
