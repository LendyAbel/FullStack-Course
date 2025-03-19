```mermaid
sequenceDiagram
    participant browser
    participant server

browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
Note right of the server: Server push in notes the new note
Note right of the browser: Browser refresh the page
