const dbConnect= require('./mongodb');

const updateData=async ()=>{
     let mongo_connect=await dbConnect();
     let mongoData_update=await mongo_connect.updateOne({
        name:'nord'
     },{$set:{name:"nord updated"}})
}
updateData();