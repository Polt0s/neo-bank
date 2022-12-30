import {
    useDisclosure, Modal,
    ModalFooter,
    ModalContent,
    ModalBody,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    Flex
} from '@chakra-ui/react';

import { Button } from 'shared';

interface IModalApplicationDeny {
    onSubmitDenyApplication: () => void;
    isLoadingForStatusDeny: boolean;
    isStatusDeny: boolean;
    onClickGoHome: () => void;
}

export const ModalApplicationDeny = ({
    onSubmitDenyApplication,
    isLoadingForStatusDeny,
    isStatusDeny,
    onClickGoHome
}: IModalApplicationDeny) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                background="red"
                colorText="white"
                width="6rem"
                onClick={onOpen}
            >
                Deny
            </Button>

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={isStatusDeny ? onClickGoHome : onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Deny application</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        {isStatusDeny ? 'Your application has been deny!' : 'You exactly sure, you want to cancel this application?'}
                    </ModalBody>

                    <ModalFooter>
                        {isStatusDeny ? (
                            <Button
                                background="blue"
                                colorText="white"
                                width="8rem"
                                onClick={onClickGoHome}
                            >
                                Go home
                            </Button>
                        ) : (
                            <Flex gap={10}>
                                <Button
                                    background="red"
                                    colorText="white"
                                    width="6rem"
                                    onClick={onSubmitDenyApplication}
                                    disabled={isLoadingForStatusDeny}
                                >
                                    Deny
                                </Button>
                                <Button
                                    width="6rem"
                                    onClick={onClose}
                                    background="blue"
                                    colorText="white"
                                >
                                    Cancel
                                </Button>
                            </Flex>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
