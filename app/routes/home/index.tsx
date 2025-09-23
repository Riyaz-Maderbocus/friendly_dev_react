import AboutPreview from "~/components/AboutPreview";
import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";
import type { PostMeta } from "~/types";
import LatestPosts from "~/components/LatestPosts";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader({ request}:Route.LoaderArgs):Promise<{projects:Project[]; posts:PostMeta[]}> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL("/posts-meta.json", url))
  ])

  // const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  // const data = await res.json();

  if (!projectRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch projects or posts")
  }

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json()
  ])

  // console.log(projects, posts)
  return {projects, posts}
}


const HomePage = ({loaderData}:Route.ComponentProps) => {
  const {projects, posts} = loaderData;
  // console.log(projects)
  console.log(posts)

  return (
    <>
      <FeaturedProjects projects={projects} count={2}/>
      <AboutPreview />
      <LatestPosts posts={posts}/>
    </>
  )
}

export default HomePage;
