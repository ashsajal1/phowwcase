import { Grid, Separator } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Menu from './components/Menu';
import './App.scss'
import data from './data/projects.json'
import { useEffect, useState } from 'react';
import { useSearchContext } from './hooks/userSearch';

export default function App() {
  const [projects, setProjects] = useState<any>(null);
  const { searchTerm } = useSearchContext()

  useEffect(() => {
    const searchedItems = () => {
      const filteredProjects = data.filter(project =>
        project.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.projectDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProjects(filteredProjects);
    }
    searchedItems();
  }, [searchTerm])

  return (
    <>

      <Navbar />
      <Menu />
      <Separator my="2" size="4" />

      <Grid style={{ padding: '4px' }} columns={{ xs: '1', sm: '2', md: '3' }} align={'start'} gap={'3'}>
        {projects ? (
          <>
            {projects.map((project: any) => (
              <Project title={project.projectTitle} description={project.projectDescription} coder={project.coderName} coderImg={project.coderImage} githubUrl={project.githubUrl} twitterUrl={project.twitterUrl} linkedinUrl={project.linkedInUrl} githubRepo={project.githubRepo} previewUrl={project.previewUrl} />
            ))}
          </>
        ) : (
          <>
            <h1>No project exist!</h1>
          </>
        )}
      </Grid>

    </>
  )
}
