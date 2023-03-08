// let displayNav = document.getElementById('display-nav');
// let displayBtn = document.getElementById('display-btn');

// displayBtn.addEventListener('click', () => {
//     if (displayNav.style.height == '0px') {
//         displayNav.style.height = 'auto';
//     } else {
//         displayNav.style.height = '0px';
//     }
// });

function copyToClipboard() {
    console.log(e.target);
  const textToCopy = this.previousElementSibling.textContent;
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  console.log(textToCopy);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

const copyElements = document.querySelectorAll('.copy');
copyElements.forEach(element => {
  element.addEventListener('click', copyToClipboard);
});

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    console.log(printContents);
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

// const downloadCV = document.getElementById('download');
// downloadCV.addEventListener('click', printDiv('cv'));

  
