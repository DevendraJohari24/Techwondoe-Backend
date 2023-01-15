import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({users: user});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* READ */
export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json({user: user.toObject({getters: true})});
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };


/* UPDATE */
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const {name, role} = req.body;

    let user = await User.findById(id);

    user.name = name;
    user.role = role;
    
    user.save();

    res.status(200).json({user: user.toObject({ getters: true })});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


/* UPDATE */
export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      user.remove();
      res.status(200).json({delete: true});
    } catch (err) {
      res.status(404).json({ message: err.message , delete: false});
    }
  };
  