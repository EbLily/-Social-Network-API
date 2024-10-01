const { Thought, User, Readction } = require('../models');
// const {Types} = require('mongoose');


module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const allThoughts = await Thought.find();
            console.log("Data: ", allThoughts);
            res.status(200).json(allThoughts);
    
        } catch (error) {
            console.log("err: ", error);
            res.status(500).json(error);
        }
    },
   

    // get single thought

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        // .populate('users');

      if (!thought) {
        return res.status(404).json({ message: 'No thought found' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
 
 
 // create a new thought
    async createThought(req, res) {
         console.log("Incoming Data: ", req.body);
         try {
             const newThought = await Thought.create(req.body);
             const currentUser = await User.findOneAndUpdate(   
                            { _id: req.body.userId },
                            { $push: { thoughts: newThought._id}},
                            { new: true}
                        )
             console.log("Data: ", currentUser);
             res.status(201).json(newThought);
         } catch (error) {
             console.log("err: ", error);
             res.status(500).json(error);
         }
     },
 
    // update thought 
     async updateThought(req, res) {
         console.log("Incoming Parameters: ", req.params);  // the information to FIND the current USER
         console.log("Incoming Data: ", req.body);  // the information to update
         try {
             const currentThought = await Thought.findOneAndUpdate(
                 { _id: req.params.thoughtId }, 
                 { $set: req.body },
                 { new: true }
             );
             // we should validate that a user was found
             if(!currentThought) {
                 return res.status(500).json("User not found");
             }
             console.log("Data: ", currentThought);
             res.status(201).json(currentThought);
         } catch (error) {
             console.log("err: ", error);
             res.status(500).json(error);
         }
     },

     // Delete thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought found' });
      }

      await User.deleteMany({ _id: { $in: thought.users } });
      res.json({ message: 'Thought and User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
 
  // add reaction
  async addReaction(req, res) { 
    try {
        const thought =await Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            { $addToSet: { reactions: req.body} },
            {runValidators: true, new: true}
        );
        thought ? res.json(thought) : res.status(404).json({message:notFound});

    } catch(err) {
        res.status(500).json(err);
    }
  },
 
  // remove reaction
  async removeReaction (req, res) { 
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}

        );
        thought ? res.json(thought) : res.status(404).json({message: notFound});

    } catch(err) {
        res.status(500).json(err);
    }

    },
  };

