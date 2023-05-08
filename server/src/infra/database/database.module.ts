import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { BeersRepository } from "@application/repositories/beers-repository";
import { PrismaBeersRepository } from "./prisma/repositories/prisma-beers-repository";

@Module({
    providers: [
        PrismaService,
        {
            provide: BeersRepository,
            useClass: PrismaBeersRepository
        }
    ],
    exports: [BeersRepository],
})
export class DatabaseModule {}