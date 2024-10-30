

const SignupHandler = async(name, email, password, userRole) => {
  
  let apiUrl = "/api/signup"


  try {
const response = await fetch (apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name, email, password, userRole })
})

if(!response.ok) {
  const { message } = await response.json();
  throw new Error(message || `Sign up Failed.`)
}


return await response.json();
  } catch (error) {
    console.error(`Signup Error`, error)
    throw error
  }

}

export default SignupHandler
