const firebaseConfig = {
    apiKey: "AIzaSyB07dFfdC8Kv21erYsKyl9mhMg7EAD6fYI",
    authDomain: "kwitterproject2-27929.firebaseapp.com",
    databaseURL: "https://kwitterproject2-27929-default-rtdb.firebaseio.com",
    projectId: "kwitterproject2-27929",
    storageBucket: "kwitterproject2-27929.appspot.com",
    messagingSenderId: "394091064269",
    appId: "1:394091064269:web:bf1aafa9bd5fc8b7e57284"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            //Start code
            console.log(roomNames);
            div = document.createElement("div");
            div.id = roomNames;
            div.innerHTML = roomNames;
            div.onclick = goToRoom;
            var hr = document.createElement("hr");
            div.appendChild(hr);
            document.getElementById("output").appendChild(div);
            //End code
        });
    });
}
getData();

function getName() {
    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + username + "!";
}

function addRoom() {
    roomName = document.getElementById("roomIdInput").value;
    localStorage.setItem("roomName", roomName);
    dbRef = firebase.database().ref("/");
    dbRef.child(roomName).update({
        purpose: "addingRoom"
    })
    window.location = "kwitterPage.html";
}

function logout() {
    window.location = "index.html";
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
}

function goToRoom(e) {
    console.log(e.target.id);
    localStorage.setItem("currentRoom", e.target.id);
    window.location = "kwitterPage.html";
}