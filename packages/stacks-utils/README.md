# @stackoverflow/stacks-utils

Stack Overflow utility functions for formatting and data manipulation.

## Installation

```bash
npm install @stackoverflow/stacks-utils
```

## Usage

### formatCount

Formats numbers with compact notation for large values, using lowercase k (thousands) or m (millions) suffixes.

```typescript
import { formatCount } from "@stackoverflow/stacks-utils";

// Standard format (less than 10,000)
formatCount(42); // "42"
formatCount(1000); // "1,000"
formatCount(1234); // "1,234"
formatCount(9999); // "9,999"

// Compact format (10,000 or more)
formatCount(10000); // "10k"
formatCount(12345); // "12.3k"
formatCount(1234567); // "1.2m"
```

You can also import from the class:

```typescript
import { NumberFormatter } from "@stackoverflow/stacks-utils";

NumberFormatter.formatCount(42); // "42"
```

### formatTime

Formats UTC time strings into human-readable relative or absolute time formats.

```typescript
import { formatTime } from "@stackoverflow/stacks-utils";

// Within 2 days: relative time
formatTime("2026-01-15T10:00:00Z"); // "2 hours ago" (if current time is 2026-01-15T12:00:00Z)
formatTime("2026-01-15T11:30:00Z"); // "30 minutes ago"
formatTime("2026-01-14T12:00:00Z"); // "yesterday"

// Same year (beyond 2 days): short date with time
formatTime("2026-01-12T15:45:00Z"); // "Jan 12 at 15:45"

// Different year: full date with time
formatTime("2025-12-15T15:45:00Z"); // "Dec 15, 2025 at 15:45"
```

You can also import from the class:

```typescript
import { DateTimeFormatter } from "@stackoverflow/stacks-utils";

DateTimeFormatter.formatTime("2026-01-15T10:00:00Z"); // "2 hours ago"
```

## License

MIT
