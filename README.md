# Backend  

The project built using **Node.js, TypeScript, Prisma, and MongoDB**. It provides API endpoints for managing menus and menu items.  

---

##  Technologies Used  
- **Node.js** - JavaScript runtime  
- **Express.js** - Backend framework  
- **TypeScript** - Type safety  
- **MongoDB** - Database  
- **Prisma** - ORM  
- **Zod** - Input validation  


### 1️⃣ Clone the repository  
```sh
git clone https://github.com/abhijithjithu0007/deepnetsoft-task-server.git
cd server
npm install
DATABASE_URL=mongodb+srv://abhijithabhi36151:abhi11@cluster0.oqccl.mongodb.net/deepnetsoft?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
npx prisma generate
npx prisma migrate deploy
npm run dev
