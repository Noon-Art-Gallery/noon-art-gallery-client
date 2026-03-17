import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const posts = ["https://www.instagram.com/p/DOwDluEkVj_/embed"];

export default function InstaGallery() {
  return (
    <Box py={20} px={6} maxW="1200px" mx="auto">
      <Heading textAlign="center" mb={10}>
        Follow us on Instagram
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {posts.map((url, index) => (
          <Box key={index}>
            <iframe
              src={url}
              width="100%"
              height="480"
              style={{ border: "none", borderRadius: "12px" }}
              loading="lazy"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
