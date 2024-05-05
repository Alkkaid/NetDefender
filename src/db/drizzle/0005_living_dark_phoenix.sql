ALTER TABLE "device" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "deviceConnection" ALTER COLUMN "createdAt" SET DEFAULT now();