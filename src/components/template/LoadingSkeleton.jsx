export default function LoadingSkeleton() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 animate-pulse">
      <div className="h-8 bg-slate-400 rounded w-48 mb-6"></div>
      <div className="h-4 bg-slate-400 rounded w-80 mb-4"></div>
      <div className="h-4 bg-slate-400 rounded w-64"></div>
    </div>
  );
}
