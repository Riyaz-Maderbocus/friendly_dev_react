import type { Route } from "./+types/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custome website development" },
  ];
}

export default function Home() {
    const now = new Date().toISOString();

    if (typeof window === "undefined") {
        console.log("Server Render at: ", now)        
    } else {
        console.log("client hydration at:", now)
    }
  return <section>
  My App</section>
}
