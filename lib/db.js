let users = []

   const createUser = (name, password, email) => {
      console.log(`DB: creating a new user for ${name} ${email}`)

      const newUser = {};
      newUser.name = name;
      newUser.password = password;
      newUser.email = email;
      
      users.push(newUser)
      return newUser;
   }

   const findUser = (email) => {
      const user = users.find((user) => user.email === email)

      if(user){
         return user
      }
      throw new Error(`User not found with this: ${email}`)
   }

module.exports = {
   createUser,
   findUser
}