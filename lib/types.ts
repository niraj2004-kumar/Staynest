export interface Property {
  id: string
  title: string
  location: string
  price: number
  rating: number
  reviews: number
  bedrooms: number
  bathrooms: number
  guests: number
  image: string
  amenities: string[]
  description: string
  host: {
    name: string
    avatar: string
    joinedDate: string
  }
}

export interface Booking {
  propertyId: string
  checkIn: Date
  checkOut: Date
  guests: number
  time?: string
}
