import { Body, Controller, Delete, Get, NotFoundException, Param,  ParseIntPipe, Patch, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { createNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')

export class NinjasController {
    constructor(private readonly ninjasService:NinjasService){} //This is "DEPENDENCY INJECTION"
    
    @Post()
    @UseGuards(BeltGuard)
    async createNinja(@Body(ValidationPipe) createNinjaDto:createNinjaDto){
        return this.ninjasService.createNinja({
            id:createNinjaDto.id,
            name: createNinjaDto.name,
            weapon: createNinjaDto.weapon
        })
    }

    @Get()
    async getNinjas(@Query('weapon') weapon:'stars'|'nunchuks'){
        return  this.ninjasService.getNinjas(weapon);
    }
        
    @Get(':id')
    async getOneNinja(@Param('id', ParseIntPipe) id:number){
        try{
            return this.ninjasService.getById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    @Patch(':id')
    async updateNinja(@Param('id') id:string,@Body() updateNinjaDto:UpdateNinjaDto){
        return this.ninjasService.updateNinjaById(Number(id), updateNinjaDto)
    }

    @Delete(':id')
    async deleteNinja(@Param('id') id:string){
        return this.ninjasService.deleteById(Number(id))
    }
}

// get/ninjas --> []
// get/ninjas/:id -->{...}
// post/ninjas --> 
// post/ninjas/:id --> {...}
// delete /ninjas/:id -->