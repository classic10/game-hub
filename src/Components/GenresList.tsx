import { List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenresList = () => {
    const { data } = useData<Genre>('/genres');
    return <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
}

export default GenresList;