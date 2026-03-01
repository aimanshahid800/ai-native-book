export default function BookLoading() {
  return (
    <div className="container relative py-10 px-4 sm:px-8">
      <div className="fixed top-16 left-0 z-50 h-1 w-full bg-muted"></div>
      <div className="flex flex-col gap-10 lg:flex-row">
        <aside className="sticky top-24 hidden h-[calc(100vh-8rem)] w-64 shrink-0 lg:block">
          <div className="space-y-4">
            <div className="h-6 w-24 animate-pulse rounded bg-muted"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-full animate-pulse rounded bg-muted/50"></div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex-1 space-y-20 max-w-3xl mx-auto lg:mx-0">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-10 w-3/4 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted/50"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted/50"></div>
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted/50"></div>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
