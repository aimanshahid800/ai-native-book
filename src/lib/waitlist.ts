export interface WaitlistEntry {
  email: string;
  name?: string;
  timestamp: string;
}

const WAITLIST_KEY = "ai_native_book_waitlist";

export function joinWaitlist(email: string, name?: string): { success: boolean; message: string } {
  if (typeof window === "undefined") return { success: false, message: "Client-side only" };

  try {
    const existingData = localStorage.getItem(WAITLIST_KEY);
    const waitlist: WaitlistEntry[] = existingData ? JSON.parse(existingData) : [];

    if (waitlist.some((entry) => entry.email === email)) {
      return { success: false, message: "You are already on the waitlist!" };
    }

    const newEntry: WaitlistEntry = {
      email,
      name,
      timestamp: new Date().toISOString(),
    };

    waitlist.push(newEntry);
    localStorage.setItem(WAITLIST_KEY, JSON.stringify(waitlist));

    return { success: true, message: "Successfully joined the waitlist!" };
  } catch (error) {
    console.error("Error saving to waitlist:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export function getWaitlistStatus(email: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    const existingData = localStorage.getItem(WAITLIST_KEY);
    if (!existingData) return false;

    const waitlist: WaitlistEntry[] = JSON.parse(existingData);
    return waitlist.some((entry) => entry.email === email);
  } catch {
    return false;
  }
}
