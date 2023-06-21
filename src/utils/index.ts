const truncate = (input: string, limit: number) =>
  input && input.length > limit ? `${input.substring(0, limit)}...` : input;

// eslint-disable-next-line @typescript-eslint/ban-types
function debounce<T extends Function>(callBack: T, delay = 20) {
  let timeOut: ReturnType<typeof setTimeout> = setTimeout(() => false);
  const callable = (...args: any) => {
    clearTimeout(timeOut);

    timeOut = setTimeout(() => callBack(...args), delay);
  };
  return <T>(<any>callable);
}

export { truncate, debounce };
