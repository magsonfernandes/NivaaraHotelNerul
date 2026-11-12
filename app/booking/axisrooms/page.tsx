import type { Metadata } from "next";

const bookingEngineUrl =
  "https://nivaara.axisrooms.com/search?bookingEngineId=5044";

export const metadata: Metadata = {
  title: "Book your stay | Nivaãra",
  description: "Book your stay at Nivaãra by GHD Hotels.",
};

export default function AxisRoomsBookingPage() {
  return (
    <main style={{ width: "100%", minHeight: "100vh" }}>
      <iframe
        title="Nivaãra booking engine"
        src={bookingEngineUrl}
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          display: "block",
          width: "100%",
          height: "100vh",
          border: 0,
        }}
      />
    </main>
  );
}
