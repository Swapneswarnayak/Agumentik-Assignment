import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Lorem,
  Stack,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const constmFunc = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    if (email && password) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else {
      toast({
        title: "Fill all details",

        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Create New Account
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New-Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input id="email" placeholder="Enter E-Mail Address" size="lg" />
              <Input id="pass" placeholder="Enter Password" size="lg" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button onClick={onClose}  >
              CREATE
            </Button> */}
            <Button variant="ghost" colorScheme="red" onClick={constmFunc}>
              CREATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
