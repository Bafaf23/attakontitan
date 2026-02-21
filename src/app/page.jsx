import Image from "next/image";
export default function Home() {
  return (
    <section className="grow bg-linear-to-tl via-gray-500 flex flex-col overflow-hidden items-center justify-center">
      <div className="w-4/5 flex flex-col items-center gap-3">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-black-500">
          Attackon Titan
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide font-sans bg-black/40 backdrop-blur-sm p-6 rounded-sm border border-green-900/20">
          <span className="text-green-500 font-bold">Shingeki no Kyojin</span>{" "}
          es una obra maestra del dark fantasy que redefine el concepto de
          supervivencia y libertad. La historia nos sumerge en un mundo donde la
          humanidad vive confinada tras muros colosales para protegerse de los{" "}
          <span className="italic text-gray-100">Titanes</span>, seres gigantes
          devoradores de hombres. Lo que comienza como una lucha desesperada,
          evoluciona hacia una compleja trama de conspiraciones políticas y una
          cruda exploración de la naturaleza humana.
        </p>
      </div>
    </section>
  );
}
