import * as mongoose from 'mongoose';
import severityModel from '../models/severity';
import { CustomLogger } from '../config/Logger'


export class severityDao {
    private severity = severityModel;
    constructor() { }
public GpCreate(severityData, callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpCreate')
let temp = new severityModel(severityData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}