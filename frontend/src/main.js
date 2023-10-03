//Global JS function for greeting
function greet() {
    //Get user input
    let inputName = document.getElementById("name").value;

    //Call Go Greet function
    window.go.main.App.Greet(inputName).then(result => {
        //Display result from Go
        document.getElementById("result").innerHTML = result;
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        console.log("finished!")
    });
}