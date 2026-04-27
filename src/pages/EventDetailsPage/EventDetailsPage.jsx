import "./EventDetailsPage.scss";
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
import { useParams } from "react-router-dom";
import { useMemo } from "react";

export default function EventDetailsPage({ workshops }) {
  const { eventId } = useParams();

  const event = useMemo(() => {
    return workshops.find((w) => String(w.id) === String(eventId));
  }, [eventId, workshops]);
  if (!event) return <Text>Event not found</Text>;
  return (
    <Box>
      <Stack spacing={4} padding={"20px"}>
        <Text fontWeight="bold" paddingTop={"4px"}>
          Event Details
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "6xl" }}
          lineHeight="1.15"
          fontWeight="medium"
          backgroundColor={"transparent"}
        >
          {event.title}
        </Heading>

        <Text padding={"4px"}>
          {event.date} | {event.location}
        </Text>
        <Image
          alt={event.title}
          src={event.image}
          w="100%"
          h="240px"
          objectFit="cover"
        ></Image>
        <Text fontWeight="bold" paddingTop={"4px"}>
          Overview
        </Text>
        <Text>{event.description}</Text>
        <Text fontWeight="bold" paddingTop={"4px"}>
          What's included?
        </Text>
        <Text>{event.included}</Text>
        <Text fontWeight="bold" paddingTop={"4px"}>
          Discount : Use "COUPLE2026" for $20 off when you book for two or more!
        </Text>

        <stripe-buy-button
          buy-button-id={event.buyButtonId}
          publishable-key={event.publishableKey}
        ></stripe-buy-button>

        <Text fontWeight="bold" paddingTop={"4px"}>
          Location
        </Text>
        <Text>{event.address}</Text>
        <Box borderRadius="xl" overflow="hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11479.796453930963!2d-79.05455353737003!3d44.00177783739965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51f36e6bee3df%3A0x55b1d1eb9f68dab9!2sTranquility%20Trails%20Farm!5e0!3m2!1sen!2sca!4v1777061630976!5m2!1sen!2sca"
            width="600"
            height="200px"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>
      </Stack>
    </Box>
  );
}
