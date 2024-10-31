const LoginHandler = async (email, password, userRole) => {
  const apiUrl = "http://localhost:4500/api/login"; 

  try {
      const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, userRole }),
      });

      // Check if the response was okay
      if (!response.ok) {
          let errorMessage = "Login Failed";
          try {
              const errorResponse = await response.json();
              errorMessage = errorResponse.message || errorMessage;
          } catch (parseError) {
              console.warn("Could not parse error response as JSON");
          }
          throw new Error(errorMessage);
      }

      // If the response is okay, parse and return it
      const data = await response.json();

      // Store the token in localStorage if login is successful
      if (data.token) {
          localStorage.setItem("token", data.token);
      } else {
          alert("Login was successful but no token was returned.");
      }

      return data; 

  } catch (error) {
      console.error(`Login Error ${apiUrl}`, error);
      throw error; 
  }
};

export default LoginHandler;
