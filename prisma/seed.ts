import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  
  const post1 = await prisma.adidas.create({
    data: {
      model: 'Puma',
      color: 'Red',
      price: 40 
    },
  });

  };

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    
    await prisma.$disconnect();
  });