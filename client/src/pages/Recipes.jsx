import React from 'react'
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

} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function Recipes() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className=' font-Archivo'>

      <h2 className='mt-5 text-2xl'>Tariflerim</h2>
      <p className='pb-5 text-sm font-thin text-gray-500'>Yayınladığınız Tarifler Burada Gözükür</p>


      <Button colorScheme="green" onClick={onOpen}>Yeni Ekle</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Yeni Tarif Ekle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Merhaba,

          </ModalBody>

          <ModalFooter>

            <Button colorScheme="green" variant="solid" mr={1} >Kaydet</Button>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              İptal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


   





    </div>
  )
}
