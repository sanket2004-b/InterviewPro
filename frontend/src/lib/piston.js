// const BACKEND_URL = "http://localhost:3003/api";  //for local development
const BACKEND_URL = "/api";

export async function executeCode(language, code) {
  try {
    const response = await fetch(`${BACKEND_URL}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        code,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `HTTP error: ${response.status}`,
      };
    }

    return data;

  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}