import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import PageContentButtons from "../components/PageContentButtons";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

function ProjectsPage() {
  return (
    <Layout title="Projects">
      <PageContentButtons>
        <Button to="https://zenithraptor.itch.io/grapple-pilot">
          Grapple Pilot
        </Button>
        <Button to="https://zenithraptor.itch.io/shadowmaze">
          Shadow Maze
        </Button>
      </PageContentButtons>
      <PageContent>
        <BackButton />
      </PageContent>
    </Layout>
  );
}

export default ProjectsPage;
