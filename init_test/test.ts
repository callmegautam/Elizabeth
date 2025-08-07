import { ttsSave } from "edge-tts";

async function runTTS() {
    try {
        await ttsSave("Hello Gautam! This is your female TTS voice.", "./output.mp3", {
            voice: "en-US-JennyNeural", // Female voice
            volume: "+0%", // default volume
            rate: "0%", // default speed
            pitch: "0Hz", // default pitch
        });

        console.log("✅ Audio saved to output.mp3");
    } catch (error) {
        console.error("❌ Error:", error);
    }
}

runTTS();
