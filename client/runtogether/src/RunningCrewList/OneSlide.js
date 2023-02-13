import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import axios from 'axios';



// 이미지 별 모달창 출력을 위함
function OneSlide({runningCrew}) {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [runningCrewInfo, setRunningCrewInfo] = useState([]);

    async function getModalInfo(runningCrewId) {
        const data = await axios.get("https://i8a806.p.ssafy.io/api/running/detail/"+runningCrewId);
        setRunningCrewInfo(data.data.data)
    }

    function openModal(e) {
        getModalInfo(e.target.id)
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
                        <p>크루명: {runningCrewInfo.crewName}</p>
                        <p>장소: {runningCrewInfo.startLocation} → {runningCrewInfo.endLocation}</p>
                        <p>시간: {runningCrewInfo.startTime} ~ {runningCrewInfo.endTime}</p>
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
                            <img className='img' src={crew.imgFilePath} id={crew.runningId} onClick={openModal} alt={crew.runningId}/>
                        );
                      })
                }
        </>
    )
}
export default OneSlide;