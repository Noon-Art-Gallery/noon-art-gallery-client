import "./Navbar.scss";
import {
  Container,
  Box,
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
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const menu = useMenu();
  const navLinks = ["Collections", "Workshops", "Commission", "Portfolio"];
  return (
    <Box className="navbar-container" position="sticky" top="0" zIndex="1000">
      <Container className="navbar" maxW="100%" py={1}>
        <Flex justify="space-between" align="center">
          <RouterLink to="/">
            <Image
              height="5rem"
              rounded="md"
              src="/logo/logo-large.svg"
              alt="logo"
            />
          </RouterLink>
          <Stack className="menu--mobile" gap="4" align="flex-start">
            <Menu.RootProvider value={menu}>
              <Menu.Trigger asChild>
                <Button className="button--menu" variant="outline" size="lg">
                  <FiMenu />
                </Button>
              </Menu.Trigger>
              <Portal>
                {/* Mobile */}
                <Menu.Positioner width="100%">
                  <Menu.Content height="sm">
                    {navLinks.map((text) => (
                      <Menu.Item
                        key={text}
                        value={text.toLowerCase().replace(/ /g, "-")}
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
          {/* Desktop */}
          <Flex className="menu--desk" gap={10} fontSize="sm">
            {navLinks.map((text) => (
              <RouterLink
                key={text}
                to={`/${text.toLowerCase().replace(/ /g, "-")}`}
                className="nav-link"
              >
                {text}
              </RouterLink>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
