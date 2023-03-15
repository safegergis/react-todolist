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
  Lorem
} from '@chakra-ui/react'
import { GrAdd } from "react-icons/gr"

export default function AddList() {
  const [listTypes, setListTypes] = useState([])
  const [isOpen, onOpen, OnClose] = useDisclosure()
  return (
  <div>
    <IconButton icon={<GrAdd/>} onClick={onOpen}/>
    <Modal isOpen={isOpen} OnClose={OnClose}/>
    <ModalContent>
      <ModalOverlay />
        <ModalHeader>Add new list!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        </ModalBody>
        <ModalFooter>
        <Button colorSheme='blue' mr='3px'>Add</Button>
        <Button variant='ghost' onClick={OnClose}>Close</Button>
        </ModalFooter>
      </ModalContent>

  </div>);
}
