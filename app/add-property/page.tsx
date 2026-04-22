"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ImagePlus, Upload } from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const amenitiesList = [
  "WiFi","Kitchen","Pool","Hot Tub","Air Conditioning","Heating",
  "Washer","Dryer","Parking","Gym","Beach Access","Mountain View",
  "City View","Fireplace","BBQ","Workspace",
];

export default function AddPropertyPage() {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file: any) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Property listing created (demo)");
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <h1 className="mb-6 text-3xl font-bold">List Your Property</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* BASIC INFO */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup className="gap-6">
                <Field>
                  <FieldLabel>Property Title</FieldLabel>
                  <Input placeholder="Modern Villa" required />
                </Field>

                <Field>
                  <FieldLabel>Description</FieldLabel>
                  <Textarea rows={4} required />
                </Field>

                <Field>
                  <FieldLabel>Location</FieldLabel>
                  <Input required />
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>

          {/* DETAILS */}
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Bedrooms" /></SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5].map(n => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger><SelectValue placeholder="Bathrooms" /></SelectTrigger>
                  <SelectContent>
                    {[1,2,3].map(n => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger><SelectValue placeholder="Guests" /></SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5].map(n => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <Field className="mt-4">
                <FieldLabel>Price</FieldLabel>
                <Input type="number" required />
              </Field>
            </CardContent>
          </Card>

          {/* PHOTOS (FIXED) */}
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed p-6 text-center">

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  id="fileInput"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />

                <ImagePlus className="mx-auto mb-4 size-12 text-gray-400" />

                <p>Drag and drop your photos here</p>
                <p className="text-sm text-gray-500 mb-3">
                  or click to browse files
                </p>

                <Button
                  type="button"
                  onClick={() =>
                    document.getElementById("fileInput")?.click()
                  }
                >
                  <Upload className="mr-2 size-4" />
                  Upload Photos
                </Button>

                {/* PREVIEW */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {images.map((img, i) => (
                    <img key={i} src={img} className="h-32 w-full object-cover rounded" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AMENITIES */}
          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {amenitiesList.map((a) => (
                  <label key={a} className="flex gap-2">
                    <Checkbox
                      checked={selectedAmenities.includes(a)}
                      onCheckedChange={() => toggleAmenity(a)}
                    />
                    {a}
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Separator />

          <div className="flex justify-end gap-3">
            <Button variant="outline" asChild>
              <Link href="/">Cancel</Link>
            </Button>
            <Button type="submit">List Property</Button>
          </div>

        </form>
      </main>
    </div>
  );
}