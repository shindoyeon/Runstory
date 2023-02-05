import React, {useState} from 'react';
import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input,
    Button,
    CardBody,
    ChakraProvider,
    Divider
  } from '@chakra-ui/react';

function OneSlide({runningCrew}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [runningId, setRunningId] = useState();

    function openModal(e) {
        setRunningId(e.target.id)
        onOpen();
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='xs' isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>간략 정보</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>RUNNING CREW ID: {runningId}</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            닫기
                        </Button>
                        <Button>
                            자세히 보러가기
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {
                runningCrew.map((crew, idx) => {
                    return(
                            <img className='img' src={crew.imgFilePath} id={crew.runningId} onClick={openModal}/>
                        );
                      })
                }
        </>
    )
}
export default OneSlide;