function changeTheme(){
    document.getElementById("body").classList.toggle("dark-mode");
    if(localStorage.getItem('theme') == "light"){
      localStorage.setItem('theme', 'dark');
      document.getElementById("themeButton").innerHTML = "Change to Dark Theme";
    }
    else{
      localStorage.setItem('theme', 'light');
      document.getElementById("themeButton").innerHTML = "Change to Light Theme";
    }
}

if(localStorage.getItem('theme') == "dark"){
    document.getElementById("body").classList.add("dark-mode");
}
else{
    document.getElementById("body").classList.remove("dark-mode");
}