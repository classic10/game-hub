import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return <Grid templateAreas={{
    base: `"nav main"`, // For defining mobile devices screen layout
    lg: `"nav nav" "aside main"` // For defining larger screen layout, We want aside panel to see on the larger devices with resolution 1024 px
  }}>
    <GridItem area='nav' bg='coral' >Nav</GridItem>
    <Show above="lg">
      {/* to hide the aside at smaller screens */}
      <GridItem area='aside' bg='gold' >Aside</GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue' >Main</GridItem>

  </Grid>
}

export default App
