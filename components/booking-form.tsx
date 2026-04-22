"use client";

import { useState } from "react";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import type { Property } from "@/lib/types";

interface BookingFormProps {
  property: Property;
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export function BookingForm({ property }: BookingFormProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState("1");
  const [checkInTime, setCheckInTime] = useState("");

  const nights =
    dateRange?.from && dateRange?.to
      ? differenceInDays(dateRange.to, dateRange.from)
      : 0;

  const subtotal = nights * property.price;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;

  const handleBooking = () => {
    if (!dateRange?.from || !dateRange?.to || !checkInTime) {
      alert("Please fill all details");
      return;
    }

    alert(
      `Booking confirmed!\n\nProperty: ${property.title}\nCheck-in: ${format(
        dateRange.from,
        "PPP"
      )} at ${checkInTime}\nCheck-out: ${format(
        dateRange.to,
        "PPP"
      )}\nGuests: ${guests}\nTotal: ₹${total}`
    );
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
      
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-2xl font-bold">₹{property.price}</span>
        <span className="text-muted-foreground">/ month</span>
      </div>

      <FieldGroup className="gap-4">
        
        {/* Date Picker */}
        <Field>
          <FieldLabel>Select Date</FieldLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dateRange && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 size-4" />
                {dateRange?.from
                  ? format(dateRange.from, "PPP")
                  : "Select date"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateRange?.from}
                onSelect={(date) =>
                  setDateRange({ from: date, to: date })
                }
                disabled={{ before: new Date() }}
              />
            </PopoverContent>
          </Popover>
        </Field>

        {/* Time */}
        <Field>
          <FieldLabel>Visit Time</FieldLabel>
          <Select value={checkInTime} onValueChange={setCheckInTime}>
            <SelectTrigger className="w-full">
              <Clock className="mr-2 size-4 text-muted-foreground" />
              <SelectValue placeholder="Select time" />
            </SelectTrigger>

            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        {/* Guests */}
        <Field>
          <FieldLabel>Guests</FieldLabel>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full">
              <Users className="mr-2 size-4 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {Array.from({ length: property.guests }, (_, i) => i + 1).map(
                (num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "guest" : "guests"}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>

      {/* Button */}
      <Button
        className="mt-6 w-full"
        size="lg"
        onClick={handleBooking}
      >
        Book Visit
      </Button>
    </div>
  );
}