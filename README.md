# Instructions

1. **Create an environment file** that includes the application port and your database connection string, for example:

   ```env
   PORT=2999
   DATABASE_URL=postgres://postgres:surbanasurbana@103.151.125.61:2998/surbana
   ```

2. **Run the migration command** to create the database framework:

   ```bash
   pnpm migration
   ```

3. **Generate sample data for the database** by running the seed command:

   ```bash
   pnpm seed
   ```

4. **View the database directly** using Prima Studio:

   ```bash
   pnpm studio
   ```

After everything is completed, you will see the API at the following addresses:

- `/api/location`
- `/api-docs`
