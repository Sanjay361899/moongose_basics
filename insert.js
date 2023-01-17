const dbConnect=require('./mongodb');

const insert= async()=>{
    const mongo_connect=await dbConnect();
    const mongo_put=mongo_connect.insert([{
        name:"nordss", brand:"one plus", price:320,category:"mobile"
    },
    {
        name:"nordEEEs", brand:"one plus", price:320,category:"mobile"
    }
])
}

insert();