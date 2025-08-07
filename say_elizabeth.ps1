
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice = "Microsoft Aria Online (Natural) - English (United States)"
$availableVoices = $synth.GetInstalledVoices().VoiceInfo.Name
if ($availableVoices -contains $voice) {
    $synth.SelectVoice($voice)
}
$synth.Speak("my, Welcome back, Gautam. Ready to code?")
