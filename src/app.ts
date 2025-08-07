import prompt from "prompt-sync";

console.log("Hey there!, I'm Elizabeth!");
console.log("How can I help you?");

const ask = prompt();

const answer = ask("What do you want to do?");

if (answer === "fetch") {
    import("./fetchSite").then(({ default: fetchSite }) => fetchSite(ask("What is the URL?")));
} else {
    console.log("I don't know what you want me to do.");
}
