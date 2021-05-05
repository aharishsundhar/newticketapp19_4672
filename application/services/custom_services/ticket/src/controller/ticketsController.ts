import { Request, Response } from 'express';
import { ticketsService } from '../service/ticketsService';
import { CustomLogger } from '../config/Logger'
let tickets = new ticketsService();

export class ticketsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
tickets.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
tickets.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
tickets.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
tickets.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
tickets.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
tickets.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpCreate');
    })}
public GpGetNounById(req: Request, res: Response) {
tickets.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetNounById');
    })}


}