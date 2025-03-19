import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export function create(property) {
    const result = prisma.property.create({
        data: property
    })
    return result
}