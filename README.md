Created this nextjs auth boilerplate to be used on future when i need a basic auth system. 


## Technologies Used

-NextJs
-Lucia (For password authentication)
-Prisma
-PostgresSql
-Typescript
-ShadcnUI
-zod

## Getting Started

Create a .env file and DATABASE_URL=Give the database URL
First, npm install then npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

# Folder and file Structure

- actions folder - where all the login, logout and register server actions are kept
- auth folder - Where login register pages are made
- settings folder - This is a setting page, you can make it homepage or dashboard or any kind of page
- component folder - where all the components are created
   - auth folder - where all our loging registers form are created
   - ui folder - where all our shadcn ui are downloaded and saved
- Data folder - Contains file that is going to query with our database
- lib folder
  - auth - setting up our connection with lucia and also validating to query the session 
  - db - where we are connecting with out prisma client 
  - utils - Only contains the cn function to merge classess provided by clsx and shadcn
- prisma folder- where our prisma schema is created
- providers folder - where we create context and share it accross  the files which currently contains sessionProvider
- schema folder - for our form schema validated with zod
- middleware.ts - where we are checking to see if users logged in to protect routes and redirecting accordingly
- routes.ts - to define our public, auth routes to be used on middleware


## Future TODOS

- Add Google and other oauth
- Add forgot password
- Add verify email
