import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { icons, IconType } from 'react-icons';

interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <>
            {/*platforms.map(platform => <Text>{platform.name} </Text>)*/}
            <HStack marginY={1}> {/* Theme spacing in chakra by default is 4 we are making this 1 */}
                {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'> </Icon>)}
            </HStack>
        </>
    );
}

export default PlatformIconsList; 