import "./EventsPage.scss";
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
import { useNavigate } from "react-router-dom";

export default function EventsPage({ workshops }) {
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/events/${id}`);
  };

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
            Events
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
        </Box>
      </Container>

      {/* workshops */}
      <Container
        maxW="100%"
        py={16}
        className="events__container"
        paddingTop="0"
      >
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
                  Past Events
                </Heading>
              </Stack>

              <SimpleGrid
                className="workshop-card"
                columns={{ base: 1, md: 2 }}
                gap={6}
              >
                {workshops.map((item) => (
                  <Box
                    key={item.title}
                    p={4}
                    border="1px solid"
                    borderColor="rgba(44,44,44,0.08)"
                  >
                    <Stack spacing={2}>
                      <Heading fontSize="lg" fontWeight="medium">
                        {item.title}
                      </Heading>
                      <Text color="rgba(44,44,44,0.6)">{item.date}</Text>
                      <Image
                        alt={item.title}
                        src={item.image}
                        w="100%"
                        h="240px"
                        objectFit="cover"
                      />

                      <Text color="rgba(44,44,44,0.78)" lineHeight="1.8">
                        {item.description}
                      </Text>

                      <Button
                        className="button"
                        variant="outline"
                        onClick={() => handleViewDetails(item.id)}
                      >
                        View Details
                      </Button>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
        <Button className="button--secondary" variant="outline">
          Back Home
        </Button>
      </Container>
    </Box>
  );
}
