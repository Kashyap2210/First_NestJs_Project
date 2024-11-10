import { Injectable } from '@nestjs/common';
import { createNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        {id:0, name: 'ninjaA', weapon: 'stars'},
        {id:1, name: 'ninjaB', weapon: 'nunchuks'},
        {id:2, name: 'ninjaC', weapon: 'sword'}
    ];

    createNinja(createNinjaDto: createNinjaDto){
        const newNinja = {
            id: createNinjaDto.id,
            name: createNinjaDto.name,
            weapon: createNinjaDto.weapon
        }
        this.ninjas.push(newNinja);
        console.log(this.ninjas)
        return "New Ninja Created"
    }

    getNinjas(weapon?: 'stars'|'nunchuks'){
        if(weapon){
            return this.ninjas.filter(ninja => ninja.weapon === weapon);
        }
        return this.ninjas; 
    }

    getById(id:number){
    const ninjaById = this.ninjas.find(ninja=>ninja.id === id)
        if(!ninjaById){
            throw new Error ("Ninja not found")
        }
        return ninjaById;
    }

    updateNinjaById(id: Number, updateNinjaDto: UpdateNinjaDto){
        const ninjaById = this.ninjas.filter(ninja=>ninja.id === id);
        console.log(ninjaById)
        ninjaById[0].name = updateNinjaDto.name,
        ninjaById[0].weapon = updateNinjaDto.weapon
        return ninjaById
    }

    deleteById(id: number){
        console.log("aaa", this.ninjas)
        for (let i=0; i<this.ninjas.length; i++){
            if(this.ninjas[i].id === id){
                console.log(i)
                this.ninjas.splice(i,1)
                break;
        }
    }
        console.log("bbb",this.ninjas)
        return(this.ninjas)
    }
}
