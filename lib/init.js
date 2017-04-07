function init({ dir, engine }) {
  console.log('Dir:', dir);
  console.log('Engine:', engine);
}

module.exports = {
  handler: init,
  builder: _ => _
    .default('dir', '.')
    .option('engine', { alias: 'x', default: 'default' })
};
