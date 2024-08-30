//for delete database

// Delete first document
db.teacher.deleteMany( { country: "China" } )

db.teacher.deleteMany({country: "China"})

db.teacher.deleteMany({})