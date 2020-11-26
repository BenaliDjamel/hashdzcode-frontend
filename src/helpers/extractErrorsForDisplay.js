export function extractErrorsForDisplay(error) {
    const parsedError = JSON.parse(error);
    const errors = {}
    for (const [key, errorMessages] of Object.entries(parsedError)) {
      errors[key] = errorMessages[0];
    }
    return errors;
  }