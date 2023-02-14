import React, {useState} from "react";
import {NavLink} from "react-router-dom";
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
import axiosH from '../api/axios';

function SliderImg({runningCrew}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [runningCrewInfo, setRunningCrewInfo] = useState([]);

    async function getModalInfo(runningCrewId) {
        const data =  await axiosH({
            url: `https://i8a806.p.ssafy.io/api/running/detail/${runningCrewId}`,
            method: "GET",
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("access-token")}`
            }
          })
        
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
                    return(<>
                        <NavLink className='aNav'>
                            <img className='img' src={`https://i8a806.p.ssafy.io/runstory/running/`+crew.imgFileName} id={crew.runningId} onClick={openModal} alt="" />
                        </NavLink>
                        </>);
                      })
                }
        </>
    )
}
export default SliderImg;