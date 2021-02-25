function goodbye(params) {
  let msg = `Goodbye`;
  const { interface } = params;
  msg = `${msg}, ${interface};`
  return msg;
}

exports.goodbye = goodbye;

