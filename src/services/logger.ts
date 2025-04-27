export const logger = {
  info: (message: unknown) => {
    console.log(
      `[INFO] ${JSON.stringify(message)} - ${new Date().toISOString()}`,
    );
  },
  error: (message: unknown, error: Error) => {
    console.error(
      `[ERROR] ${JSON.stringify(message)} - ${new Date().toISOString()}`,
    );
    console.error(error);
  },
};
