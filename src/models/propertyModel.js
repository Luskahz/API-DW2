import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function createProperty(property) {
    const result = await prisma.property.create({
        data: property
    })
    return result
}