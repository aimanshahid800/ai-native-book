import { WaitlistForm } from "@/components/waitlist-form"

export default function ContactPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Stay in the Loop</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or want to join our exclusive waitlist for the printed edition?
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">Contact Info</h2>
              <p className="text-muted-foreground">hello@ai-native-book.com</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Waitlist Benefits</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Early access to new chapters</li>
                <li>Exclusive webinars with the authors</li>
                <li>Discount on the printed edition</li>
                <li>Community access</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Join the Waitlist</h2>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  )
}
