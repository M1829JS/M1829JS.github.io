let password = document.getElementById("password");
let login = document.getElementById("login");
let log = document.getElementsByClassName('log');
function sign() {
  if (password = login) {
    SubmitEvent.apply;
  } else {
    document.getElementById("login").value = "";
    alert("please enter the correct password");
  };
};
let selectedFile = document.getElementById("formFile").files[0];
let inputelement = document.getElementById("formFile");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
};
if (inputelement >= 1) {

}
const numFiles = fileList.length;
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
};

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
};
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
};