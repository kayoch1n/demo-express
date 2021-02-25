function goodbye(params) {
  const { interface } = params;
  return `Goodbye, ${interface}!`;
}

exports.goodbye = goodbye;

