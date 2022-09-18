/* eslint-disable no-undef */
/* eslint-disable security/detect-object-injection */
if (typeof GLOBAL_VARIABLES === "undefined") {
}
const getEnvironmentValue = (key) => {
  if (typeof GLOBAL_VARIABLES !== "undefined") {
    return GLOBAL_VARIABLES[key] ? GLOBAL_VARIABLES[key] : null;
  }
  return null;
};
export default {
  NEXT_PUBLIC_BASE_URL:
    getEnvironmentValue("NEXT_PUBLIC_BASE_URL") ||
    process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_API_URL:
    getEnvironmentValue("NEXT_PUBLIC_API_URL") ||
    process.env.NEXT_PUBLIC_API_URL,
  PRIVATE_API_TOKEN:
    getEnvironmentValue("PRIVATE_API_TOKEN") || process.env.PRIVATE_API_TOKEN,
};
