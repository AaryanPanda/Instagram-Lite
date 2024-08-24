const sequelize = require("../config/db");
const User = require("./User.js");
const Post = require("./Post.js");
const Like = require("./Like.js")


User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "postedBy" })

Like.belongsTo(Post,{foreignKey:"postId",as:"post"}),
Post.hasMany(Like,{foreignKey:'postId',as:"likes"})

Like.belongsTo(User,{foreignKey:"userId",as:"likedBy"})
User.hasMany(Like,{foreignKey:"userId",as:"like"})


module.exports = {
    sequelize,
    Post,
    User,
    Like
}