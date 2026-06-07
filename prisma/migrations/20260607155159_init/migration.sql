-- CreateTable
CREATE TABLE "Guru" (
    "id" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "era" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "lineage" JSONB NOT NULL,
    "discipleOf" JSONB NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "summary" JSONB NOT NULL,
    "biography" JSONB NOT NULL,
    "birthDate" TEXT NOT NULL,
    "deathDate" TEXT NOT NULL,
    "birthPlace" JSONB NOT NULL,
    "majorContributions" JSONB NOT NULL,
    "timeline" JSONB NOT NULL,
    "teachings" JSONB NOT NULL,
    "relatedAshramIds" TEXT[],
    "relatedEventIds" TEXT[],

    CONSTRAINT "Guru_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ashram" (
    "id" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "coverUrl" TEXT NOT NULL,
    "galleryUrls" TEXT[],
    "establishedDate" TEXT NOT NULL,
    "builtByGuruId" TEXT NOT NULL,
    "purpose" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "dailySchedule" JSONB NOT NULL,
    "facilities" JSONB NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "upcomingEventIds" TEXT[],
    "residentGuruIds" TEXT[],

    CONSTRAINT "Ashram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "location" JSONB NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "galleryUrls" TEXT[],
    "ticketPrice" DOUBLE PRECISION NOT NULL,
    "availableTickets" INTEGER NOT NULL,
    "registrationsCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "stock" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductReview" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" JSONB NOT NULL,
    "summary" JSONB NOT NULL,
    "content" JSONB NOT NULL,
    "author" TEXT NOT NULL,
    "publishDate" TEXT NOT NULL,
    "readTime" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "experience" JSONB NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" TEXT NOT NULL,
    "passwordHash" TEXT,
    "savedEventIds" TEXT[],
    "wishlistProductIds" TEXT[],
    "shippingAddress" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "items" JSONB NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "couponCode" TEXT,
    "discount" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "shippingAddress" JSONB NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "trackingNumber" TEXT,
    "orderDate" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomepageData" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "appName" JSONB NOT NULL,
    "ashramSlogan" JSONB NOT NULL,
    "heroSlides" JSONB NOT NULL,

    CONSTRAINT "HomepageData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutUsData" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "aboutUsTitle" JSONB NOT NULL,
    "aboutUsSub" JSONB NOT NULL,
    "aboutUsDescription" JSONB NOT NULL,
    "aboutUsBgUrl" TEXT NOT NULL,

    CONSTRAINT "AboutUsData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
