function ConfideContentSkeleton() {
  return (
    <div className="animate-pulse flex space-x-4 pt-8 mb-8">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-8 bg-slate-200 rounded"></div>
        <div className="space-y-3">
          <div className="h-2 w-40 bg-slate-200 rounded col-span-1"></div>
          <div className="h-2 w-32 bg-slate-200 rounded col-span-2"></div>
          <div className="h-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default ConfideContentSkeleton;
