# IoT Heartbeat Hub

A simple Node.js + TypeScript service to track device heartbeats.

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the server:
    ```bash
    npm start
    ```
    The server will run at `http://localhost:3000`.
    
3.  **Run the simulation (Optional):**
    To verify the endpoints with a test script:
    ```bash
    npx tsx src/simulate.ts
    ```

## How to Run Tests

Run the unit tests with:

```bash
npm test
```

## Multi-tenancy Strategy

To make this service multi-tenant, I would:

1.  **Add `tenantId` to the data model**: Every device would belong to a specific `tenantId`.
2.  **Authentication/Authorization**: Use middleware to extract the `tenantId` from the request (e.g., via API Key or JWT) and ensure users can only access their own devices.
3.  **Data Isolation**: In the `store` (or database), queries would always filter by `tenantId` to prevent data leakage between tenants.
