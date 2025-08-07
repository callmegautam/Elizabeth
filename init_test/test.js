import edgeTTS from "edge-tts";

async function speak(text) {
    try {
        await edgeTTS.playAudio(text, {
            voice: "en-US-JennyNeural", // Zira-like neural voice
        });
    } catch (err) {
        console.error("Speech error:", err);
    }
}

speak("My name is Elizabeth, your assistant.");
