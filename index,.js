var MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://nafi:12345Nafi@cluster0.cjpmx.mongodb.net?retryWrites=true&w=majority";

MongoClient.connect(url, function(error, result) {

    if (error) {
        console.log("connection fail");
    } else {
        console.log("connection success");
        ///insertData(result);
        //deleteOneItem(result);
        //deleteAllItem(result);
        //findOneItemWithCondition(result);
        //findOneItemWithoutCondition(result);
        //findAllItem(result);
        //findAllItemByProjection(result);
        //findAllItemByQuery(result);
        //findAllItemByLimit(result);
        //findAllItemBySort(result);
        //updateOneData(result);
        //createNewCollection(result);
        deleteCollection(result);
    }

})

function insertData(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");
    var myData = [{ Name: "Shafiq", Roll: "04", City: "Dhaka" },
        { Name: "Amit", Roll: "05", City: "Dhaka" },
        { Name: "Uzzol", Roll: "06", City: "Dhaka" },
        { Name: "Payel", Roll: "07", City: "Dhaka" }
    ]
    myCollection.insertMany(myData, function(error) {

        if (error) {
            console.log("Data Insert fail");
        } else {
            console.log("Data Insert success");
        }


    })
}


function deleteOneItem(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var deleteData = { Name: "Payel" };
    myCollection.deleteOne(deleteData, function(error, deletedItem) {

        if (error) {
            console.log("Data delete fail");
        } else {
            console.log(deletedItem);

        }


    })
}

function deleteAllItem(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var deleteData = {};
    myCollection.deleteMany(deleteData, function(error, deletedItem) {

        if (error) {
            console.log("Data delete fail");
        } else {
            console.log(deletedItem);

        }


    })
}

function findOneItemWithCondition(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var findData = { Name: "Uzzol" };
    myCollection.findOne(findData, function(error, Data) {

        if (error) {
            console.log("Data find fail");
        } else {
            console.log(Data); //will search by condition

        }


    })
}

function findOneItemWithoutCondition(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var findData = {};
    myCollection.findOne(findData, function(error, Data) {

        if (error) {
            console.log("Data find fail");
        } else {
            console.log(Data); //will find and get the first item of database without any condition

        }


    })
}

function findAllItem(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    myCollection.find().toArray(function(error, Data) {

        if (error) {
            console.log("Data find fail");
        } else {
            console.log(Data); //will find and get the all item from database to a array

        }


    })
}

function findAllItemByProjection(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var itemObj = {};
    var selectByprojection = { projection: { Roll: "", Name: "" } };
    myCollection.find(itemObj, selectByprojection).toArray(function(error, Data) {

        if (error) {
            console.log("Data select fail");
        } else {
            console.log(Data); //will find and get all Roll from database 

        }


    })
}

function findAllItemByQuery(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var itemObj = { City: "Faridpur" };

    myCollection.find(itemObj).toArray(function(error, Data) {

        if (error) {
            console.log("Data select fail");
        } else {
            console.log(Data); //will find and get all Roll from database 

        }


    })
}

function findAllItemByLimit(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    myCollection.find().limit(4).toArray(function(error, Data) {

        if (error) {
            console.log("Data select fail");
        } else {
            console.log(Data); //will print only first 4 item from datatbase 

        }


    })
}

function findAllItemBySort(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var sortPattern = { City: 1 }; //Roll:-1 will print data in reverse order by condition of roll
    myCollection.find().sort(sortPattern).toArray(function(error, Data) {

        if (error) {
            console.log("Data select fail");
        } else {
            console.log(Data); //will print only first 4 item from datatbase 

        }


    })
}

function updateOneData(result) {
    var myDatabase = result.db("school");
    var myCollection = myDatabase.collection("student_list");

    var query = { Roll: "01" };
    var newValues = { $set: { City: "Rangpur" } };
    myCollection.updateOne(query, newValues, function(error, Data) {

        if (error) {
            console.log("Data update fail");
        } else {
            console.log(Data);

        }


    })
}

function createNewCollection(result) {
    var myDatabase = result.db("school");
    myDatabase.createCollection("woman", function(error, Data) {

        if (error) {
            console.log("Collection creation fail");
        } else {
            console.log("Collection creation success");
            console.log(Data);

        }


    });

}

function deleteCollection(result) {
    var myDatabase = result.db("school");
    myDatabase.dropCollection("woman", function(error, Data) {

        if (error) {
            console.log("Collection deletion fail");
        } else {
            console.log("Collection deletion success");
            console.log(Data);

        }


    });

}