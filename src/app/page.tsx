
import Aurora from "../bits/Backgrounds/Aurora/Aurora";

export default function HomePage() {
  return (
    <main className=" min-h-[100vh] w-full">
      <section className="h-[90vh] px-4 w-full relative gap-8 flex justify-center items-center flex-col">
        <Aurora
          colorStops={["#a020fa", "#c010f0", "#a020a0"]}
          amplitude={2}
          speed={0.4}
          blend={1}
        />
        <h1 className="text-3xl md:text-5xl font-display font-semibold">
          Effortless <strong className="text-violet-700 font-semibold">SEO Optimization</strong>{" "}
          with AI API Integration.
        </h1>
        <p className="w-full max-w-3xl text-base md:text-xl font-semilight font-body md:text-center py-2">
          Instantly optimize your content for search engines using advanced AI.
          Fast, easy integration for developers and marketers.
        </p>
      </section>
    </main>
  );
}
