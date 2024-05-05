import { pgTable, uuid, text, timestamp, serial, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const user = pgTable("user", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name"),
	email: text("email").notNull(),
	password: text("password"),
	emailVerified: timestamp("emailVerified", { mode: 'string' }),
	image: text("image"),
});

export const deviceConnection = pgTable("deviceConnection", {
	id: serial("id").primaryKey().notNull(),
	portName: text("portName").notNull(),
	portNumber: integer("portNumber").notNull(),
	portType: text("portType").notNull(),
	deviceConnectionId: serial("deviceConnectionID").notNull(),
});