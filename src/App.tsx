import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';
import GenresList from './Components/GenresList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav main"`, // For defining mobile devices screen layout
        lg: `"nav nav" "aside main"` // For defining larger screen layout, We want aside panel to see on the larger devices with resolution 1024 px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}

    >

      <GridItem area='nav'>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        {/* to hide the aside at smaller screens */}
        <GridItem area='aside' paddingX={5}><GenresList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenresList></GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>

    </Grid>
  )
}

export default App
