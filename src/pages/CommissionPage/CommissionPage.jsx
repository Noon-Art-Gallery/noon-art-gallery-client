import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Dialog,
  Portal,
  Field,
  Textarea,
  NativeSelect,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommissionPage() {
  //   const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    size: "",
    description: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
    setOpen(false);
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
          src="/images/collections/custom/spring-vase.png"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center 20%"
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
            Commission Paintings
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
            Order a commission to capture a memory, a feeling, a place, or a
            moment that deserves to remain alive in visual form.
          </Text>
        </Box>
      </Container>
      <Container maxW="100%" padding={"20px"} className="commission-page">
        <Stack spacing={6}>
          <Text
            textTransform="uppercase"
            letterSpacing="0.14em"
            fontSize="xs"
            color="rgba(44,44,44,0.62)"
          >
            Commission
          </Text>
          <Image
            src="/images/collections/custom/spring-vase.png"
            alt="painting of a vase with flowers"
            w="100%"
            h={{ base: "460px", md: "560px" }}
            objectFit="cover"
          />
          <Heading>Order a commission for a personal piece!</Heading>
          <Text className="paragraph" lineHeight="1.95">
            Some works begin as a conversation, a memory, a feeling, a place, or
            a moment that deserves to remain alive in visual form.
          </Text>
          <Text className="paragraph" lineHeight="1.95">
            Commissioned paintings are created with care, collaboration, and
            emotional depth.
          </Text>

          <Box>
            <AnimatePresence mode="wait">
              {!open ? (
                <motion.div
                  key="open-btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Button className="button" onClick={() => setOpen(true)}>
                    Get a Quote
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <Box pb={12} maxWidth={"375px"}>
                    <Heading size="lg" mb={6}>
                      Commission Request
                    </Heading>

                    <Stack gap={4} maxW="600px">
                      <Field.Root>
                        <Field.Label>Full Name</Field.Label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          onChange={handleChange}
                        />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          onChange={handleChange}
                        />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Type of Painting</Field.Label>
                        <Input
                          name="type"
                          placeholder="e.g. Portrait, Landscape, Fantasy..."
                          onChange={handleChange}
                        />
                      </Field.Root>

                      {/* Size Dropdown */}
                      <Field.Root>
                        <Field.Label>Size</Field.Label>
                        <NativeSelect.Root>
                          <NativeSelect.Field
                            name="size"
                            onChange={handleChange}
                            defaultValue=""
                            background={"white"}
                            className="input"
                          >
                            <option value="">Select a size...</option>
                            <option value="a5">A5 — 14.8 x 21 cm</option>
                            <option value="a4">A4 — 21 x 29.7 cm</option>
                            <option value="a3">A3 — 29.7 x 42 cm</option>
                            <option value="30x40">30 x 40 cm</option>
                            <option value="50x70">50 x 70 cm</option>
                            <option value="digital">Digital Only</option>
                            <option value="custom">Custom Size</option>
                          </NativeSelect.Field>
                          <NativeSelect.Indicator />
                        </NativeSelect.Root>
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Description</Field.Label>
                        <Textarea
                          name="description"
                          placeholder="Describe what you have in mind..."
                          rows={4}
                          onChange={handleChange}
                          backgroundColor={"white"}
                          className="textarea"
                        />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Budget</Field.Label>
                        <NativeSelect.Root>
                          <NativeSelect.Field
                            name="budget"
                            onChange={handleChange}
                            defaultValue=""
                            background={"white"}
                            className="input"
                          >
                            <option value="">Select a budget...</option>
                            <option value="low">Less than</option>
                            <option value="a4">A4 — 21 x 29.7 cm</option>
                            <option value="a3">A3 — 29.7 x 42 cm</option>
                            <option value="30x40">30 x 40 cm</option>
                            <option value="50x70">50 x 70 cm</option>
                            <option value="digital">Digital Only</option>
                            <option value="custom">Custom Size</option>
                          </NativeSelect.Field>
                          <NativeSelect.Indicator />
                        </NativeSelect.Root>
                      </Field.Root>

                      <Button className="button" onClick={() => setOpen(true)}>
                        Submit Request
                      </Button>
                    </Stack>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Stack>
        <Button
          marginTop="1rem"
          className="button--secondary"
          variant="outline"
        >
          Back Home
        </Button>
      </Container>
    </Box>
  );
}
