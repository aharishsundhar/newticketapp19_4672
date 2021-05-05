import * as mongoose from 'mongoose';
import ticketsModel from '../models/tickets';
import { CustomLogger } from '../config/Logger'


export class ticketsDao {
    private tickets = ticketsModel;
    constructor() { }
public GpDelete(ticketsId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpDelete')

this.tickets.findByIdAndRemove(ticketsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(ticketsData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(ticketsData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.tickets.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(ticketsData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpUpdate')

this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(ticketsData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpSearchForUpdate')

this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetAllValues')

this.tickets.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(ticketsData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpCreate')
let temp = new ticketsModel(ticketsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(ticketsId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetNounById')

this.tickets.findById(ticketsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}