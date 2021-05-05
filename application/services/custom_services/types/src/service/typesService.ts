import { Request, Response } from 'express';
import {typesDao} from '../dao/typesDao';
import { CustomLogger } from '../config/Logger'
let types = new typesDao();

export class typesService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpCreate')
     const  typesData = req.body;
     types.GpCreate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpCreate')
         callback(response);
         });
    }


}