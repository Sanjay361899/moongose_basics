const dbConnect=require('./mongodb');

const insert= async()=>{
    const mongo_get=await dbConnect();
    const mongo_put=mongo_get.insert([{
        name:"nordss", brand:"one plus", price:320,category:"mobile"
    },
    {
        name:"nordEEEs", brand:"one plus", price:320,category:"mobile"
    }
])
}

insert();