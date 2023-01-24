CREATE TABLE public.landlords (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"neighborhood" varchar(255) NOT NULL,
	CONSTRAINT "landlords_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.users (
	"username" varchar(255) NOT NULL,
	"id" serial NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.reviews (
	"reviewer_id" serial NOT NULL,
	"id" serial NOT NULL,
	"review" varchar(1000) NOT NULL,
	"pictures" bytea,
	"landlord_id" serial NOT NULL,
	"rating" serial NOT NULL,
	"rent_again" BOOLEAN NOT NULL,
	"date" DATE NOT NULL,
	"address" varchar(255)
	CONSTRAINT "reviews_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.properties (
	"landlord_id" serial NOT NULL,
	"id" serial NOT NULL,
	"address" varchar(255) NOT NULL,
	"neighborhood" varchar(255) NOT NULL,
	"zip" numeric(255),
	CONSTRAINT "properties_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE public.reviews ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("reviewer_id") REFERENCES "users"("id");
ALTER TABLE public.reviews ADD CONSTRAINT "reviews_fk1" FOREIGN KEY ("landlord_id") REFERENCES "landlords"("id");

ALTER TABLE public.properties ADD CONSTRAINT "properties_fk0" FOREIGN KEY ("landlord_id") REFERENCES "landlords"("id");





