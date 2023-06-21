const truncate = (input: string, limit: number) =>
  input && input.length > limit ? `${input.substring(0, limit)}...` : input;

export { truncate };
