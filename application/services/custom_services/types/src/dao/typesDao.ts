import * as mongoose from 'mongoose';
import typesModel from '../models/types';
import { CustomLogger } from '../config/Logger'


export class typesDao {
    private types = typesModel;
    constructor() { }
public GpCreate(typesData, callback){
new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpCreate')
let temp = new typesModel(typesData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}