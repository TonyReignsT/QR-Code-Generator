let btn = document.getElementById("generate");
btn.addEventListener("click", function(){

let imageBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let input = document.getElementById("textInput");


if(input.value.length == ""){
    alert("Text field should Not be Empty!!!");
}
else {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
imageBox.classList.add("show-img");

} 
})


// Download Button 

let generateBtn = document.getElementById("generate");
let downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", function() {
    let qrImage = document.getElementById("qrImage");
    let input = document.getElementById("textInput");

    if (input.value.trim() === "") {
        alert("Please generate a QR code first.");
    } else if (qrImage.src === "") {
        alert("No QR code generated to download.");
    } else {
        // temporary link to trigger download
        let downloadLink = document.createElement('a');
        downloadLink.href = qrImage.src;
        downloadLink.download = 'qr_code.png';
        downloadLink.click(); // click to trigger download
    }
});
