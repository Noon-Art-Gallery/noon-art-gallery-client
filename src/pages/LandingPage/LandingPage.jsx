import "./LandingPage.scss";

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

const featuredWorks = [
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
];

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
      <Box
        minH={{ base: "85vh", md: "95vh" }}
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="0"
          bgImage="url('/hero.jpg')"
          bgSize="cover"
          bgPosition="center"
          filter="brightness(0.72)"
        />
        <Box position="absolute" inset="0" />

        <Container maxW="1200px" position="relative" zIndex="1" padding={5}>
          <Image
            src="/images/workshops/lavender2025/untitled-5.jpg"
            alt="Exhibition"
            className="hero-image"
          />
          <Stack spacing={6} maxW="680px" color="black">
            <Text
              textTransform="uppercase"
              letterSpacing="0.12em"
              fontSize="sm"
              opacity={0.9}
              lineHeight="2"
            >
              Artist: Negin Bandar
            </Text>

            <Heading
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1.15"
              fontWeight="medium"
            >
              Art is therapy
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              maxW="560px"
              opacity={0.95}
              className="paragraph"
            >
              Painting is more than an artwork. It is a quiet space to breathe,
              feel, and reconnect with yourself.
            </Text>

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

            <Flex className="button--duo" gap={4} wrap="wrap" pt={2}>
              <Button className="button">View Collection</Button>

              <Button className="button button--secondary">
                Explore Workshops
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Intro */}
      <Container className="container" py={{ base: 16, md: 24 }}>
        <Stack spacing={6} textAlign="center">
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

          <Heading>
            Exploring the intersection of art, healing, and technology.
          </Heading>

          <Text className="paragraph paragraph--intro">
            Art has been part of my life since childhood.
          </Text>
          <Text className="paragraph paragraph--intro">
            I began attending painting classes at the age of six, and although
            my academic path later led me into engineering and a background in
            technology, art has always remained my first passion...
          </Text>

          <Button className="button">Learn More</Button>
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
              >
                Featured paintings
              </Heading>
            </Stack>

            <Link href="/shop" fontSize="sm" textDecoration="underline">
              Explore all works
            </Link>
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

            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium">
              Commission a personal piece
            </Heading>

            <Text lineHeight="1.95">
              Some works begin as a conversation — a memory, a feeling, a place,
              or a moment that deserves to remain alive in visual form.
              Commissioned paintings are created with care, collaboration, and
              emotional depth.
            </Text>

            <Button className="button">Start a Commission</Button>
          </Stack>
        </Grid>
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
                Workshops
              </Text>

              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="medium"
              >
                Upcoming classes & gatherings
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
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium">
            Stay connected
          </Heading>

          <Text maxW="620px" color="rgba(44,44,44,0.75)" lineHeight="1.9">
            Receive occasional updates about new paintings, exhibitions, and
            upcoming workshops.
          </Text>

          <Flex
            w="100%"
            maxW="560px"
            direction={{ base: "column", md: "row" }}
            gap={3}
          >
            <Input
              placeholder="Email address"
              bg="white"
              h="52px"
              borderColor="rgba(44,44,44,0.14)"
              _focus={{ borderColor: "#A77F5F", boxShadow: "none" }}
              type="email"
              autoComplete="email"
            />
            <Button className="button">Subscribe</Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
