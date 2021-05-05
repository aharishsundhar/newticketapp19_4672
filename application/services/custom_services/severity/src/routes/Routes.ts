import { Request, Response, NextFunction } from "express";
import { severityController } from '../controller/severityController';


export class Routes {
    private severity: severityController = new severityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/severity').post(this.severity.GpCreate);
     }

}