---
title: Data Definition Language
---

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
- **TRUNCATE:** Removes all records from a table, deleting the space allocated for the

:::
