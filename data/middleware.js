const upperCase = (req, res, next) => {
    const name = req.body.name;
    const upName = req.body.name.toUppercase();
    if (name === upName) {
        next(); 
    } else {
        res.status(404).json({message: "Name needs to be capatilized!" })
    }
   };

   module.exports = upName;