console.log("Hello World");

let hasDownloadedResume = false;
let userName = "Vance Lambert";

document.getElementById("download-button").addEventListener("click", delayedDisplayDownload);
showGreeting();
console.log("There are " + daysUntilDeadline("2024-12-04") + " days until Project 3 is due.");

function displayDownload()
{
    if(!hasDownloadedResume)
    {
    alert("Your resume downloaded successfully!");
    }

    hasDownloadedResume = true;
}

function delayedDisplayDownload() {
    setTimeout(displayDownload, 2000);
  }

function showGreeting()
{
    let greetingMessage = "Hello, my name is " + userName +"! Welcome to my portfolio";
    document.querySelector("#Greeting p").textContent = greetingMessage;
}

function daysUntilDeadline(dueDate)
{
    const currentDate = Date.now();
    const targetDate = new Date(dueDate).getTime();
    const difference = targetDate - currentDate;
    const days = Math.round(difference / (1000 * 3600 * 24));
    return days;
}
