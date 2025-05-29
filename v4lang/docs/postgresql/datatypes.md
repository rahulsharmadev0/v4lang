---
sidebar_position: 2
title: Data Types in PostgreSQL
slug: datatypes
---

# PostgreSQL Data Types

PostgreSQL is a powerful, open-source relational database system known for its extensive support for various data types. Choosing the right data type ensures data integrity, optimizes performance, and improves storage efficiency.

## What Are Data Types?

A data type defines the kind of data that can be stored in a column of a table. PostgreSQL provides a rich set of data types catering to various needs, including numbers, text, dates, structured data, and more.

## Numeric Data Types

### Integer Types (Whole Numbers)
Used for storing whole numbers efficiently.

- **`smallint`** (2 bytes): Range `-32,768` to `32,767`.
- **`integer`** (4 bytes): Range `-2,147,483,648` to `2,147,483,647`.
- **`bigint`** (8 bytes): Range `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`.

### Floating-Point Types (Approximate Numbers)
Used for real numbers where precision is not critical.

- **`real` (`float4`)** (4 bytes): Single-precision floating point.
- **`double precision` (`float8`)** (8 bytes): Double-precision floating point.

### Exact Numeric Types (Precise Values)
Used when accuracy is important, such as financial calculations.

- **`numeric(precision, scale)`**: Stores numbers with user-defined precision.
- **`decimal`**: Alias for `numeric`.

## Character Data Types

Used for storing textual data.

- **`char(n)`**: Fixed-length character string, padded with spaces.
- **`varchar(n)` (`character varying(n)`)**: Variable-length string with a limit.
- **`text`**: Variable-length string without a length restriction.

## Binary Data Types

Used for storing raw binary data.

- **`bytea`**: Binary string storage.
- **`bit(n)`**: Fixed-length binary string.
- **`bit varying(n)` (`varbit(n)`)**: Variable-length binary string.

## Date and Time Data Types

Used for handling temporal data.

- **`date`**: Stores calendar dates.
- **`time`**: Stores time (without date).
- **`timestamp`**: Stores date and time.
- **`timestamptz`**: Stores timestamp with time zone.
- **`interval`**: Represents a span of time.

## Boolean Data Type

Represents logical values.

- **`boolean` (`bool`)**: Stores `TRUE`, `FALSE`, or `NULL`.

## Enumerated (ENUM) Data Type

Used for defining a fixed set of values.

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
```

## Universally Unique Identifier (UUID)

Used for globally unique identifiers.

- **`uuid`**: Stores a 128-bit unique identifier.

## Array Data Types

PostgreSQL supports arrays of any data type.

- **`datatype[]`**: Example: `integer[]` (array of integers).

## JSON Data Types

Used for storing JSON data.

- **`json`**: Stores JSON data (text-based, slower querying).
- **`jsonb`**: Stores JSON data in a binary format (faster, supports indexing).

## Hstore (Key-Value Store)

Used for storing key-value pairs in a single column.

- **`hstore`**: Best for semi-structured data.

## Range Data Types

Used to store a range of values.

- **`int4range`**: Range of integers.
- **`daterange`**: Range of dates.

## Why Choosing the Right Data Type Matters

- **Performance**: Proper data types optimize query execution and storage.
- **Data Integrity**: Ensures data accuracy and consistency.
- **Scalability**: Helps manage large datasets efficiently.

## Conclusion

PostgreSQL provides a rich set of data types, enabling developers to structure data efficiently. Understanding these types ensures better schema design, optimized queries, and improved performance. Choosing the right data type is crucial for building scalable and efficient databases.

