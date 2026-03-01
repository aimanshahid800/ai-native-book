export default function Loading() {
  return (
    <div className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-sm font-medium text-muted-foreground">Loading experience...</p>
      </div>
    </div>
  )
}
