import "./CollectionDetailsPage.scss";
import BackButton from "@/components/BackButton/BackButton";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Link,
  Dialog,
  Portal,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { FiX } from "react-icons/fi";

export default function CollectionDetailsPage({ collections }) {
  const { collectionId } = useParams();
  const [selected, setSelected] = useState(null);

  const collection = useMemo(() => {
    return collections.find((c) => String(c.id) === String(collectionId));
  }, [collectionId, collections]);
  if (!collection) return <Text>Collection not found</Text>;

  return (
    <Box>
      <Container
        maxW="100%"
        height="15.625rem"
        position="relative"
        zIndex="1"
        className="hero"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "stretch", md: "flex-start" }}
      >
        <Image
          className="hero__background"
          src={collections[0].works[0].image}
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center 80%"
        />
        <Box
          className="background-overlay"
          position="absolute"
          inset="0"
          bg="rgba(0, 0, 0, 0.35)"
        />
        <Box
          className="hero__text"
          width
          position="relative"
          zIndex="1"
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="white"
          backgroundColor={"transparent"}
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.15"
            fontWeight="medium"
            backgroundColor={"transparent"}
          >
            {collection.name}
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="560px"
            opacity={0.95}
            className="paragraph"
            backgroundColor={"transparent"}
            color="white"
            paddingTop={"10px"}
          >
            {collection.description}
          </Text>
        </Box>
      </Container>
      <Stack gap={4} padding={"20px"}>
        <Heading>Artworks</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
          {collection.works.map((work, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={work.image}
                alt={work.title}
                width="100%"
                height="auto"
                objectFit="cover"
                onClick={() => setSelected(work)}
              />
              <Dialog.Root
                open={!!selected}
                onOpenChange={(e) => !e.open && setSelected(null)}
                size="xl"
              >
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Dialog.Content bg="transparent" shadow="none" maxW="90vw">
                      <Dialog.CloseTrigger asChild>
                        <Box
                          position="absolute"
                          top={0}
                          right={0}
                          zIndex={1}
                          cursor="pointer"
                          bg="$secondary-color"
                          borderRadius="full"
                          p={1}
                          _hover={{ bg: "gray.100" }}
                        >
                          <FiX size={16} />
                        </Box>
                      </Dialog.CloseTrigger>
                      <Image
                        src={selected?.image}
                        alt={selected?.title}
                        borderRadius="xl"
                        width="100%"
                        maxH="auto"
                        objectFit="contain"
                        mx="auto"
                      />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
              <Box p={4}>
                <Box className="work-info">
                  Title:<Text>{work.title}</Text>
                </Box>
                <Box className="work-info">
                  Medium:<Text>{work.medium}</Text>
                </Box>
                <Box className="work-info" flexDirection={"column"}>
                  Story: <Text>{work.description}</Text>
                </Box>
                <Box className="work-info">
                  <Text>Price:</Text>
                  {work.price && <Text>{work.price}</Text>}
                </Box>
                <Button className="button">{work.button}</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <BackButton url="collections" />
      </Stack>
    </Box>
  );
}
