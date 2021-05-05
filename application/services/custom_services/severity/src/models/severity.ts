
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const severitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String
})

const severityModel = mongoose.model('severity', severitySchema, 'severity');
export default severityModel;
