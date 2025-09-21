export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-lg px-4">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg w-32 mx-auto"></div>
      </div>
    </div>
  );
}
