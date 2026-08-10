function format(message: string): string {
  return `[${new Date().toLocaleString()}]: ${message}`;
}

export function log(message: string, isSilent = false, isError = false): void {
  if (isSilent) {
    return;
  }

  if (isError) {
    console.error(format(message));
  } else {
    console.log(format(message));
  }
}
