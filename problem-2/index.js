const notesContainer = document.getElementsById("app");
const addNotesBtn = notesContainer.querySelector(".add-note");

function getNotes() {
    return JSON.parse(localStorage.getItem("notes") || "[]");
}

function saveNotes(notes) {
     localStorage.setItem("notes",JSON.stringify(notes));
}

function createNoteElement(id,content) {

}   

function addNote() {

}

function updateNotes(id,content) {

}

function deleteNote(id,element) {
    
}