CREATE TABLE "loans" (
	"loan_id"	INTEGER NOT NULL,
	"fullName"	TEXT NOT NULL,
	"amount"	INTEGER NOT NULL,
	"email"	TEXT NOT NULL UNIQUE,
	"status"	TEXT DEFAULT 'PENDING',
	"purpose"	TEXT,
	PRIMARY KEY("loan_id" AUTOINCREMENT)
);