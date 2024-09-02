export const autheticateUser = async (
  endpoint,
  userData,
  loading,
  setLoading
) => {
  try {
    setLoading(true);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (!response.ok) {
      // Returning a standardized error object
      return {
        error: true,
        status: response.status,
        message: result.message || "An error occurred during the request.",
      };
    }

    return result; // Success case, return the result
  } catch (error) {
    // Handling network or other errors
    console.error("Error during request:", error);
    return {
      error: true,
      message: "An unexpected error occurred. Please try again later.",
    };
  } finally {
    setLoading(false);
  }
};
