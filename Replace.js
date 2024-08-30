//replace one document in database
// db.collection.replaceOne(
//     <filter>,
//     <replacement>,
//     {
//        upsert: <boolean>,
//        writeConcern: <document>,
//        collation: <document>,
//        hint: <document|string>
//     }
//  )

db.movies.replaceOne(
  { title: "Jurassic World: Fallen Kingdom" },

  {
    title: "Adipurush",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 150,
    rated: "PG-13",
    year: 2023,
    directors: ["Om Raut"],
    cast: ["Prabhas", "Kriti Sanon", "Saif Ali Khan"],
    type: "movie",
  },
  {
    title: "Jurassic World: Fallen Kingdom",
    genres: ["Action", "Sci-Fi"],
    runtime: 130,
    rated: "PG-13",
    year: 2018,
    directors: ["J. A. Bayona"],
    cast: ["Chris Pratt", "Bryce Dallas Howard", "Rafe Spall"],
    type: "movie",
  }
);
