ALTER TABLE "device" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users_devices" ADD PRIMARY KEY ("id_relation");--> statement-breakpoint
ALTER TABLE "device" ADD COLUMN "code" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "device" ADD COLUMN "isCodeUsed" boolean DEFAULT false;