const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleupdate() {
    const atback=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+atback);
}

inputs.forEach(input => input.addEventListener('change',handleupdate));
inputs.forEach(inputs => inputs.addEventListener('mousemove',handleupdate));