function guardrail(mathFunction) {
  const msg = 'Guardrail was processed';
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push(msg);
  }
  return queue;
}

export default guardrail;
