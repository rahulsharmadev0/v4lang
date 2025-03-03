---
title: Data Manipulation Language
slug: dml
---

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
