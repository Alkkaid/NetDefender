CREATE TABLE IF NOT EXISTS "device" (
	"id_device" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"createdAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deviceConnection" (
	"id_dc" serial PRIMARY KEY NOT NULL,
	"ip" text NOT NULL,
	"mac" text NOT NULL,
	"name" text,
	"os" text,
	"brand" text,
	"id_device" uuid NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "port" (
	"id_port" serial PRIMARY KEY NOT NULL,
	"portName" text NOT NULL,
	"portNumber" integer NOT NULL,
	"portType" text NOT NULL,
	"id_dc" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_devices" (
	"id_relation" serial NOT NULL,
	"id_device" uuid NOT NULL,
	"userId" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "userId" SET DATA TYPE uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "deviceConnection" ADD CONSTRAINT "deviceConnection_id_device_device_id_device_fk" FOREIGN KEY ("id_device") REFERENCES "device"("id_device") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "port" ADD CONSTRAINT "port_id_dc_deviceConnection_id_dc_fk" FOREIGN KEY ("id_dc") REFERENCES "deviceConnection"("id_dc") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_devices" ADD CONSTRAINT "users_devices_id_device_device_id_device_fk" FOREIGN KEY ("id_device") REFERENCES "device"("id_device") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_devices" ADD CONSTRAINT "users_devices_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
