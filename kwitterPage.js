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

currentRoom = localStorage.getItem("currentRoom");

function getData() {
    firebase.database().ref("/" + currentRoom).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();


function logout() {
    window.location = "index.html";
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    localStorage.removeItem("currentRoom");
}

function getName() {
    username = localStorage.getItem("username");
    console.log(currentRoom);
    console.log(username);
}

function send() {
    userMessage = document.getElementById("messageInput").value;
    dbRef = firebase.database().ref(currentRoom);
    dbRef.push({
        username: username,
        message: userMessage,
        likes: 0
    })
    document.getElementById("messageInput").value = "";
}