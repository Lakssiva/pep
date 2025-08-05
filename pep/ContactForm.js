import { Box, Button, FormControl, FormLabel, Input, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Message sent!");
    },
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit} maxW="500px" mx="auto" id="contact">
      <FormControl isInvalid={formik.touched.name && formik.errors.name} mb={4}>
        <FormLabel>Name</FormLabel>
        <Input name="name" {...formik.getFieldProps("name")} />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.email && formik.errors.email} mb={4}>
        <FormLabel>Email</FormLabel>
        <Input name="email" {...formik.getFieldProps("email")} />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.message && formik.errors.message} mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" {...formik.getFieldProps("message")} />
        <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="blue">Submit</Button>
    </Box>
  );
}
