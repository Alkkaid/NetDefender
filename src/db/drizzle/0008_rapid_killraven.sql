ALTER TABLE "ping" ADD COLUMN "idDc" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ping" ADD CONSTRAINT "ping_idDc_deviceConnection_id_dc_fk" FOREIGN KEY ("idDc") REFERENCES "deviceConnection"("id_dc") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
