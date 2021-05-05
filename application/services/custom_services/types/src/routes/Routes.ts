import { Request, Response, NextFunction } from "express";
import { typesController } from '../controller/typesController';


export class Routes {
    private types: typesController = new typesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/types').post(this.types.GpCreate);
     }

}