---
sidebar_position: 1
slug: select
title: Select
description: Learn how to use the SELECT statement in PostgreSQL to retrieve data, filter results, and much more.
---

# SELECT Statement in PostgreSQL  

The `SELECT` statement is the **core command** for retrieving data from tables in a PostgreSQL database. It is one of the most powerful and flexible SQL statements, allowing you to **filter, sort, group, and combine data** based on various conditions.  

:::info
Due to its complexity, this guide breaks down `SELECT` into **simple, easy-to-follow tutorials**, helping you learn each clause step by step.  
:::

## Overview of SELECT

Here’s a structured view of the `SELECT` statement:  

```sql title="Simplified Structure"
WITH [ RECURSIVE ] cte_name AS ( subquery )  -- Common Table Expressions (optional)
SELECT [ ALL | DISTINCT [ ON (column) ] ]    -- Remove duplicates if needed
       column1, column2, function(column3)   -- Select specific columns or expressions
FROM table_name                              -- Specify the table
JOIN another_table ON condition              -- Join with other tables (optional)
WHERE condition                              -- Filter rows based on a condition
GROUP BY column                              -- Group rows (for aggregation)
HAVING condition                             -- Filter groups (works with GROUP BY)
ORDER BY column [ ASC | DESC ]               -- Sort the results
LIMIT count OFFSET start                     -- Limit the number of rows
FETCH FIRST count ROWS ONLY                  -- Alternative to LIMIT
FOR UPDATE                                   -- Lock rows for update (optional)
```
## Mastering SELECT: Think Like a Chef! 🍽️
Imagine you are a chef in a restaurant, and your job is to prepare the perfect dish (query result) for your customers (users). The SELECT statement in PostgreSQL is like following a recipe step by step to get the best dish possible.

Think of the `SELECT` statement as preparing a perfect dish:

1. Prepare temporary ingredients (`WITH`).
1. Gather the right ingredients (`FROM`, `JOIN`).
1. Remove bad items (`WHERE`).
1. Group and refine (`GROUP BY`, `HAVING`).
1. Format the final dish (`SELECT`).
1. Avoid duplicates (`DISTINCT`).
1. Combine different meals (`UNION`, `INTERSECT`, `EXCEPT`).
1. Arrange beautifully (`ORDER BY`).
1. Serve in the right portion (`LIMIT`, `OFFSET`).
1. Reserve the table for the customer (`FOR UPDATE`).

Now, whenever you write a SELECT query, just think like a chef and follow the recipe! 🍽️👨‍🍳