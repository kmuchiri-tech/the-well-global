"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Share2 } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  events,
  eventCategories,
  type Event,
  type EventCategory,
} from "@/data/events";
import { formatEventDate, cn } from "@/lib/utils";

export function EventsListing() {
  const [filter, setFilter] = useState<EventCategory | "All">("All");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const featured = events.find((e) => e.featured && !e.isPast);
  const upcoming = events.filter(
    (e) => !e.isPast && e.id !== featured?.id && (filter === "All" || e.category === filter)
  );
  const past = events.filter(
    (e) => e.isPast && (filter === "All" || e.category === filter)
  );

  const handleShare = async (event: Event) => {
    const text = `${event.title} — ${formatEventDate(event.date, event.endDate)}`;
    if (navigator.share) {
      await navigator.share({ title: event.title, text });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Event details copied to clipboard.");
    }
  };

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
            <button
              type="button"
              onClick={() => setFilter("All")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                filter === "All"
                  ? "bg-well-blue text-white"
                  : "bg-soft-gray text-deep-navy hover:bg-silver"
              )}
            >
              All
            </button>
            {eventCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  filter === cat
                    ? "bg-well-blue text-white"
                    : "bg-soft-gray text-deep-navy hover:bg-silver"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured && filter === "All" && (
            <div className="mb-16">
              <SectionHeading
                title="Featured Event"
                centered={false}
                className="mb-8"
              />
              <div className="rounded-2xl border-2 border-well-blue/30 bg-gradient-to-br from-well-blue/5 to-soft-gray p-8 lg:p-12">
                <span className="rounded-full bg-well-blue px-3 py-1 text-xs font-bold uppercase text-white">
                  Featured
                </span>
                <h3 className="mt-4 font-serif text-3xl font-bold text-deep-navy">
                  {featured.title}
                </h3>
                <p className="mt-2 text-well-blue font-semibold">
                  {formatEventDate(featured.date, featured.endDate)}
                  {featured.time && ` · ${featured.time}`}
                </p>
                <p className="mt-1 text-deep-navy/60">{featured.location}</p>
                <p className="mt-4 max-w-2xl text-deep-navy/70">
                  {featured.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={featured.registerUrl ?? "/get-involved"} className="btn-primary">
                    Register
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(featured)}
                    className="btn-outline"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => handleShare(featured)}
                    className="inline-flex items-center gap-2 rounded-full border border-silver px-6 py-3 text-sm font-semibold text-deep-navy hover:border-well-blue hover:text-well-blue"
                    aria-label={`Share ${featured.title}`}
                  >
                    <Share2 className="h-4 w-4" aria-hidden="true" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming */}
          <div className="mb-16">
            <SectionHeading title="Upcoming Events" centered={false} className="mb-8" />
            {upcoming.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((event, i) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    endDate={event.endDate}
                    time={event.time}
                    location={event.location}
                    description={event.description}
                    registerUrl={event.registerUrl}
                    index={i}
                    onSelect={() => setSelectedEvent(event)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No upcoming events"
                description="Check back soon or adjust your filter."
              />
            )}
          </div>

          {/* Past */}
          <div>
            <SectionHeading title="Past Events" centered={false} className="mb-8" />
            {past.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {past.map((event, i) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    endDate={event.endDate}
                    time={event.time}
                    location={event.location}
                    description={event.description}
                    index={i}
                    onSelect={() => setSelectedEvent(event)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState title="No past events" description="Past events will appear here." />
            )}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep-navy/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-deep-navy hover:bg-soft-gray"
              aria-label="Close event details"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="rounded-full bg-well-blue/10 px-3 py-1 text-xs font-semibold text-well-blue">
              {selectedEvent.category}
            </span>
            <h2 id="event-modal-title" className="mt-4 font-serif text-2xl font-bold text-deep-navy">
              {selectedEvent.title}
            </h2>
            <p className="mt-2 font-semibold text-well-blue">
              {formatEventDate(selectedEvent.date, selectedEvent.endDate)}
              {selectedEvent.time && ` · ${selectedEvent.time}`}
            </p>
            <p className="mt-1 text-deep-navy/60">{selectedEvent.location}</p>
            <p className="mt-4 leading-relaxed text-deep-navy/70">
              {selectedEvent.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={selectedEvent.registerUrl ?? "/get-involved"}
                className="btn-primary px-4 py-2 text-xs"
              >
                Register
              </Link>
              <button
                type="button"
                onClick={() => handleShare(selectedEvent)}
                className="inline-flex items-center gap-2 rounded-full border border-silver px-4 py-2 text-xs font-semibold text-deep-navy hover:border-well-blue"
              >
                <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
