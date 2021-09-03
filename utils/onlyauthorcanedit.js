const { Blog } = require("../models");

const onlyAuthorCanEdit = async (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  const blogData = await Blog.findByPk(req.params.id)
  if (req.session.user_id !== blogData.user_id) {

    res.status(401).json("Not found!");
    return; 
    
  } 
  
  next();
  
};

module.exports = onlyAuthorCanEdit;
