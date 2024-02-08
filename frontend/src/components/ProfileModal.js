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
  <Image
    borderRadius="full"
    boxSize={{ base: "40px", md: "50px" }} // Adjusted boxSize for small and medium screens
    src={user.pic}
    alt={user.name}
    onClick={onOpen}
    cursor="pointer" // Add cursor pointer for better UX
  />
) : (
  <IconButton
    d={{ base: "flex", md: "none" }} // Hide IconButton on medium screens and above
    icon={<ViewIcon />}
    onClick={onOpen}
  />
)}

<Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent
    h={{ base: "auto", md: "410px" }} // Adjusted height for small and medium screens
  >
    <ModalHeader
      fontSize={{ base: "24px", md: "40px" }} // Adjusted fontSize for small and medium screens
      fontFamily="Work Sans"
      textAlign="center" // Centered ModalHeader text
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
        boxSize={{ base: "100px", md: "150px" }} // Adjusted boxSize for small and medium screens
        src={user.pic}
        alt={user.name}
      />
      <Text
        fontSize={{ base: "20px", md: "30px" }} // Adjusted fontSize for small and medium screens
        fontFamily="Work Sans"
      >
        Email: {user.email}
      </Text>
    </ModalBody>
    <ModalFooter justifyContent="center"> {/* Centered ModalFooter */}
      <Button onClick={onClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

    </>
  );
};

export default ProfileModal;