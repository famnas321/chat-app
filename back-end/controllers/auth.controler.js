import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import generateJwtToken from "../utiles/jwtToken.js";
export const signUp = async (req, res) => {
  try {
    const {fullName, userName, password, confirmPassword, gender } = req.body;

    console.log(userName);
    // console.log(password); 
    // console.log(confirmPassword); 
    // console.log(gender); 


    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password doesn't match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "user name exist " });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "Male" ? boyProfilePic : girlProfilePic,
    });
    console.log(newUser)
    await newUser.save();

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message ,mess:"error is sign" });
  }
};
export const login = async (req, res) => {
    const { userName, password } = req.body;
    console.log(req.body);
  
    try {
      const user = await User.findOne({ userName });
      
      if (!user) {
  
        return res.status(400).send({ error: "USER not found" });

        
      }
  
      const passvalid = await bcrypt.compare(password, user.password);
      
      if (!passvalid) {
        return res.status(400).send({ error: 'Invalid password' });
      }
    
      const token= generateJwtToken(user._id, res)

     console.log("token created successfulluy")
      res.status(200).json({
      _id: user._id,
      userName: user.userName,
      profilePic:user.profilePic,
      token: token,
    });
  } catch (error) {
    console.log("Error in login", error);
    res.status(500).json("Unexpected error occured on server");
  }
}
     
    //   const token = jwt.sign(
    //     { user: user._id },
    //     process.env.SECRET_KEY,
    //     { expiresIn: '1h' }
    //   );
  
    //   // Store token in session cookie
    //   res.cookie('token', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production', 
    //     sameSite: 'Strict',  
    //     maxAge: 60 * 60 * 24 * 7 * 1000,
    //     path: '/',

    // });

  
  //     return res.status(200).json({user});
  
  //   } catch (error) {
  //     console.error('Error logging in', error);
  //     res.status(400).json({ error: 'Error logging in' });
  //   }
  // };
    
//   try {
//     const { userName, password } = req.body;
//     const user = await User.findOne({ userName });
//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       user?.password || ""
//     );
//     if (!user || !isPasswordCorrect) {
//       return res.status(400).json("invalid user name or password");
//     }

//     const token = generateJwtToken(user._id, res);
//     //    console.log("token created successfulluy")
//     res.status(200).json({
//       _id: user._id,
//       userName: user.userName,
//       password: user.password,
//       token: token,
//     });
//   } catch (error) {
//     console.log("Error in login", error);
//     res.status(500).json("Unexpected error occured on server");
//   }
export const logOut = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};