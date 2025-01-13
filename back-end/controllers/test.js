exports.userlogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await Host.findOne({ email, role: 'user' });
        if (!user) {
            return res.status(400).json({ error: 'email not found' });
        }

        const passvalid = await bcrypt.compare(password, user.password);
        if (!passvalid) {
            return res.status(400).json({ error: 'invalid password' });
        }

        const token = jwt.sign(
            {
                user: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            }
        );

  
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict',  
            maxAge: 60 * 60 * 24 * 7 * 1000,
            path: '/',
  
        });
        res.redirect(${process.env.CLIENT_URL}/login?token=${token}&role=${user.role}); 
    } catch (error) {
        console.error('error logging in', error);
        res.status(400).json({ error: 'error logging in' });
    }
};