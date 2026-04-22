"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/header";
import { PropertyCard } from "@/components/property-card";
import { Input } from "@/components/ui/input";
import { properties } from "@/lib/data";

export default function HomePage() {
  const [search, setSearch] = useState("");

  // Simple filter (makes app feel real)
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Find your perfect rental
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-muted-foreground">
              Discover rooms, flats and homes near you
            </p>

            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />


                <Input
                  type="text"
                  placeholder="Search by city or property..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-14 rounded-full pl-12 pr-4 text-base shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Property Listings */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">
                Featured Properties
              </h2>

              <span className="text-sm text-muted-foreground">
                {filteredProperties.length} properties available
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            2026 RentEase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}