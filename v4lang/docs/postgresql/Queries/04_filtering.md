---
sidebar_position: 3
slug: filtering
title: Filtering
---

# Filtering

WHERE clause to filter rows returned by a SELECT statement.

```sql title="Syntax:"
SELECT column_list
FROM table_name
WHERE condition;
```

you use comparison and logical operators:

|Operator|	Description|
|--|--|
|`=`|	Equal|
|`>`|	Greater than|
|`<`|	Less than|
|`>=`|	Greater than or equal|
|`<=`|	Less than or equal|
|`<> or !=`|	Not equal|
|`AND`|	Logical operator AND|
|`OR`|	Logical operator OR|
|`IN`|	Return true if a value matches any value in a list|
|`BETWEEN`|	Return true if a value is between a range of values|
|`LIKE`|	Return true if a value matches a pattern|
|`IS NULL`|	Return true if a value is NULL|
|`NOT`|	Negate the result of other operator|s

---

## 🍽️ How Filtering Works in a Restaurant  
In a restaurant, not every dish is for every customer. Some want **spicy food**, some prefer **vegetarian options**, and others have **specific dietary restrictions**.  

Just like a **chef customizes a menu** based on customer preferences, The `WHERE` clause helps us find **specific orders**:  

### 1️. Finding a Dish by Exact Match (`=`)
🔎 *“Show me all orders where the dish is ‘Pasta’.”*  

```sql
SELECT * FROM orders
WHERE dish = 'Pasta';
```

---

### 2️. Finding Orders Above/Below a Certain Price (`>`, `<`, `>=`, `<=`)
💰 *“Find all expensive dishes (above ₹500).”*  

```sql
SELECT * FROM menu
WHERE price > 500;
```

🍛 *“Find all budget-friendly dishes (₹300 or less).”*  

```sql
SELECT * FROM menu
WHERE price <= 300;
```

---

### 3️. Finding Orders That Are Not a Certain Dish (`<>` or `!=`) 
🚫 *“Show all dishes except ‘Pizza’.”*  

```sql
SELECT * FROM orders
WHERE dish <> 'Pizza';
```

---

### 4. Combining Filters (`AND`, `OR`)
🧐 *“Find all spicy AND vegetarian dishes.”*  

```sql
SELECT * FROM menu
WHERE category = 'Vegetarian' AND spice_level = 'High';
```

😋 *“Find either vegetarian OR seafood dishes.”*  

```sql
SELECT * FROM menu
WHERE category = 'Vegetarian' OR category = 'Seafood';
```

---

### 5️. Finding Items from a List (`IN`)
📜 *“Show orders for either ‘Burger’, ‘Pasta’, or ‘Pizza’.”*  

```sql
SELECT * FROM orders
WHERE dish IN ('Burger', 'Pasta', 'Pizza');
```

---

### 6️. Finding Items in a Price Range (`BETWEEN`)
💵 *“Find dishes priced between ₹200 and ₹500.”*  

```sql
SELECT * FROM menu
WHERE price BETWEEN 200 AND 500;
```

---

### 7️. Finding Names That Match a Pattern (`LIKE`)
🔤 *“Find all dishes that start with ‘P’.”*  

```sql
SELECT * FROM menu
WHERE dish LIKE 'P%';
```

📌 (`%` is a wildcard that matches any characters after ‘P’.)  

---

### 8️. Checking for Missing Data (`IS NULL`)
❌ *“Find all orders where the delivery address is missing.”*  

```sql
SELECT * FROM orders
WHERE delivery_address IS NULL;
```

---

### 9️. Negating a Condition (`NOT`)
🙅‍♂️ *“Find all dishes that are NOT vegetarian.”*  

```sql
SELECT * FROM menu
WHERE NOT category = 'Vegetarian';
```

---

## 🍕 Final Thoughts: Serving the Right Dish!
The `WHERE` clause is your **filtering tool** to **serve the right data** just like a chef selects ingredients for a perfect dish! 🎯  

Now, go ahead and **refine your SQL queries**—just like crafting a delicious meal! 😋🔥  
