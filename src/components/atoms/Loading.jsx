export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-green-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-green-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-green-500 font-mono text-sm tracking-widest uppercase animate-pulse">
        Sincronizando con la Policía Militar...
      </p>
    </div>
  );
}
