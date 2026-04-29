import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton/BackButton";

export default function CollectionsPage({ collections }) {
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/collections/${id}`);
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
            Collections
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
            Painting emotions, thoughts, and dreams through the medium of oil on
            canvas.
          </Text>
        </Box>
      </Container>

      {/* collections */}
      <Container maxW="100%" py={16} className="card" paddingTop="0">
        <Box id="collections" py={{ base: 16, md: 24 }}>
          <Container maxW="1200px">
            <Stack spacing={8}>
              <Stack spacing={2}>
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.14em"
                  fontSize="xs"
                  color="rgba(44,44,44,0.62)"
                >
                  Collections
                </Text>

                <Heading
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="medium"
                >
                  {collections[0].artist}'s Artworks
                </Heading>
              </Stack>

              <SimpleGrid
                className="workshop-card"
                columns={{ base: 1, md: 2 }}
                gap={6}
              >
                {collections.map((item) => (
                  <Box
                    key={item.name}
                    p={4}
                    border="1px solid"
                    borderColor="rgba(44,44,44,0.08)"
                  >
                    <Stack spacing={2}>
                      <Heading fontSize="lg" fontWeight="medium">
                        {item.name}
                      </Heading>
                      <Text color="rgba(44,44,44,0.6)">{item.date}</Text>
                      <Image
                        alt={item.name}
                        src={item.works[0].image}
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
                        View Collection
                      </Button>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
        <BackButton url="home" />
      </Container>
    </Box>
  );
}
