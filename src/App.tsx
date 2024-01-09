import { Flex, Text, Button, Grid, Separator } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Menu from './components/Menu';
import './App.scss'
import projects from '../public/data/projects.json'

export default function App() {
  return (
    <>

      <Navbar />
      <Menu />
      <Separator my="2" size="4" />

      <Grid style={{ padding: '4px' }} columns={{ xs: '1', sm: '2', md: '3' }} align={'start'} gap={'3'}>
        {projects.map(project => (
          <Project title={project.projectTitle} description={project.projectDescription} coder={project.coderName} coderImg={project.coderImage} githubUrl={project.githubUrl} twitterUrl={project.twitterUrl} linkedinUrl={project.linkedInUrl} />
        ))}

      </Grid>

    </>
  )
}
