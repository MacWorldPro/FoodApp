import { ViewIcon } from "@chakra-ui/icons";
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
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import { useState,useEffect } from "react";

const ProfileModal = ({  children }) => {

    const func=()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo);
        return userInfo;
      }
      const [user,setProfileData]=useState([]);
    useEffect(()=>{
      const userInfo=func();
      setProfileData(userInfo);
    //   console.log(profileData)
    //   console.log(typeof(userInfo))
    //   console.log(profileData.pic)
    
    },[]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        // <span onClick={onOpen}>{children}</span>
        <Image
        borderRadius="full"
        boxSize="40px"
        src={user.pic}
        alt={user.name}
        onClick={onOpen}
      />
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;