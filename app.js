const dark = document.getElementById('dark');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        trans();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        trans();
    }    
}

dark.addEventListener('change', switchTheme, false);

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };