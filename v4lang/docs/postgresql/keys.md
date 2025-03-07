---
sidebar_position: 1
title: Keys
slug: keys
---




Keys are one of the basic requirements of a relational database model. It is widely used to identify the tuples(rows) uniquely in the table.

:::info
**tuples**, **records**, or **rows** are used interchangeably to refer to a single data entry in a table.
:::

## Why do we require Keys in a DBMS?

Keys in a DBMS ensure data integrity, prevent duplication, and help uniquely identify records. They also establish relationships between tables, enabling efficient data retrieval and management.

```mermaid
flowchart TB
    X["**Types of SQL Keys**"] --> A["Super Key"] & B["Candidate Key"] & C["Primary Key"] & D["Alternate Key"]  & E["Foreign Key"] & F["Composite Key"]

 X:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF

```

## Super Key
A super key is a group of single or multiple keys that uniquely identifies rows in a table.
- A super key can contain extra attributes that aren’t necessary for uniqueness.
- It can contain NULL values (if extra attributes are included).

<details>
<summary>Example</summary>

Table STUDENT

| STUD_NO | SNAME  | ADDRESS | PHONE     |
|---------|--------|---------|-----------|
| 1       | Shyam  | Delhi   | 123456789 |
| 2       | Rakesh | Kolkata | 223365796 |
| 3       | SNAME  | Delhi   | 175468965 |

In this table, the following are examples of super keys:
- `STUD_NO`
- `(STUD_NO, SNAME)`
- `(STUD_NO, ADDRESS)`
- `(STUD_NO, PHONE)`

:::info
A super key can contain extra attributes that aren’t necessary for uniqueness. For example, `STUD_NO` is sufficient to uniquely identify each row, but `(STUD_NO, SNAME)` is also a super key even though `SNAME` is not necessary for uniqueness.
:::
</details>


## Candidate Key
A candidate key is a super key that does not contain extra attributes and uniquely identifies rows in a table.
- It is a super key with no repeated data is called a candidate key.
- It cannot contain NULL values because it must uniquely identify each row.


:::tip
Every table must have at least a single candidate key.
:::

<details>   
<summary>Example</summary>

Table STUDENT

| STUD_NO | SNAME  | ADDRESS | PHONE     |
|---------|--------|---------|-----------|
| 1       | Shyam  | Delhi   | 123456789 |
| 2       | Rakesh | Kolkata | 223365796 |
| 3       | SNAME  | Delhi   | 175468965 |

In this table, the following are examples of candidate keys:
- `STUD_NO`
- `PHONE`
- `(STUD_NO, PHONE)`

</details>

## Primary Key
A primary key is a candidate key that is selected for uniquely identifying rows in a table.
- A primary key cannot contain NULL values.
- A table can have only one primary key.

<details>
<summary>Example</summary>

### Table: STUDENT

| STUD_NO | SNAME  | ADDRESS | PHONE     |
|---------|--------|---------|-----------|
| 1       | Shyam  | Delhi   | 123456789 |
| 2       | Rakesh | Kolkata | 223365796 |
| 3       | SNAME  | Delhi   | 175468965 |

In this table, the following is an example of a primary key:
- `STUD_NO`

:::note
You may prefer another candidate key as the primary key, and that is also correct as long as it uniquely identifies each row and does not contain NULL values.
:::

### PostgreSQL Implementation

#### Creating a Table with a Primary Key
```sql
CREATE TABLE STUDENT (
    STUD_NO SERIAL PRIMARY KEY, // SERIAL is used to auto-increment the value
    SNAME VARCHAR(100) NOT NULL,
    ADDRESS TEXT NOT NULL,
    PHONE VARCHAR(15) NOT NULL
);
```

#### Inserting Data
```sql
INSERT INTO STUDENT (SNAME, ADDRESS, PHONE) VALUES
('Shyam', 'Delhi', '123456789'),
('Rakesh', 'Kolkata', '223365796'),
('SNAME', 'Delhi', '175468965');
```

#### Selecting Data
```sql
SELECT * FROM STUDENT;
```

#### Altering a Table to Add a Primary Key
If a table is already created without a primary key, you can add one later:
```sql
ALTER TABLE STUDENT ADD CONSTRAINT pk_student PRIMARY KEY (STUD_NO);
```
</details>

## Alternate Key
All the keys that are not selected as the primary key are considered alternate keys.

- An alternate key is also referred to as a **secondary key** because it can uniquely identify records in a table, just like the primary key.

## Foreign Key
A **foreign key** is an attribute in one table that refers to the primary key in another table.

- The table that contains the foreign key is called the **referencing table**, and the table that is referenced is called the **referenced table**.


<details>
<summary>Example</summary>

### Tables: STUDENT & ENROLLMENT

#### STUDENT Table
| STUD_NO | SNAME  | ADDRESS | PHONE     |
|---------|--------|---------|-----------|
| 1       | Shyam  | Delhi   | 123456789 |
| 2       | Rakesh | Kolkata | 223365796 |
| 3       | SNAME  | Delhi   | 175468965 |

#### ENROLLMENT Table
| ENROLL_ID | STUD_NO | COURSE_NAME |
|-----------|---------|-------------|
| 101       | 1       | Math        |
| 102       | 2       | Science     |
| 103       | 3       | History     |

In the `ENROLLMENT` table, the `STUD_NO` column is a **foreign key** that references the `STUD_NO` column in the `STUDENT` table.

### PostgreSQL Implementation

#### Creating Tables with a Foreign Key
```sql
CREATE TABLE STUDENT (
    STUD_NO SERIAL PRIMARY KEY,
    SNAME VARCHAR(100) NOT NULL,
    ADDRESS TEXT NOT NULL,
    PHONE VARCHAR(15) NOT NULL
);

CREATE TABLE ENROLLMENT (
    ENROLL_ID SERIAL PRIMARY KEY,
    STUD_NO INT NOT NULL,
    COURSE_NAME VARCHAR(100) NOT NULL,

    // ON DELETE CASCADE deletes the record from the referencing table
    // if the record in the referenced table is deleted
    FOREIGN KEY (STUD_NO) REFERENCES STUDENT(STUD_NO) ON DELETE CASCADE
);
```

#### Inserting Data
```sql
INSERT INTO ENROLLMENT (STUD_NO, COURSE_NAME) VALUES
(1, 'Math'),
(2, 'Science'),
(3, 'History');
```

#### Selecting Data with Join
```sql
SELECT STUDENT.SNAME, ENROLLMENT.COURSE_NAME 
FROM STUDENT 
JOIN ENROLLMENT ON STUDENT.STUD_NO = ENROLLMENT.STUD_NO;
```
</details>

## Composite Key
A **composite key** is a primary key that consists of two or more columns. It is used when a single column is not sufficient to uniquely identify rows in a table.

<details>
<summary>Example</summary>

### Table: ORDER_DETAILS

| ORDER_ID | PRODUCT_ID | QUANTITY |
|----------|-----------|----------|
| 1        | 101       | 2        |
| 1        | 102       | 1        |
| 2        | 101       | 3        |

In this table, neither `ORDER_ID` nor `PRODUCT_ID` alone can uniquely identify a row. The combination of `ORDER_ID` and `PRODUCT_ID` serves as the **composite primary key**.

### PostgreSQL Implementation

#### Creating a Table with a Composite Key
```sql
CREATE TABLE ORDER_DETAILS (
    ORDER_ID INT NOT NULL,
    PRODUCT_ID INT NOT NULL,
    QUANTITY INT NOT NULL,
    PRIMARY KEY (ORDER_ID, PRODUCT_ID)
);
```

#### Inserting Data
```sql
INSERT INTO ORDER_DETAILS (ORDER_ID, PRODUCT_ID, QUANTITY) VALUES
(1, 101, 2),
(1, 102, 1),
(2, 101, 3);
```

#### Selecting Data
```sql
SELECT * FROM ORDER_DETAILS;
```
</details>