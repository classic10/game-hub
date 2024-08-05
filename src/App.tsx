import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';
import GenresList from './Components/GenresList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './Components/PlatformSelector';
import { Game, Platform } from './hooks/useGames';
import SortSelector from './Components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}


function App() {
  const [GameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery)
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
        <GridItem area='aside' paddingX={5}>
          <GenresList selectedGenre={GameQuery.genre} onSelectGenre={(genre) => SetGameQuery({ ...GameQuery, genre })}></GenresList>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={GameQuery.platform} onSelectPlatform={(platform) => SetGameQuery({ ...GameQuery, platform })}></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid gameQuery={GameQuery}></GameGrid>
      </GridItem>

    </Grid>
  )
}

export default App
