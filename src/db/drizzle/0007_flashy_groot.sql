CREATE TABLE IF NOT EXISTS "ping" (
	"idPing" uuid DEFAULT gen_random_uuid(),
	"date" timestamp DEFAULT now(),
	"status" boolean,
	"packetsLost" real DEFAULT 0,
	"latency" real DEFAULT 0,
	"jitter" real DEFAULT 0
);
--> statement-breakpoint
ALTER TABLE "device" ADD COLUMN "updatedAt" timestamp;