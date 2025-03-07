import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-full">
      <div className="welcome-text
          flex flex-col gap-2
          w-full">
        <h2 className="text-xl">Hi There</h2>
        <h1 className="text-4xl font-bold">I am <span className="text-secondary-light-blue">Jonah Marc</span></h1>
        <h2 className="text-2xl">I am a software developer</h2>
        {/* <p className="text-sm font-light mt-5">
          I am currently building my portfolio, focusing on full-stack web development, including testing and deployment.
        </p> */}
      </div>
      <div className="recent-projects
          flex flex-col gap-2
          flex-1 min-h-0
          w-full">
        <h2 className="text-2xl font-bold">Recent <span className="text-secondary-light-blue">Projects</span></h2>
        <div className="flex-grow overflow-y-auto">
          <Projects />
        </div>
      </div>
    </div>
  );
}
