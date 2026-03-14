import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 500vh container for the scrolling experience */}
      <div className="relative w-full h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Work History */}
      <Experience />

      {/* Skills Array */}
      <Skills />

      {/* Academic Projects Grid */}
      <Projects />

      {/* Footer */}
      <footer className="w-full py-12 px-[5%] text-center text-zinc-500 border-t border-white/10 bg-[#121212]">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sumedh Acharya. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
