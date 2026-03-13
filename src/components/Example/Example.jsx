"use client";

import { Button, Code, Menu, Portal, Stack, useMenu } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Example = () => {
  const menu = useMenu();
  const navLinks = ["Collections", "Workshops", "Commission", "Portfolio"];

  return (
    <Stack className="menu" gap="4" align="flex-start">
      <Code>open: {String(menu.api.open)}</Code>

      <Menu.RootProvider value={menu}>
        <Menu.Trigger asChild>
          <Button className="button button--menu" variant="outline" size="sm">
            <FiMenu />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {navLinks.map((text) => (
                <Menu.Item
                  key={text}
                  value={text.toLowerCase().replace(" ", "-")}
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
  );
};

export default Example;
