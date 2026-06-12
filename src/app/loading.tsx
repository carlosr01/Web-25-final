export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e]">
      <div className="w-full max-w-3xl p-6">
        <div className="h-6 bg-slate-700/40 rounded mb-4 animate-pulse" />
        <div className="h-40 bg-slate-800/40 rounded mb-4 animate-pulse" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 bg-slate-800/40 rounded animate-pulse" />
          <div className="h-24 bg-slate-800/40 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}
