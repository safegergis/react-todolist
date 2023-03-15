import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Input,
  Center,
} from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

export default function AddList({callBackListTypes, listTypes}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");

  const handleClick = () => {
    if(input === "") {
      alert("List name must not be empty")
    } else {
      const id = listTypes.length
      callBackListTypes((prev) => [
          ...prev,
          {
            name: input,
            id: id
          }
        ]
      )
      setInput("")
      onClose();
    }

  }

  return (
    <>
      <IconButton
        aria-label="Add list type"
        icon={<GrAdd />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} OnClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new list!</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <p>
              Here you can add different types of lists to seperate tasks, like
              list for school, work, and other things
            </p>
            <Center>
              <Input
                m={3}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter new list type here!"
                size="md"
              />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
