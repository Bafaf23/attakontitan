export default function Home() {
  return (
    <section className="grow  flex flex-col overflow-hidden items-center justify-center bg-[url(https://img1.wallspic.com/crops/6/9/3/9/1/119396/119396-ataque_en_titan-3840x2160.jpg)] bg-cover bg-center">
      <div className="w-4/5 flex flex-col items-center gap-3">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-green-400">
          Attackon Titan
        </h1>
        <p className="text-slate-50 text-sm md:text-base leading-relaxed tracking-wide font-sans bg-white/20 backdrop-blur-md p-6 rounded-sm border border-white/30">
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
