# london-gis-app

Web app for london spatial data

## How to Run

### For Database
Run this command to convert the shp file to sql
*  `shp2pgsql -I -s 4236 gis_osm_landuse_a_free_1.shp land > land.sql`

*  `shp2pgsql -I -s 4236 gis_osm_pois_free_1.shp place > place.sql`

*  `shp2pgsql -I -s 4236 gis_osm_roads_free_1.shp road > road.sql`

Run this command to insert the sql to the database

*  `psql -U <user> -d <dbname> -f land.sql`

*  `psql -U <user> -d <dbname> -f road.sql`

*  `psql -U <user> -d <dbname> -f place.sql`


### For Server

* Run `npm install`

* Create `.env` file (use env.sample as template)

* Run `npm start`


### For Client

* Run `npm install`

* Run `npm start` and open localhost on port 3000