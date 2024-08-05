import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useData<Genre>('/genres');
    if (error) return null;
    if (isLoading) return <Spinner />;
    return <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={8}></Image>
                <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : 'normal'} fontSize='lg' variant='Link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
}

export default GenresList;