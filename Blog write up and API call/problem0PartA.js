var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
      {
        name: "bar",
        activities: ["be grumpy", "eat bread omblet"],
        weight: 8,
        furcolor: "white",
      },
      {
        name: "foo",
        activities: ["sleep", "pre-sleep naps"],
        weight: 3,
      },
    ],
  };
  
  //1. Add height and weight to Fluffy
  cat.height =  5;
  cat.weight = 7;
  
  //2. Fluffy name is spelled wrongly. Update it to Fluffyy
  cat.name = 'Fluffyy';
  
  //3. List all the activities of Fluffyy’s catFriends.
  let listOfActivities = [];
  cat.catFriends.forEach((current) => {
      listOfActivities.push(current.activities);
  })
  
  //4. Print the catFriends names.
  console.log('Cat Friends name are:-')
  cat.catFriends.forEach((current) => {
      console.log(current.name);
  })
  
  //5. Print the total weight of catFriends
  let totalWeight = 0;
  cat.catFriends.forEach((current) => {
      totalWeight = current.weight + totalWeight;
  })
  
  console.log(`Total weight of catFriends is ${totalWeight}`);
  
  //6. Print the total activities of all cats (op:6)
  cat.activities.forEach((current) => {
      console.log(current);
  })
  cat.catFriends.forEach((current) => {
      current.activities.forEach((current) => {
          console.log(current);
      })
  })
  
  //7. Add 2 more activities to bar & foo cats
  cat.catFriends[0].activities.push(`playing football`);
  cat.catFriends[0].activities.push(`smoking`);
  cat.catFriends[1].activities.push(`boxing`);
  cat.catFriends[1].activities.push(`dancing`);
  
  //8. Update the fur color of bar
  cat.catFriends[0].furcolor = `red`;
  
  console.log(cat);
  
  