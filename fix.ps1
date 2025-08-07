# Elizabeth Voice Warm-Up Script (Windows PowerShell)

Add-Type -AssemblyName System.Speech

$voice = "Microsoft Aria Online (Natural) - English (United States)"  # You can change this
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer

# Set voice if available
$availableVoices = $synth.GetInstalledVoices().VoiceInfo.Name
if ($availableVoices -contains $voice) {
    $synth.SelectVoice($voice)
    Write-Host "✅ Using voice: $voice"
} else {
    Write-Host "⚠️ Voice not found. Available voices:"
    $availableVoices | ForEach-Object { Write-Host "• $_" }
}

# Warm-up with a silent buffer
$synth.Speak("... Initializing voice engine.")
Write-Host "✅ Voice engine warmed up. You're ready to go!"
