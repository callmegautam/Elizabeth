import { exec } from "child_process";

/**
 * Speak using Windows built-in TTS (PowerShell)
 * @param {string} voice - Name of the installed voice (e.g., "Zira", "David")
 * @param {string} text - Text to speak
 * @param {Object} options - Optional: rate (0.1 to 10.0)
 */
function speak(voice, text, options = {}) {
    const { rate = 4 } = options;

    const escapedText = text.replace(/'/g, "''"); // Escape single quotes for PowerShell

    const command =
        `PowerShell -Command "Add-Type -AssemblyName System.Speech; ` +
        `$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; ` +
        `$speak.SelectVoice('${voice}'); ` +
        `$speak.Rate = ${Math.round(rate * 2 - 10)}; ` + // PowerShell range: -10 to 10
        `$speak.Speak('${escapedText}');"`;

    exec(command, (error, stdout, stderr) => {
        if (error) console.error("TTS Error:", stderr);
    });
}

speak("Zira", "... My name is Elizabeth");
