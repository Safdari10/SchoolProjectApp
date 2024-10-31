const SignupHandler = async (name, email, password, userRole) => {
  const apiUrl = "http://localhost:4500/api/signup";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, userRole }),
    });

    if (!response.ok) {
      let errorMessage = "Signup Failed";
      try {
        const errorResponse = await response.json();
        errorMessage = errorResponse.message || errorMessage;
      } catch (parseError) {
        console.warn("Could not parse error response as JSON.");
      }
      throw new Error(errorMessage);
    }

   // If the response is okay, parse and return it
  const result = await response.json();
  return result.message
  
  } catch (error) {
    console.error(`Login Error ${apiUrl}`, error);
    throw error;
  }
};

export default SignupHandler
