let username = prompt("Enter UserName: ")
if(username === "Admin") {
    let password = prompt("Enter Password: ")
    if (password === "TheMaster"){
        console.log("Welcome home byeach")
    }else if (password === '' || password != "admin"){
        console.log("Yeah f off byeach")
    }
    }
else if (username !="Admin")
    console.log("U not him byeach get out")
        