import { FunctionComponent } from 'preact';
import Header from '../../components/Header';
import { ProjectsWrapper } from './index.css';

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
    return (
        <ProjectsWrapper>
            <Header currentPage="projects" />
            <h1>Projects</h1>
        </ProjectsWrapper>
    );
};

export default Projects;
