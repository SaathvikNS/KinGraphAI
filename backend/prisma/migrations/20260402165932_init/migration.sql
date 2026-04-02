-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "RelationType" AS ENUM ('PARENT', 'CHILD', 'SPOUSE', 'SIBLING');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('BIRTH', 'DEATH', 'MARRIAGE', 'DIVORCE', 'ADOPTION', 'CUSTOM');

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "normalized_name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'UNKNOWN',
    "birth_date" TIMESTAMP(3),
    "death_date" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relationship" (
    "id" TEXT NOT NULL,
    "from_person_id" TEXT NOT NULL,
    "to_person_id" TEXT NOT NULL,
    "relation_type" "RelationType" NOT NULL,
    "confidence_score" DOUBLE PRECISION,
    "source" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Relationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "person_id" TEXT NOT NULL,
    "event_type" "EventType" NOT NULL,
    "event_date" TIMESTAMP(3),
    "description" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Relationship_from_person_id_idx" ON "Relationship"("from_person_id");

-- CreateIndex
CREATE INDEX "Relationship_to_person_id_idx" ON "Relationship"("to_person_id");

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_from_person_id_fkey" FOREIGN KEY ("from_person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_to_person_id_fkey" FOREIGN KEY ("to_person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
