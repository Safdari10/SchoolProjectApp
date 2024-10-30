

const SignupHandler = async(username, password, userRole) => {
  
  let apiUrl;

  if(userRole === 'student') {
    apiUrl = '/api/students/signup'
  } else if (userRole === "teacher") {
    apiUrl = '/api/teacher/signup'
  }

  try {
const response = await fetch (apiUrl, {
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({username, password })
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
