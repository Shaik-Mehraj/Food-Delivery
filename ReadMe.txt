1. Introduction of the application
2. Install Development Tools
3. Create an Angular application
4. Added Header
   * Components
   * Add Html
   * Add Css
 5. Add the Food List
   * Create a Food Model
   * Create data
   * Add Images to the assets
   * Create Food Service   
   * Create Component -Home Component
     - Html
     - Css
     - Typescript
 6. Search Component
    * Adding a method to the Food Service
    * Adding the Search Route
    * Showing Search Result in the Home Component
    * Generating the Search Component
      - Adding it to the Home(re-using)
      - Adding Typescript
      - Adding Html
      - Adding Css    
 7. Food page
    *Adding a method in a Service
    *Generating a Component(food-detail)
     - Adding Route
     - Adding Tools
     - Adding Html
     - Adding Css     

8. cart page
     * Cart Item Model
     * Cart Model
     * Cart Service
     * Add to cart Button Validation in food detail
     * Cart page Component
       - Add Route
       - Html
       - Css
       - Typescript
9. Find not found
    * Generate Component not-found
      - Tools
      - Html
      - Css
    * Adding the component to pages
      - Home page
      - food page
      - Cart page
10.connect to back-end
     * create backend folder
     * npm init
     * npm install typescript
     * create tsconfig.json
     * create .gitignore
     * copy data.ts to backend/Src
     * npm install express cors
     * create server.ts
        -install @types 
        -add apis
     * npm install nodemom ts-node --save-dev 
     * add urs.ts to frontend
     * add HttpClient module
     * update food service  

11.login page
    * Generating component
      - adding to routes
      - adding Typescript
      - adding html
    * importing reactive forms module
12.Generate User Service
   * Generate User Model
   * Add User Subject
   * Add Login Method    
     - Add User Urls
     - Generate IUserLogin interface 
     - Add ngx-toastr
        i. Import module
        ii.Import BrowserAnimationsModule
        iii.Add Styles in angular.json
        iv.Add to Header
13.Connect Login API to MongoDB Atlas
    * Moving Apis into routers
    * Create MongoDB Atlas
    * Create .env file
    * Install
      - Mongoose
      -Dotenv
      -bcryptjs
      -jsonwebtoken
      -express-async-handler
    * Connect to MongoDB Atlas
    * Use MongoDB instead of data.ts in apis          