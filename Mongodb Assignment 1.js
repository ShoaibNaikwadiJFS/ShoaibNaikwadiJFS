   
# creating database
use mongo_practice
#created colletction name movies and insert one data
db.movies.insertOne({title:"Fight club",writer:"Chuck Palahniuko",Year:1999,actors:["Brad pitt","Edward Norton"]})
#inserted the multipleline data by insertmany command 
db.movies.insertMany([{title:"Pulp Fiction",writer:"Quentin Tarantino",Year:1994,actors:["John Travolta","Uma Thurman"]},{title:"Inglorious Basterds",writer:"Quentin Tarantino",Year:2009,actors:["Brad pitt","Diane Kruger","Eli Roth"]},{title:"The Hobbit: An Unexpected Journey",writer:"J.R.R Tolkein",Year:2012,franchise:"The Hobbit"},{title:"The Hobbit: The Desolation of Smaug",writer:"J.R.R Tolkein",Year:2013,franchise:"The Hobbit",synopsis:"Bilbo and Company are forced are to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."},{title:"Pee Wee Herman's Big Adventure"},{title:"Avatar"}])
#query/Find documents
#1 get all the documents
db.movies.find().pretty()
#2 get all documents with writer set to "Querntin Tarantino"
db.movies.find({writer:"Quentin Tarantino"}).pretty()
#3 get all documents where actors include "Brad pitt"
db.movies.find({actors:"brad pitt"}).pretty()
#4 get all documents where franchise set to "The Hobbit"
db.movies.find({franchise:"The Hobbit"}).pretty()
#5 get all movies released in the 90's
db.movies.find({$and:[{Year:{$gt:1900}},{Year:{$lt:2000}}]}).pretty()
#6 get all movies released before the year 2000 or after 2010
db.movies.find({$or:[{Year:{$lt:2000}},{Year:{$gt:2010}}]}).pretty()
#update documents
#1 add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
db.movies.updateOne({title:"The Hobbit: An Unexpected Journey"},{$set:{synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
#2 add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
db.movies.updateOne({title:"The Hobbit: The Desolation of Smaug"},{$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
#3 add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.updateOne({title:"Pulp Fiction"},{$push:{actors:"Samuel L. Jackson"}})
#Text Search
#1.find all movies that have a synopsis that contains the word "Bilbo"
db.movies.createIndex({title:"text",writer:"text",franchise:"text",synopsis:"text"})// for create index first then we can search
db.movies.find({$text:{$search:"Biblo"}})
#2.find all movies that have a synopsis that contains the word "Gandalf"
db.movies.find({$text: {$search: "Gandalf"}})
#3.find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({$text: {$search: "Bilbo -Gandalf"}})
#4.find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({$text: {$search: "dwarves hobbit"}})
#5.find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movies.find({$text: {$search: "gold dragon"}})
#Delete
#1.delete the movie "Pee Wee Herman's Big Adventure"
db.movies.remove({title: "Pee Wee Herman's Big Adventure"})
#2.delete the movie "Avatar"
db.movies.remove({title: "Avatar"})
#create a collection users and insert the documents
db.users.insertMany([{username:"GoodGuyGreg",first_name:"Good Guy",last_name:"Greg"},{username:"ScumbagSteve",full_name:"",first:"Scumbag",last:"Steve"}])
#create collection posts and insert into post
db.posts.insertMany([{username : "GoodGuyGreg", title : "Passes out at party", body : "Wakes up early and cleans house"},{username : "GoodGuyGreg", title : "Steals your identity", body : "Raises your credit score"},{username : "GoodGuyGreg", title : "Reports a bug in your code", body : "Sends you a Pull Request"},{username : "ScumbagSteve", title : "Borrows something", body : "Sells it"},{username : "ScumbagSteve", title : "Borrows everything", body : "The end"},{username : "ScumbagSteve", title : "Forks your repo on github" ,body :"Sets to private"}])
#create collection comments and insert into documents 
db.comments.insertMany([{username : "GoodGuyGreg",comment : "Hope you got a good deal!",post :"61e7c07ac28efefd18f92565"},{username : "GoodGuyGreg",comment : "What's mine is yours!",post : "61e7c07ac28efefd18f92566"},{username : "GoodGuyGreg",comment : "Don't violate the licensing agreement!",post : "61e7c07ac28efefd18f92567"},{username : "ScumbagSteve",comment : "It still isn't clean",post : "61e7c07ac28efefd18f92562"},{username : "ScumbagSteve",comment : "Denied your PR cause I found a hack",post : "61e7c07ac28efefd18f92564"}])

#Quering related to collections
#1.find all users
db.users.find().pretty()
#2.find all posts
db.posts.find().pretty
#3.find all posts that was authored by "GoodGuyGreg"
db.posts.find({username:"GoodGuyGreg"}).pretty()
#4.find all posts that was authored by "ScumbagSteve"
db.posts.find({username: "ScumbagSteve"}).pretty()
#5.find all comments
db.comments.find().pretty()
#6.find all comments that was authored by "GoodGuyGreg"
db.comments.find({username: "GoodGuyGreg"})
#7.find all comments that was authored by "ScumbagSteve"
db.comments.find({username: "ScumbagSteve"})
#8.find all comments belonging to the post "Reports a bug in your code"
db.comments.find({post :"61e7c07ac28efefd18f92564"}).pretty()