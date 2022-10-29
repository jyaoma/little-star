let hidden = true;

const showHideDarbyText = () => {
  hidden = !hidden;
  if (hidden) {
    document.querySelector('#darby-text').classList.remove('darby--hover');
  } else {
    document.querySelector('#darby-text').classList.add('darby--hover');
  }
};
