import { Collection } from "react-aria-components";
import "./LandingPage.scss";
import InstaGallery from "@/components/InstaGallery/InstaGallery";

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
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const collections = [
  {
    collection: "Inner Journey",
    works: [
      {
        title: "Becoming",
        image: "/images/collections/inner-journey/becoming.jpg",
        medium: "Oil on Canvas",
      },
      {
        title: "Consciousness in Orbit",
        image: "/images/collections/inner-journey/consciousness-in-orbit.jpg",
        medium: "Oil on Canvas",
      },
      {
        title: "The Galaxy Within",
        image: "/images/collections/inner-journey/the-galaxy-within.jpg",
        medium: "Oil on Canvas",
      },
    ],
  },
];

const featuredWorks = collections[0].works;

const workshops = [
  {
    title: "Tote Bag Painting Workshop in Lavender field",
    date: "July 12, Whithby",
    description:
      "A gentle creative session focused on emotional expression and color.",
    image: "/images/workshops/lavender2025/untitled-11.jpg",
  },
  {
    title: "Painting on Cap Workshop in Sunflower field",
    date: "May 3, Toronto",
    description: "Explore layering, texture, and depth in oil painting.",
    image:
      "/images/workshops/sunflower2025/B073425E-51E8-4679-A67B-18D688580420_1_105_c.jpeg",
  },
];

export default function HomePage() {
  return (
    <Box color="#2C2C2C">
      {/* Hero */}

      <Container
        maxW="100%"
        height="350px"
        position="relative"
        zIndex="1"
        padding={5}
        paddingTop={1}
        className="hero"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "stretch", md: "flex-start" }}
      >
        <Image
          className="hero__background"
          src="/images/workshops/lavender2025/untitled-5.jpg"
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
            Art is therapy
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
            A quiet space to breathe, feel, and reconnect with yourself.
          </Text>
          <Flex
            className="button--duo"
            gap={4}
            wrap="wrap"
            pt={2}
            backgroundColor={"transparent"}
          >
            <Button className="button">Order an Artwork</Button>

            <Button className="button button--secondary">
              Upcoming Workshops
            </Button>
          </Flex>
        </Box>
      </Container>

      {/* Intro */}
      <Container className="container " py={{ base: 16, md: 24 }}>
        <Stack spacing={6} textAlign="center">
          <Stack
            spacing={6}
            maxW="680px"
            color="black"
            classname="hero__parag"
            paddingLeft={{ base: 0, md: 10 }}
          ></Stack>

          {/* About the Artist */}
          <Text
            textTransform="uppercase"
            letterSpacing="0.14em"
            fontSize="xs"
            color="rgba(44,44,44,0.62)"
          >
            About the Artist
          </Text>
          <Image
            src="/images/workshops/lavender2025/untitled-3.jpg"
            boxSize="150px"
            borderRadius="full"
            fit="cover"
            alt="Artist's Photo"
            margin={"auto"}
          />
          <Text
            textTransform="uppercase"
            letterSpacing="0.12em"
            fontSize="sm"
            opacity={0.9}
            lineHeight="2"
          >
            Artist: Negin Bandar
          </Text>

          <Heading>
            Exploring the intersection of art, healing, and technology.
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="560px"
            opacity={0.95}
            className="paragraph"
          >
            Through original paintings, workshops, and commissioned pieces, I
            explore how art can bring softness, reflection, and emotional
            healing into everyday life.
          </Text>

          <Button className="button">Learn More</Button>
        </Stack>
      </Container>
      {/* Commission Section */}
      <Container id="commission" maxW="1200px" py={{ base: 16, md: 24 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 10, md: 14 }}
          alignItems="center"
        >
          <Box>
            <Image
              src="/images/collections/custom/spring-vase.png"
              alt="painting of a vase with flowers"
              w="100%"
              h={{ base: "460px", md: "560px" }}
              objectFit="cover"
            />
          </Box>

          <Stack spacing={6}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.14em"
              fontSize="xs"
              color="rgba(44,44,44,0.62)"
            >
              Commission
            </Text>
            <Heading>Commission a personal piece</Heading>
            <Text className="paragraph" lineHeight="1.95">
              Some works begin as a conversation, a memory, a feeling, a place,
              or a moment that deserves to remain alive in visual form.
            </Text>
            <Text className="paragraph" lineHeight="1.95">
              Commissioned paintings are created with care, collaboration, and
              emotional depth.
            </Text>
            <Button className="button">Start a Commission</Button>
          </Stack>
        </Grid>
      </Container>
      {/* Featured Works */}
      <Container id="works" maxW="1200px" py={{ base: 8, md: 14 }}>
        <Stack spacing={8}>
          <Flex justify="space-between" align="end" wrap="wrap" gap={4}>
            <Stack spacing={2}>
              <Text
                textTransform="uppercase"
                letterSpacing="0.14em"
                fontSize="xs"
                color="rgba(44,44,44,0.62)"
              >
                Selected Works
              </Text>
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="medium"
                lineHeight={2.2}
              >
                Featured Collection
              </Heading>
            </Stack>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {featuredWorks.map((work) => (
              <Box key={work.title}>
                <Box overflow="hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    w="100%"
                    h={{ base: "400px", md: "500px" }}
                    objectFit="cover"
                    transition="transform 0.45s ease"
                    _hover={{ transform: "scale(1.02)" }}
                  />
                </Box>

                <Stack spacing={1} pt={4}>
                  <Text fontSize="lg">{work.title}</Text>
                  <Text fontSize="sm" color="rgba(44,44,44,0.58)">
                    {work.medium}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Workshops */}
      <Box id="workshops" py={{ base: 16, md: 24 }}>
        <Container maxW="1200px">
          <Stack spacing={8}>
            <Stack spacing={2}>
              <Text
                textTransform="uppercase"
                letterSpacing="0.14em"
                fontSize="xs"
                color="rgba(44,44,44,0.62)"
              >
                Events
              </Text>

              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="medium"
              >
                Past Workshops
              </Heading>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {workshops.map((item) => (
                <Box
                  key={item.title}
                  p={8}
                  border="1px solid"
                  borderColor="rgba(44,44,44,0.08)"
                >
                  <Stack spacing={4}>
                    <Heading fontSize="lg" fontWeight="medium">
                      {item.title}
                    </Heading>
                    <Image
                      alt={item.title}
                      src={item.image}
                      w="100%"
                      h="240px"
                      objectFit="cover"
                    />

                    <Text color="rgba(44,44,44,0.6)">{item.date}</Text>

                    <Text color="rgba(44,44,44,0.78)" lineHeight="1.8">
                      {item.description}
                    </Text>

                    <Button className="button" variant="outline">
                      Reserve a Seat
                    </Button>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Newsletter */}
      <Container maxW="900px" py={{ base: 16, md: 24 }}>
        <Stack spacing={5} textAlign="center" align="center">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={1.2}
            fontWeight="medium"
          >
            Stay connected
          </Heading>

          <Text maxW="620px" color="rgba(44,44,44,0.75)">
            Receive occasional updates about new paintings, exhibitions, and
            upcoming workshops.
          </Text>

          <Flex w="100%" maxW="560px" direction="column" gap={3}>
            <Input
              placeholder="Email address"
              type="email"
              autoComplete="email"
            />
            <Button className="button">Subscribe</Button>
          </Flex>
        </Stack>
      </Container>

      {/* Instagram Gallery */}
      <InstaGallery />
    </Box>
  );
}
