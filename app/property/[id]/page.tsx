import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  MapPin,
  Star,
} from "lucide-react";

import { Header } from "@/components/header";
import { BookingForm } from "@/components/booking-form";
import { Separator } from "@/components/ui/separator";
import { properties } from "@/lib/data";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {

  // ✅ FIX: unwrap params
  const { id } = await params;

  const property = properties.find(
    (p) => String(p.id) === String(id)
  );

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Back */}
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="size-4" />
          Back
        </Link>

        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold">{property.title}</h1>

        {/* Image */}
        <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* Rating + Location */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <Star className="size-4 text-yellow-500" />
                <span>{property.rating}</span>
                <span className="text-muted-foreground">
                  ({property.reviews})
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" />
                {property.location}
              </div>
            </div>

            {/* Details */}
            <div className="mb-6 flex gap-6">
              <span>{property.bedrooms} beds</span>
              <span>{property.bathrooms} baths</span>
              <span>{property.guests} guests</span>
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <p className="mb-6 text-muted-foreground">
              {property.description}
            </p>

            <Separator className="my-6" />

            {/* Amenities */}
            <div>
              <h2 className="mb-3 font-semibold">Amenities</h2>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div>
            <BookingForm property={property} />
          </div>

        </div>
      </main>
    </div>
  );
}