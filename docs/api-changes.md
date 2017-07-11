* publications: type for Publications should be a word/phrase e.g. "Book Chapter" rather than a code/letter e.g. "C", so we can use it as a heading or column value etc

* publications: maybe we want the year as a separate field, for sorting or something?

* `_email` changed to `email`

* associations: various updates school -> college, faculty -> division; 

* salutation: used to be abbreviated e.g. "A/Prof", "Empro", but we want it in proper english e.g. "Associate Professor", "Emeritus Professor" (or is it "Professor Emeritus"?)

* locations: rethink the data to add `map_url`, and hence we don't need to be as specific with ids etc

* honours: removed underscore from `type` field.

* `eprints_id` is now `eprints_url`

* `employee_id` removed

* `email_id` is actually the profile id, it should be renamed or something

* suffix - new field for qualifications

* supervision: make the year an integer