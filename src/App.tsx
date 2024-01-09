import { Flex, Text, Button, Grid } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Menu from './components/Menu';
export default function App() {
  return (
    <>

      <Navbar />
      <Menu />

      <Grid style={{ padding: '4px' }} columns={{ xs: '1', sm: '2', md: '3' }} align={'center'} gap={'3'}>
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop' />
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop' />
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop' />
        <Project title='This is titile' description='This is the large description' coder='Sajal' coderImg='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop' />
      </Grid>

    </>
  )
}
