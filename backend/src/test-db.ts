import { prisma } from "./lib/prisma.ts"

async function main() {
    const person = await prisma.person.create({
        data:{
            full_name:"Test Person",
            normalized_name:"tester"
        }
    })

    console.log(person)
}

main()