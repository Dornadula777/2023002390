export async function Log(stack, level, pkg, message) {
  console.log({
    stack,
    level,
    package: pkg,
    message,
  });
}