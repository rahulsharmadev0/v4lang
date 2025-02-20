---
sidebar_position: 0
title: SQL Commands
---

## **What are SQL Commands?**

SQL commands are the fundamental building blocks for interacting with a **DBMS**. They perform various operations such as creating tables, inserting data, querying information, and managing access and security.

SQL commands are categorized into different types, each serving a specific purpose in database management:

```mermaid
flowchart TB
    A["**Types of SQL Commands**"] --> B["DDL"] & C["DML"] & D["TCL"] & E["DQL"] & F["DCL"]

    A:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
```

## **Types of SQL Commands**

### **DDL (Data Definition Language)**

Data Definition Language (DDL) commands are used to define and manage database structures such as tables, indexes, and schemas.

```mermaid
flowchart TB
  B["DDL"] --> B1["CREATE"] & B2["DROP"] & B3["ALTER"] & B4["TRUNCATE"]

  B:::Pine
  classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
```

:::tip INFO

- **CREATE:** Creates a new table or database.
- **ALTER:** Modifies an existing database object.
- **DROP:** Deletes an entire table, database, or other objects.
- **TRUNCATE:** Removes all records from a table, deleting the space allocated for the records.
  :::

### **DML (Data Manipulation Language)**

Data Manipulation Language (DML) commands are used for managing data within schema objects.

```mermaid
flowchart TB
    C["DML"] --> C1["INSERT"] & C2["UPDATE"] & C3["DELETE"]
    C --> C4["CALL"] & C5["EXPLAIN CALL"] & C6["LOCK"]

    C:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
```

:::tip INFO

- **INSERT:** Adds new data to a table.
- **UPDATE:** Modifies existing data within a table.
- **DELETE:** Removes data from a table.
- **CALL:** Executes a stored procedure.
- **EXPLAIN CALL:** Provides information about how a stored procedure is executed.
- **LOCK:** Locks a table or a row for a transaction.
  :::

### **DCL (Data Control Language)**

Data Control Language (DCL) commands are used to control access to data within the database.

```mermaid
flowchart TB
    F["DCL"] --> F1["GRANT"] & F2["REVOKE"]

    F:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
```

:::tip INFO

- **GRANT:** Gives users access privileges to the database.
- **REVOKE:** Removes access privileges given with the GRANT command.
  :::

### **TCL (Transaction Control Language)**

Transaction Control Language (TCL) commands are used to manage transactions in the database.

```mermaid
flowchart TB
    D["TCL"] --> D1["COMMIT"] & D2["SAVEPOINT"] & D3["ROLLBACK"]
    D --> D4["SET TRANSACTION"]

    D:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
```

:::tip INFO

- **COMMIT:** Saves all changes made in the current transaction.
- **ROLLBACK:** Restores the database to the last committed state.
- **SAVEPOINT:** Sets a savepoint within a transaction.
- **SET TRANSACTION:** Places a name on a transaction.
  :::

### **DQL (Data Query Language)**

Data Query Language (DQL) commands are used to query the database for information.

```mermaid
flowchart TB
    E["DQL"] --> E1["SELECT"]

    E:::Pine
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
```

:::tip INFO

- **SELECT:** Retrieves data from the database.
  :::
