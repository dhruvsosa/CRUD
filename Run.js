//find Database
db.movies.find();

// find specify data
db.movies.find({ year: 2018 });
db.movies.find({ title: "Dune" });

//specify Conditions using query operators
db.movies.find({ rated: { $in: ["PG", "PG-13"] } });
db.movies.find({ year: { $in: [2018, 2020] } });

//
db.movies.find({ countries: "Mexico", "imdb.rating": { $gte: 7 } });
db.movies.find({ cast: "Jeremy Renner", runtime: { $gte: 90 } });

//specify logical operators
db.movies.find({
  runtime: 100,
  $or: [{ year: { $gte: 2019 } }, { genres: "Drama" }],
});

//
db.users.find().count();

//
db.users.find().limit(5);

//
db.users.insertMany;



db.listingsAndReviews.updateMany(
  { security_deposit: { $lt: 100 } },
  {
    $set: { security_deposit: 100, minimum_nights: 1 }
  }
)


db.movies.updateMany( { rated: "PG-13" },
  {
    $set: {
      Meaning:"PG-13 movies are films that may contain material inappropriate for children under 13, requiring parental guidance."
    },
    $currentDate: { lastUpdated: true }
  })