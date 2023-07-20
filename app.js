const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats= document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = 'Medium';

decreaseTempoBtn.addEventListener('click', () =>{
  if (bpm <= 20) { return }
  bpm--;
  validateTempo()
  updateMetronome()
});

increaseTempoBtn.addEventListener('click', () =>{
    if (bpm >= 280) { return }
    bpm++;
    validateTempo()
    updateMetronome()
  });

  tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo()
    updateMetronome()
  });

  subtractBeats.addEventListener('click', () => {
    if (beatsPerMeasure <= 2) { return }
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
  });

  addBeats.addEventListener('click', () => {
    if (beatsPerMeasure >= 12) { return }
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
  });

  function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;

    if (bpm <= 39) { tempoTextString = "T-T-Today Junior!" };
    if (bpm > 39 && bpm <= 60) { tempoTextString = "Largo" };
    if (bpm > 60 && bpm <= 66) { tempoTextString = "Larghetto" };
    if (bpm > 66 && bpm <=76)  { tempoTextString = "Adagio" };
    if (bpm > 76 && bpm <=108)  { tempoTextString = "Andante" };
    if (bpm > 108 && bpm <=120)  { tempoTextString = "Moderato" };
    if (bpm > 120 && bpm <=168)  { tempoTextString = "Allegro" };
    if (bpm > 168 && bpm <=200)  { tempoTextString = "Presto" };
    if (bpm > 200 && bpm <=280)  { tempoTextString = "Prestissimo" };
    

    tempoText.textContent = tempoTextString;
  };



  function validateTempo() {
    if (bpm <= 20) { return }
    if (bpm >= 280) { return }
  };



