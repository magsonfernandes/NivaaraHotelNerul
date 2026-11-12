import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { BookingContent } from "@/components/booking/BookingContent";
import { Footer } from "@/components/Footer";

type BookingPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Book Hotel Rooms in Nerul, North Goa | Nivaãra",
  description:
    "Book hotel rooms in Nerul, North Goa at Nivaãra by GHD Hotels. Choose studio and luxury rooms near Coco Beach, Candolim & Calangute.",
};

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const hasBookingContext = Boolean(
    params.property && params.checkIn && params.checkOut,
  );

  return (
    <>
      <Header />
      <main>
        {hasBookingContext ? (
          <Suspense
            fallback={
              <section className="bg-muted px-6 py-32 text-center lg:px-10">
                <p className="font-body text-sm text-grey">
                  Loading booking details…
                </p>
              </section>
            }
          >
            <BookingContent />
          </Suspense>
        ) : (
          <iframe
            title="Nivaãra booking engine"
            src="https://nivaara.axisrooms.com/search?bookingEngineId=5044"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              display: "block",
              width: "100%",
              minHeight: "100vh",
              border: 0,
            }}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
