
document.addEventListener('DOMContentLoaded', function () {
  console.log('123');
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
  const el = document.querySelectorAll('.tabs');
  const instance = M.Tabs.init(el);
});

