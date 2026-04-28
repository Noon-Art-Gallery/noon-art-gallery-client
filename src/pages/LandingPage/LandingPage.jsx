import "./LandingPage.scss";
import InstaGallery from "@/components/InstaGallery/InstaGallery";
import { useNavigate } from "react-router-dom";

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
import { image } from "framer-motion/client";

const collections = [
  {
    title: "Inner Journey",
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
        image: "/images/collections/inner-journey/the-galaxy-within.jpeg",
        medium: "Oil on Canvas",
      },
    ],
  },
];

const services = [
  {
    title: "Commission Work",
    description:
      "Collaborate on a personal piece that captures your emotions, memories, or dreams.",
    image: "/images/collections/custom/spring-vase.png",
    url: "/commission",
  },
  {
    title: "Painting Classes",
    description:
      "Learn techniques and explore your creativity in a supportive environment.",
    image:
      "/images/workshops/sunflower2025/219C3F62-47AE-4976-9E91-9C42ED68E23B_1_105_c.jpeg",
    url: "/events",
  },
  {
    title: "Mindful Art Workshops",
    description:
      "Experience the therapeutic power of art in calming, nature-inspired settings.",
    image: "/images/workshops/lavender2025/untitled-7.jpg",
    url: "/events",
  },
  {
    title: "Live Painting",
    description:
      "Watch the creative process unfold in real time at events and exhibitions.",
    image:
      "/images/exhibitions/Jan2025/DCC32D21-9D23-4EA6-B7BE-E0F88449BD38_4_5005_c.jpeg",
    url: "/events",
  },
];

const featuredWorks = collections[0].works;

export default function LandingPage({ workshops }) {
  const navigate = useNavigate();
  return (
    <Box>
      {/* Hero */}

      <Container
        maxW="100%"
        height="23.4375rem"
        position="relative"
        zIndex="1"
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
            <Button className="button" onClick={() => navigate("/events")}>
              Upcoming Workshops
            </Button>

            <Button
              className="button button--secondary"
              onClick={() => navigate("/commission")}
            >
              Commission Artwork
            </Button>
          </Flex>
        </Box>
      </Container>

      {/* Intro */}
      <Container className="container " py={{ base: 16, md: 24 }}>
        <Stack spacing={5} textAlign="center" gap={5}>
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

          <Heading textAlign={"left"}>
            Finding my way through art, healing, and technology!
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="560px"
            opacity={0.95}
            className="paragraph"
            textAlign={"left"}
          >
            Through original paintings, workshops, and commissioned pieces, I
            explore how art can bring softness, reflection, and emotional
            healing into everyday life.
          </Text>

          {/* Services */}
          <Container maxW="100%">
            <Heading margin={"1rem"}>Services</Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={4}
              justifyItems="center"
            >
              {services.map((service) => (
                <Box
                  key={service.title}
                  className="card"
                  flexDirection={"column"}
                  height={"20rem"}
                >
                  {" "}
                  <Stack spacing={3} align="center" textAlign="center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      w="80px"
                      h="80px"
                      borderRadius={"100%"}
                      objectFit="cover"
                    />
                    <Text>{service.title}</Text>
                    <Text fontSize="sm" color="rgba(44,44,44,0.7)" padding={2}>
                      {service.description}
                    </Text>
                    <Button
                      className="button"
                      variant="outline"
                      onClick={() => {
                        navigate(service.url);
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Stack>
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
          <Flex
            gap={8}
            overflowX="auto"
            pb={2}
            css={{
              "&::-webkit-scrollbar": { display: "none" }, // مخفی کردن scrollbar
            }}
          >
            {featuredWorks.map((work) => (
              <Box
                key={work.title}
                className="card"
                overflow="hidden"
                minWidth="250px"
              >
                <Stack spacing={1} pt={4}>
                  <Text fontSize="sm" color="rgba(44,44,44,0.58)">
                    {collections[0].title}
                  </Text>
                  <Image
                    src={work.image}
                    alt={work.title}
                    w="100%"
                    h={{ base: "400px", md: "500px" }}
                    objectFit="cover"
                    transition="transform 0.45s ease"
                    _hover={{ transform: "scale(1.02)" }}
                  />

                  <Text fontSize="lg">Title: {work.title}</Text>
                  <Text fontSize="sm" color="rgba(44,44,44,0.58)">
                    Medium: {work.medium}
                  </Text>
                  <Text fontSize="sm" color="rgba(44,44,44,0.58)">
                    Size: {work.size}
                  </Text>
                  <Text fontSize="sm" color="rgba(44,44,44,0.58)">
                    Description:
                    {work.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Container>

      {/* Events */}
      <Box id="workshops" py={{ base: 16, md: 24 }}>
        <Container maxW="1200px">
          <Stack spacing={8}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.14em"
              fontSize="xs"
              color="rgba(44,44,44,0.62)"
            >
              Events
            </Text>
            {/* Workshop */}
            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium">
              Upcoming Workshops
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {workshops.map((item) => (
                <Box className="card" key={item.title} p={8}>
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

                    <Button
                      className="button"
                      variant="outline"
                      onClick={() => navigate(`/events/${item.id}`)}
                    >
                      More Details
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
