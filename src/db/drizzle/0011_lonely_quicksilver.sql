ALTER TABLE "device" ALTER COLUMN "code" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "port" ALTER COLUMN "portName" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "port" ALTER COLUMN "portType" DROP NOT NULL;
