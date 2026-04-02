import {prisma} from "../src/lib/prisma"

async function main(){

 const meena = await prisma.person.create({
  data:{
   full_name:"Meena",
   normalized_name:"meena"
  }
 })

 const ravi = await prisma.person.create({
  data:{
   full_name:"Ravi",
   normalized_name:"ravi"
  }
 })

 await prisma.relationship.create({

  data:{

   from_person_id: meena.id,
   to_person_id: ravi.id,
   relation_type:"PARENT"

  }

 })

 console.log("seed complete")

}

main()