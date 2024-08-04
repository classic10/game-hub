import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';
import GenresList from './Components/GenresList';

function App() {
  return <Grid templateAreas={{
    base: `"nav main"`, // For defining mobile devices screen layout
    lg: `"nav nav" "aside main"` // For defining larger screen layout, We want aside panel to see on the larger devices with resolution 1024 px
  }}>
    <GridItem area='nav'>
      <NavBar></NavBar>
    </GridItem>
    <Show above="lg">
      {/* to hide the aside at smaller screens */}
      <GridItem area='aside'><GenresList></GenresList></GridItem>
    </Show>
    <GridItem area='main'>
      <GameGrid></GameGrid>
    </GridItem>

  </Grid>
}

export default App
