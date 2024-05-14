ALTER TABLE "ping" ADD PRIMARY KEY ("idPing");--> statement-breakpoint
ALTER TABLE "ping" ALTER COLUMN "idPing" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "ping" ALTER COLUMN "date" SET DATA TYPE timestamp (3) with time zone;