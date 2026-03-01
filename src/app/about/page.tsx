export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-24">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About the Book</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            AI-Native Book is a comprehensive guide to building the next generation of software.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4">The Vision</h2>
          <p>
            We are entering an era where AI is not just an add-on, but the core engine of our applications.
            This book explores how this shift changes everything: from how we structure our data and
            architect our backends, to how we design our user interfaces.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4">The Author</h2>
          <p>
            Written by a team of engineers and architects at the forefront of the AI revolution,
            this book distills years of experience building production-grade AI systems into
            actionable patterns and principles.
          </p>
          <p className="mt-8">
            Whether you're a senior developer, an architect, or a product leader, this book
            provides the mental models needed to navigate the AI-native landscape.
          </p>
        </div>
      </div>
    </div>
  )
}
