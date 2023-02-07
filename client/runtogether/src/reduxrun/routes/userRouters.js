const router = require('express').Router()
const auth = require("../middleware/auth")

module.exports = router

userRouter.get('/:id',auth,  async(req, res)=>{
  try{
      const user = await User.findById(req.params.id)
                              .select('-password')
      if(user){
          res.send(user)
      }else{
          res.status(404).send({message:'User Not Found.'})
      }
  }catch(err){
      return res.status(500).json({message: err.message})
  }
})

userRouter.patch('/:id/follow', auth, async(req, res)=>{
    try{
        // const user = await User.findOne(req.params.id)
        // const follower = user.followers.filter(x=>x._id===req.user._id)
        // if(follower.length>0) return res.status(500).json({msg: "You followed this user."})
        const user = await User.find({_id: req.params.id, 'followers':req.body._id})
        if(user.length > 0) return res.status(500).json({msg: "You followed this user."})

        
        const newUser = await User.findOneAndUpdate({_id: req.body._id}, {
            $push: {following: req.params.id}
        }, {new: true}).populate("followers following", "-password")
        
        await User.findOneAndUpdate({_id: req.params.id}, { 
            $push: {'followers':req.body}
        }, {new: true})

        res.send({
            user : newUser,
            token:generateToken(newUser)
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

userRouter.patch('/:id/unfollow', auth, async(req, res)=>{
    try{
        
        const newUser = await User.findOneAndUpdate({_id: req.body._id}, {
            $pull: {following: req.params.id}
        }, {new: true}).populate("followers following", "-password")

        await User.findOneAndUpdate({_id:req.params.id}, {
            $pull:{'followers':req.body._id}
        }, {new:true})

        console.log(newUser)

        res.json({
            user:newUser,
            token:generateToken(newUser)
        })

    }catch(err){
        return res.status(500).json({message:err.message})
    }
})