export type LanguageCode = 'en' | 'hi' | 'gu' | 'bn';

export interface LocalizedString {
  en: string;
  hi: string;
  gu: string;
  bn: string;
}

export interface TimelineEvent {
  year: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface Teaching {
  id: string;
  title: LocalizedString;
  type: 'quote' | 'article' | 'book_excerpt';
  content: LocalizedString;
}

export interface Guru {
  id: string;
  name: LocalizedString;
  era: string;
  country: string;
  lineage: LocalizedString;
  discipleOf: LocalizedString;
  photoUrl: string;
  summary: LocalizedString;
  biography: LocalizedString;
  birthDate: string;
  deathDate: string;
  birthPlace: LocalizedString;
  majorContributions: LocalizedString[];
  timeline: TimelineEvent[];
  teachings: Teaching[];
  relatedAshramIds: string[];
  relatedEventIds: string[];
}

export interface OperationalSchedule {
  time: string;
  activity: LocalizedString;
}

export interface Ashram {
  id: string;
  name: LocalizedString;
  coverUrl: string;
  galleryUrls: string[];
  establishedDate: string;
  builtByGuruId: string;
  purpose: LocalizedString;
  description: LocalizedString;
  country: string;
  state: string;
  city: string;
  latitude: number;
  longitude: number;
  dailySchedule: OperationalSchedule[];
  facilities: LocalizedString[];
  contactEmail: string;
  contactPhone: string;
  upcomingEventIds: string[];
  residentGuruIds: string[];
}

export interface AshramEvent {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  date: string;
  time: string;
  location: LocalizedString;
  imageUrl: string;
  isActive: boolean;
  galleryUrls: string[];
  ticketPrice: number;
  availableTickets: number;
  registrationsCount: number;
}

export type ProductCategory = 'Books' | 'Clothing' | 'Accessories' | 'Spiritual Items' | 'Donations';

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  category: ProductCategory;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  stock: number;
  rating: number;
  reviews: ProductReview[];
}

export interface BlogArticle {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString;
  author: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  experience: LocalizedString;
  rating: number;
  country: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'Super Admin' | 'Content Manager' | 'Store Manager' | 'Devotee';
  savedEventIds: string[];
  wishlistProductIds: string[];
  shippingAddress?: ShippingAddress;
}

export interface ShippingAddress {
  fullName: string;
  addressLines: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface OrderItem {
  productId: string;
  productName: LocalizedString;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  couponCode?: string;
  discount: number;
  total: number;
  shippingAddress: ShippingAddress;
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  orderStatus: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  trackingNumber?: string;
  orderDate: string;
}

export interface HeroSlide {
  title: LocalizedString;
  sub: LocalizedString;
  action: string;
  bg: string;
}

export interface HomepageData {
  appName: LocalizedString;
  ashramSlogan: LocalizedString;
  heroSlides: HeroSlide[];
}

export interface AboutUsData {
  aboutUsTitle: LocalizedString;
  aboutUsSub: LocalizedString;
  aboutUsDescription: LocalizedString;
  aboutUsBgUrl: string;
}
