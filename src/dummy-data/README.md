Because the data can be serialised as JSON, we could serve
it from a database-backed server, which would assemble
JSON in the expected format, probably validated using
Pydantic.

Or maybe running Strawberry or even Hasura we can serve
directly from GraphQL if the structure of the database
is right.
