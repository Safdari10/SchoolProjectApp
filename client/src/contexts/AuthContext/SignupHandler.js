const SignupHandler = async (name, email, password, userRole) => {
  let apiUrl = "http://localhost:4500/api/signup";

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
   return await response.json();
  } catch (error) {
    console.error(`Login Error`, error);
    throw error;
  }
};

export default SignupHandler
