import { Flex, Text, Button, Grid } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import Project from './components/Project';
export default function App() {
  return (
    <>

      <Navbar />

      <Grid style={{ padding: '4px' }} columns={{ xs: '1', sm: '2', md:'3' }} align={'center'} gap={'3'}>
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='/coder.png' />
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='/coder.png' />
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='/coder.png' />
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='/coder.png' />
      </Grid>

    </>
  )
}
