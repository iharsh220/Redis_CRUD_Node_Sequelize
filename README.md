# Item Management API

This is an API for managing items, with CRUD operations that support caching with Redis. The API allows creating, reading, updating, and deleting items, with caching to improve performance for frequently accessed data.

## Features

- **Create**: Add a new item to the database.
- **Read**: Fetch all items or a specific item by its ID.
- **Update**: Update an existing item's details.
- **Delete**: Remove an item from the database.
- **Caching**: Redis is used to cache data for faster retrieval.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MySQL** (installed and running)
- **Redis** (installed and running)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iharsh220/Redis_CRUD_Node_Sequelize.git
   cd Redis_CRUD_Node_Sequelize

2. 
### Key Updates:
- **.env file** configuration is now added under **Set up environment variables**.
- Instructions for creating a `.env` file with the following contents:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=_redis
```

