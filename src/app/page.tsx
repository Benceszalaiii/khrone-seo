import Aurora from "../bits/Backgrounds/Aurora/Aurora";

export default function HomePage() {
  return (
    <main className=" min-h-[100vh] w-full">
      <section className="h-[90vh] w-full relative gap-8 flex justify-center items-center flex-col">
        <Aurora colorStops={["#a020fa", "#c010f0", "#a020a0"]} amplitude={2} speed={0.4} blend={1}/>
        <h1 className="text-5xl font-display font-semibold">
        Effortless SEO Optimization with AI API Integration.
        </h1>
        <p className="w-full max-w-3xl text-xl font-semilight font-body text-center py-2">
        Instantly optimize your content for search engines using advanced AI. Fast, easy integration for developers and marketers.
        </p>
      </section>
    </main>
  );
}
