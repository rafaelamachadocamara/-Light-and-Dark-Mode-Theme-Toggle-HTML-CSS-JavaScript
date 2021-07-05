const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    // Mudar tema do website
    document.body.classList.toggle("dark")
})