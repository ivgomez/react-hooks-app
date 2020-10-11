export const heavyProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("here we come...");
  }
  return `${iterations} iterations done`;
};
