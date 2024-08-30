db.movies.updateOne({filter}, {$set: {updateData}, $currentDate: {lastUpdated:true}})

db.movies.updateOne( { title: "Twilight" },
    {
      $set: {
        plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
      },
      $currentDate: { lastUpdated: true }
    })