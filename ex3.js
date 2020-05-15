let btn = document.getElementById('btn');
btn.addEventListener('click', paragraphClick);


function paragraphClick() {
  let dff = confirm('tap on button');
  if (dff) {
    alert('if confirm === true');
  }
}

