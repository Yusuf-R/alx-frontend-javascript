function guardrail(mathFunction) {
  const msg = 'Guardrail was processed';
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push(msg);
  }
  return queue;
}

export default guardrail;
