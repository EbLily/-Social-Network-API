const { User, Thought } = require("../models");
// const { all } = require("../routes");

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const allUsers = await User.find();
      console.log("Data: ", allUsers);
      res.status(200).json(allUsers);
    } catch (error) {
      console.log("err: ", error);
      res.status(500).json(error);
    }
  },

  // create a new user
  async createUser(req, res) {
    console.log("Incoming Data: ", req.body);
    try {
      const newUser = await User.create(req.body);
      console.log("Data: ", newUser);
      res.status(201).json(newUser);
    } catch (error) {
      console.log("err: ", error);
      res.status(500).json(error);
    }
  },

  // update user by Id
  async updateUser(req, res) {
    console.log("Incoming Parameters: ", req.params); // the information to FIND the current USER
    console.log("Incoming Data: ", req.body); // the information to update
    try {
      const currentUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true }
      );
      // we should validate that a user was found
      if (!currentUser) {
        return res.status(500).json("User not found");
      }
      console.log("Data: ", currentUser);
      res.status(201).json(currentUser);
    } catch (error) {
      console.log("err: ", error);
      res.status(500).json(error);
    }
  },

 
  async getSingleUser(req, res) {
    try {
      const dbUserData = await User.findOne({ _id: req.params.userId })
        // .select('-__v')
        // .populate('friends')
        // .populate('thoughts');

      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete User
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: req.params.userId });

      if (!dbUserData) {
        return res.status(404).json({ message: "No such user exists" });
      }

      res.json({ message: "User successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
 
  // add friend to user's friend list

  async addFriend(req, res) {
    console.log("You are adding a friend");
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId }  },
        { runValidators: true, new: true }
      );
     if (!user) {
      return res.status(404).json({ message: "User not found" }); // Ensure 'notFound' is defined
    }

    res.json(user);
  } catch(err) {
    console.error(err); // Log the error for debugging
    res.status(500).json(err);
  }

    },
  };


