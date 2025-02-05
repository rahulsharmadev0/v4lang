## JavaScript arithmetic operator:

| Operator | Name                   | Example         | Result |
|----------|------------------------|----------------|--------|
| `+`      | Addition               | `5 + 3`        | `8`    |
| `-`      | Subtraction            | `10 - 4`       | `6`    |
| `*`      | Multiplication         | `6 * 2`        | `12`   |
| `/`      | Division               | `9 / 3`        | `3`    |
| `%`      | Modulus (Remainder)    | `10 % 3`       | `1`    |
| `**`     | Exponentiation         | `2 ** 3`       | `8`    |
| `++`     | Increment              | `let a = 5; a++` | `6`  |
| `--`     | Decrement              | `let b = 7; b--` | `6`  |


## JavaScript Bitwise Operators:

| Operator | Name                      | Example       | Result (Binary) | Result (Decimal) |
|----------|---------------------------|--------------|----------------|----------------|
| `&`      | Bitwise AND               | `5 & 3`      | `0101 & 0011`  | `0001 (1)`    |
| `\|`     | Bitwise OR                | `5 \| 3`     | `0101 | 0011`  | `0111 (7)`    |
| `^`      | Bitwise XOR (Exclusive OR) | `5 ^ 3`     | `0101 ^ 0011`  | `0110 (6)`    |
| `~`      | Bitwise NOT               | `~5`         | `~0101`        | `1010 (-6)`   |
| `<<`     | Left Shift                | `5 << 1`     | `0101 << 1`    | `1010 (10)`   |
| `>>`     | Right Shift (Sign-preserving) | `5 >> 1` | `0101 >> 1`    | `0010 (2)`    |
| `>>>`    | Zero-fill Right Shift     | `-5 >>> 1`   | Depends on 32-bit binary representation | Large positive number |

### Explanation:
- **Bitwise AND (`&`)**: Performs AND on each bit. Only 1 & 1 results in 1.
- **Bitwise OR (`|`)**: Performs OR on each bit. At least one 1 results in 1.
- **Bitwise XOR (`^`)**: Performs XOR on each bit. If bits are different, result is 1.
- **Bitwise NOT (`~`)**: Inverts bits (1s become 0s and vice versa). Uses two's complement for negative values.
- **Left Shift (`<<`)**: Shifts bits left, filling 0s at the right.
- **Right Shift (`>>`)**: Shifts bits right, keeping the sign bit for negative numbers.
- **Zero-fill Right Shift (`>>>`)**: Shifts bits right, always filling 0s (does not preserve sign).


### **Comparison Operators**  

| Operator | Name                         | Example (`a = 5, b = "5"`) | Result |
|----------|------------------------------|---------------------------|--------|
| `==`     | Equal to                     | `a == b`                  | `true`  |
| `===`    | Strict equal to (type + value) | `a === b`                 | `false` |
| `!=`     | Not equal to                 | `a != b`                   | `false` |
| `!==`    | Strict not equal to          | `a !== b`                  | `true`  |
| `>`      | Greater than                 | `a > 3`                    | `true`  |
| `<`      | Less than                    | `a < 3`                    | `false` |
| `>=`     | Greater than or equal to     | `a >= 5`                   | `true`  |
| `<=`     | Less than or equal to        | `a <= 4`                   | `false` |


## Logical Operators

| Operator | Name               | Example (`x = true, y = false`) | Result  |
|----------|--------------------|-------------------------------|---------|
| `&&`     | Logical AND        | `x && y`                      | `false` |
| `\|\|`   | Logical OR         | `x \|\| y`                    | `true`  |
| `!`      | Logical NOT        | `!x`                          | `false` |


## Special JavaScript Operators

| Operator | Name                           | Example | Explanation |
|----------|--------------------------------|---------|-------------|
| `??`     | Nullish Coalescing Operator   | `null ?? "default"` → `"default"` | Returns right-hand value if left-hand is `null` or `undefined` (not `false` or `0`). |
| `?.`     | Optional Chaining (Null Check)            | `obj?.prop?.nestedProp` | Prevents errors when accessing deep properties in possibly `null` or `undefined` objects. |


