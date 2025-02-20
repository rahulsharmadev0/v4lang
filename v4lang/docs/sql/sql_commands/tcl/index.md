---
title: Transaction Control Language
slug: ../tcl
---

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
