"use client";

import Link from "next/link";
import { Bath, Bed, MapPin, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`}>
      <Card className="group overflow-hidden border-border transition-shadow hover:shadow-lg cursor-pointer">
        
        {/* ✅ FIXED IMAGE */}
        <div style={{ height: "200px", width: "100%" }}>
          <img
            src={property.image}
            alt={property.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              <span>{property.location}</span>
            </div>

            <div className="flex items-center gap-1">
              <Star className="size-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{property.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({property.reviews})
              </span>
            </div>
          </div>

          <h3 className="mb-2 text-lg font-semibold text-foreground">
            {property.title}
          </h3>

          <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="size-4" />
              <span>{property.bedrooms} beds</span>
            </div>

            <div className="flex items-center gap-1">
              <Bath className="size-4" />
              <span>{property.bathrooms} baths</span>
            </div>

            <div className="flex items-center gap-1">
              <Users className="size-4" />
              <span>{property.guests} guests</span>
            </div>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-foreground">
              ₹{property.price}
            </span>
            <span className="text-sm text-muted-foreground">/ month</span>
          </div>
        </CardContent>

      </Card>
    </Link>
  );
}