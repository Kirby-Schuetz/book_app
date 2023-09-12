const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRouter = require('express').Router();
const { createUser, COOKIE_SECRET } = require('../secrets');
const SALT_ROUNDS = 10;

authRouter.get('/', async (req, res, next) => {
    try {
        console.log('in the terminal!')
        res.send('in your response!')
    } catch (error) {
        next(error)
    }
})

// create user
authRouter.post('/register', async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password } = req.body
        // hashing the password
        console.log( typeof password)
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        // sending username and hashed password to database
        console.log(hashedPassword)
        const user = await createUser({ username, password: hashedPassword })
        // removing password from user object for security reasons
        console.log(user)
        delete user.password

        // creating our token
        const token = jwt.sign(user, JWT_SECRET)

        // attaching a cookie to our response using the token that we created
        res.cookie('token', token, {
            sameSite: 'strict'
            httpOnly: true,
            signed: true,
        })

        delete user.password
        res.send({ user })
    } catch (error) {
        
    }
})

//GET user login
authRouter.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body.user;
      const user = await loginUser(username);
      const validPassord = await bcrypt.compare(password, user.password)
  
      if (validPassword) {
        // creating our token
        const token = jwt.sign(user, JWT_SECRET)
        // attaching cookie to our response using the token we created
        res.cookie('token', token, {
            sameSite: 'strict',
            httpOnly: true,
            signed: true,
        })

        delete user.password

        res.send({ user })
      }
    } catch (error) {
        next(error)
    }
 })

 authRouter.post('/logout', async (req, res, next) => {
    try {
        res.clearCookie('token', {
            sameSite: 'strict',
            httpOnly: true,
            signed: true,
        })
        res.send({
            loggedIn: false,
            message: 'Logged Out',
        })
    } catch(error) {
        next(error)
    }
 })

 module.exports = authRouter