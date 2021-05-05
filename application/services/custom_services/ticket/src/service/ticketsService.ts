import { Request, Response } from 'express';
import {ticketsDao} from '../dao/ticketsDao';
import { CustomLogger } from '../config/Logger'
let tickets = new ticketsDao();

export class ticketsService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpDelete')
     const  ticketsId = req.params.id;
     tickets.GpDelete(ticketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpSearch')
     const  ticketsData = req.query;
     tickets.GpSearch(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpUpdate')
     const  ticketsData = req.body;
     tickets.GpUpdate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpSearchForUpdate')
     const  ticketsData = req.body;
     tickets.GpSearchForUpdate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetAllValues')
     
     tickets.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpCreate')
     const  ticketsData = req.body;
     tickets.GpCreate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetNounById')
     const  ticketsId = req.params.id;
     tickets.GpGetNounById(ticketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetNounById')
         callback(response);
         });
    }


}