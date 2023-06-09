// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
// use jaskis


// 2. Create a collection called bounties
// db.createCollection("bounties")

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
// db.bounties.insertOne({})

// 2. Query for all bounties in the bounties collection
// db.bounties.find()

// 3. Insert many bounties at once using the given objects
// db.bounties.insertMany([{},{}])

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
// { location: "grasslands" }

// 2. Query for all bounties with a reward worth 10000 or more
// { reward; $gt: 10000 }

// 3. Query for all bounties, but exclude the client attribute from being shown
// { !client }

// 4. Query for a Groundhog in the Woodlands
// { location: "woodlands", name: "groundhog" }

// Update and Delete
// 1. Update the reward for Polarwind to 10000
// { $set: { reward: 10000 } }

// 2. Remove Lokinkajou
// { $unset: {name: "lokinkajou"} }

// 3. Delete all bounties sent by Songbird
//  
// 4. Update all captured statuses to true