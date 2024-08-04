import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

const GenresList = () => {
    const { data, isLoading, error } = useData<Genre>('/genres');
    if (error) return null;
    if (isLoading) return <Spinner />;
    return <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={8}></Image>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>)}
    </List>
}

export default GenresList;