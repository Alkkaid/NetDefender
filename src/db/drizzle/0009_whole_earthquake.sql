ALTER TABLE "ping" DROP CONSTRAINT "ping_idDc_deviceConnection_id_dc_fk";
--> statement-breakpoint
ALTER TABLE "ping" DROP COLUMN IF EXISTS "idDc";