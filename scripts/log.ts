export function log(
  message: string,
  isSilentMode = false,
  bypass = false,
  isError = false,
): void {
  if (isSilentMode && !bypass) {
    return;
  }
  const date = new Date();
  if (isError) {
    console.error(`[${date.toLocaleString()}]: ${message}`);
  } else {
    console.log(`[${date.toLocaleString()}]: ${message}`);
  }
}
