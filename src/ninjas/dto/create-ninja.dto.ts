import { IsEnum, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class createNinjaDto{

    @IsNumber()
    @IsPositive()
    id:number;

    @IsString()
    @MinLength(3)
    name: string;

    @IsEnum(['stars','nunchuks'],{message:"Weapon should be either stars of nunchuks"})
    weapon: 'stars'|'nunchuks'
}