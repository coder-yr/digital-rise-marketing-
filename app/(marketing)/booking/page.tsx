import type { Metadata } from "next";
import BookingClient from "./client";

export const metadata: Metadata = {
    title: "Book a Strategy Call | DigitalRise",
    description: "Schedule a 30-minute strategy session to discuss your digital growth.",
};

export default function BookingPage() {
    return <BookingClient />;
}
