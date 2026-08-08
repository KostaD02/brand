function format(message: string): string {
  return `[${new Date().toLocaleString()}]: ${message}`;
}

export function log(message: string, isError = false): void {
  if (isError) {
    console.error(format(message));
  } else {
    console.log(format(message));
  }
}
