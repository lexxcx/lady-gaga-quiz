const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

const heroSection = document.getElementById("heroSection");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");
const answersBox = document.getElementById("answersBox");

const resultTitle = document.getElementById("resultTitle");
const resultSong = document.getElementById("resultSong");
const resultDescription = document.getElementById("resultDescription");
const resultWhyText = document.getElementById("resultWhyText");
const resultImage = document.getElementById("resultImage");
const shareTextBox = document.getElementById("shareTextBox");

const playPauseBtn = document.getElementById("playPauseBtn");
const restartTrackBtn = document.getElementById("restartTrackBtn");
const resultAudio = document.getElementById("resultAudio");
const resultAudioSource = document.getElementById("resultAudioSource");
const audioTitle = document.getElementById("audioTitle");
const musicStatus = document.getElementById("musicStatus");

const playerCover = document.getElementById("playerCover");
const playerSongName = document.getElementById("playerSongName");
const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");
const playerProgressFill = document.getElementById("playerProgressFill");
const progressArea = document.getElementById("progressArea");

const songs = {
  howBadDoUWantMe: {
    title: "How Bad Do U Want Me",
    songLine: "Для глибокої, складної, внутрішньо насиченої людини",
    image: "assets/images/howbad.jpg",
    audio: "assets/music/howbad.mp3",
    description:
      "Ти не поверхневий. У тобі багато підтексту, напруги, прихованих смислів і емоцій, які не всі вміють побачити. Ти з тих людей, яких не можна зрозуміти за перші п’ять хвилин.",
    why:
      "У тебе високі показники глибини, внутрішньої інтенсивності та психологічної складності. Ти не просто відчуваєш — ти проживаєш, аналізуєш і носиш у собі більше, ніж показуєш.",
    share:
      "Моя пісня Lady Gaga — How Bad Do U Want Me. Я глибока, складна і внутрішньо дуже насичена людина."
  },

  abracadabra: {
    title: "Abracadabra",
    songLine: "Для людини з магнетизмом, сміливістю і dark-glam енергією",
    image: "assets/images/abracadabra.jpg",
    audio: "assets/music/abracadabra.mp3",
    description:
      "Ти яскравий, трохи небезпечний і дуже магнетичний. У тобі є театральність, внутрішня сила й відчуття, що ти можеш змінити атмосферу просто своєю появою.",
    why:
      "У тебе сильне поєднання харизми, сценічної енергії, сміливості й love-for-drama. Ти не тінь — ти подія.",
    share:
      "Моя пісня Lady Gaga — Abracadabra. У мені є магнетизм, dark-glam і сильна присутність."
  },

  bornThisWay: {
    title: "Born This Way",
    songLine: "Для людини зі свободою, внутрішньою правдою і сміливістю бути собою",
    image: "assets/images/born-this-way.jpg",
    audio: "assets/music/born-this-way.mp3",
    description:
      "Ти дуже цінуєш справжність. Тобі важливо жити так, щоб не зраджувати себе. У тобі є свобода, гідність і внутрішній вогонь, який не любить фальш.",
    why:
      "У тебе високі показники автентичності, незалежності та стійкості до чужих стандартів. Ти не хочеш підлаштовуватись — ти хочеш бути собою повністю.",
    share:
      "Моя пісня Lady Gaga — Born This Way. Я про свободу, правду і сміливість бути собою."
  },

  pokerFace: {
    title: "Poker Face",
    songLine: "Для людини з контролем, загадковістю і холодною елегантністю",
    image: "assets/images/poker-face.jpg",
    audio: "assets/music/poker-face.mp3",
    description:
      "Ти вмієш не показувати все одразу. У тобі є самоконтроль, спостережливість і стильна дистанція. Не всі розуміють тебе швидко — і в цьому твоя сила.",
    why:
      "У тебе сильний профіль стриманості, контролю емоцій і внутрішньої зібраності. Ти не хаотичний — ти точний.",
    share:
      "Моя пісня Lady Gaga — Poker Face. Я загадковість, контроль і холодна елегантність."
  },

  justDance: {
    title: "Just Dance",
    songLine: "Для людини з легкою, живою, соціальною енергією",
    image: "assets/images/just-dance.jpg",
    audio: "assets/music/just-dance.mp3",
    description:
      "Ти вмієш рухатись через життя легше за інших. У тобі є жива енергія, відкритість до моменту, любов до відчуття “бути тут і зараз”.",
    why:
      "У тебе високі показники соціальної енергії, спонтанності та здатності не тонути в зайвому перевантаженні. Ти вносиш рух і повітря.",
    share:
      "Моя пісня Lady Gaga — Just Dance. Я про живість, рух і легку сильну енергію."
  },

  bloodyMary: {
    title: "Bloody Mary",
    songLine: "Для людини з темною глибиною, містикою і важкою красою",
    image: "assets/images/bloody-mary.jpg",
    audio: "assets/music/bloody-mary.mp3",
    description:
      "У тобі є особлива темна естетика. Ти можеш бути тихим, але дуже сильним. Тебе тягне до символів, глибини, нічного вайбу і складної краси.",
    why:
      "У тебе високі показники внутрішньої глибини, темної романтики та емоційної ваги. Ти не легковажний вайб — ти атмосфера.",
    share:
      "Моя пісня Lady Gaga — Bloody Mary. Я темна глибина, містика і важка краса."
  },

  badRomance: {
    title: "Bad Romance",
    songLine: "Для людини з інтенсивним серцем і максимальною емоційною віддачею",
    image: "assets/images/bad-romance.jpg",
    audio: "assets/music/bad-romance.mp3",
    description:
      "Ти проживаєш усе сильно. Якщо любиш — то сильно. Якщо болить — то глибоко. У тобі є магнетична романтична інтенсивність і внутрішня фатальність.",
    why:
      "У тебе високий рівень пристрасті, емоційної сили, драматичної романтичності й внутрішньої напруги. Ти не “трохи” — ти максимально.",
    share:
      "Моя пісня Lady Gaga — Bad Romance. Я інтенсивність, пристрасть і фатальна емоційна сила."
  },

  dieWithASmile: {
    title: "Die With A Smile",
    songLine: "Для людини з ніжністю, емоційною зрілістю і любов’ю, що йде глибоко",
    image: "assets/images/die-with-a-smile.jpg",
    audio: "assets/music/die-with-a-smile.mp3",
    description:
      "Ти м’який не тому, що слабкий, а тому, що вмієш по-справжньому відчувати. У тобі є ніжність, сердечність і доросла емоційна краса.",
    why:
      "У тебе сильний профіль емоційної зрілості, тепла, романтичної щирості та здатності любити без гри. Ти про глибоке серце, а не тільки про ефект.",
    share:
      "Моя пісня Lady Gaga — Die With A Smile. Я ніжність, глибоке серце і емоційна зрілість."
  }
};

const questions = [
  {
    text: "Що люди найчастіше відчувають від тебе з першої зустрічі?",
    hint: "Це питання міряє твою базову присутність у світі.",
    answers: [
      { text: "Що в мені є щось складне, глибоке і неочевидне.", weights: { howBadDoUWantMe: 4, bloodyMary: 2, pokerFace: 1 } },
      { text: "Що я магнетичний, яскравий і в мені є шоу-енергія.", weights: { abracadabra: 3, justDance: 1, badRomance: 1 } },
      { text: "Що я спокійний, зібраний і не все показую одразу.", weights: { pokerFace: 4, howBadDoUWantMe: 1 } },
      { text: "Що я теплий, живий і з мною легко.", weights: { justDance: 3, dieWithASmile: 2 } }
    ]
  },

  {
    text: "Коли в тебе сильні почуття, ти зазвичай...",
    hint: "Це питання міряє стиль переживання емоцій.",
    answers: [
      { text: "Ношу їх дуже глибоко всередині, довго проживаю і аналізую.", weights: { howBadDoUWantMe: 4, bloodyMary: 2 } },
      { text: "Відчуваю все максимально сильно, майже до крайності.", weights: { badRomance: 4, abracadabra: 1 } },
      { text: "Тримаю обличчя і контролюю себе, навіть якщо всередині буря.", weights: { pokerFace: 4, howBadDoUWantMe: 1 } },
      { text: "Стараюся не тонути в цьому і рухатись далі.", weights: { justDance: 3, bornThisWay: 1 } }
    ]
  },

  {
    text: "Яка правда про тебе найточніша?",
    hint: "Тут перевіряється твоя внутрішня опора.",
    answers: [
      { text: "Мені дуже важливо бути собою, навіть якщо це комусь не подобається.", weights: { bornThisWay: 5 } },
      { text: "Я складніший, ніж здаюсь, і не люблю, коли мене читають поверхнево.", weights: { howBadDoUWantMe: 4, pokerFace: 1 } },
      { text: "Я створений для сильного ефекту, стилю і великого вайбу.", weights: { abracadabra: 3, justDance: 1, badRomance: 1 } },
      { text: "У мені дуже багато ніжності, але я не всім її показую.", weights: { dieWithASmile: 4, howBadDoUWantMe: 1 } }
    ]
  },

  {
    text: "Яка естетика тобі найближча?",
    hint: "Це питання міряє емоційно-візуальний тип.",
    answers: [
      { text: "Темна, містична, майже sacred.", weights: { bloodyMary: 5 } },
      { text: "High-fashion, dangerous glam, сильна присутність.", weights: { abracadabra: 4, badRomance: 1 } },
      { text: "Чиста, холодна, точна, елегантна.", weights: { pokerFace: 5 } },
      { text: "Жива, вільна, рухлива, без зайвого пафосу.", weights: { justDance: 4, bornThisWay: 1 } }
    ]
  },

  {
    text: "Що для тебе найцінніше в любові?",
    hint: "Це питання відділяє інтенсивність від зрілості й глибини.",
    answers: [
      { text: "Максимальна пристрасть і відчуття, що це щось фатальне.", weights: { badRomance: 5 } },
      { text: "Глибоке емоційне розуміння і сильний внутрішній зв’язок.", weights: { howBadDoUWantMe: 4, dieWithASmile: 1 } },
      { text: "Ніжність, вірність і справжня сердечність.", weights: { dieWithASmile: 5 } },
      { text: "Свобода бути собою у стосунках.", weights: { bornThisWay: 4, justDance: 1 } }
    ]
  },

  {
    text: "Як ти поводишся, коли тебе недооцінили?",
    hint: "Тут міряється твоя реакція на тиск світу.",
    answers: [
      { text: "Стаю ще сильнішим і хочу довести, що мене не можна ігнорувати.", weights: { abracadabra: 3, badRomance: 2 } },
      { text: "Зовні майже нічого не показую.", weights: { pokerFace: 4 } },
      { text: "Мене це реально ранить, і я довго думаю про це.", weights: { howBadDoUWantMe: 3, bloodyMary: 2 } },
      { text: "Нагадую собі, хто я є, і не даю цьому зламати мене.", weights: { bornThisWay: 4, dieWithASmile: 1 } }
    ]
  },

  {
    text: "Яка твоя енергія в компанії?",
    hint: "Питання про соціальну батарейку та роль серед людей.",
    answers: [
      { text: "Я оживаю, коли є рух, музика і момент.", weights: { justDance: 5 } },
      { text: "Я не найгучніший, але в мені відчувається вага.", weights: { bloodyMary: 3, howBadDoUWantMe: 2 } },
      { text: "Я можу бути very iconic без зайвих рухів.", weights: { pokerFace: 4, abracadabra: 1 } },
      { text: "Я люблю бути яскравим і незабутнім.", weights: { abracadabra: 4, justDance: 1 } }
    ]
  },

  {
    text: "Що тобі ближче у внутрішньому світі?",
    hint: "Це питання спеціально впливає на глибину.",
    answers: [
      { text: "Підтексти, психологія, друге дно, складність.", weights: { howBadDoUWantMe: 6 } },
      { text: "Темрява, символи, нічний вайб, ритуальна краса.", weights: { bloodyMary: 5 } },
      { text: "Світло, щирість, сенс, людяність.", weights: { dieWithASmile: 4, bornThisWay: 1 } },
      { text: "Сміливість, імпульс, сильний ефект.", weights: { abracadabra: 3, badRomance: 2 } }
    ]
  },

  {
    text: "Що з цього звучить як твоя особиста філософія?",
    hint: "Питання про головний вектор життя.",
    answers: [
      { text: "Я хочу жити чесно до себе.", weights: { bornThisWay: 5 } },
      { text: "Я хочу, щоб мене не просто бачили, а відчували.", weights: { howBadDoUWantMe: 3, badRomance: 2 } },
      { text: "Я хочу залишати враження і змінювати атмосферу.", weights: { abracadabra: 4, pokerFace: 1 } },
      { text: "Я хочу любити й жити по-справжньому, без пустоти.", weights: { dieWithASmile: 4, justDance: 1 } }
    ]
  },

  {
    text: "Який результат відчувається для тебе майже інстинктивно?",
    hint: "Фінальне питання для тонкого уточнення.",
    answers: [
      { text: "How Bad Do U Want Me — бо я реально глибока людина.", weights: { howBadDoUWantMe: 7 } },
      { text: "Bloody Mary — бо в мені є темна атмосфера і серйозність.", weights: { bloodyMary: 5 } },
      { text: "Bad Romance — бо я дуже інтенсивно все проживаю.", weights: { badRomance: 5 } },
      { text: "Die With A Smile — бо в мені є справжнє серце й ніжність.", weights: { dieWithASmile: 5 } }
    ]
  }
];

let currentQuestion = 0;
let scores = createEmptyScores();
let currentWinnerKey = null;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);
copyBtn.addEventListener("click", copyResultText);
shareBtn.addEventListener("click", shareResult);
playPauseBtn.addEventListener("click", toggleAudioPlayback);
restartTrackBtn.addEventListener("click", restartTrack);
progressArea.addEventListener("click", seekAudio);

resultAudio.addEventListener("loadedmetadata", updateDuration);
resultAudio.addEventListener("timeupdate", updateProgress);
resultAudio.addEventListener("play", onAudioPlay);
resultAudio.addEventListener("pause", onAudioPause);
resultAudio.addEventListener("ended", onAudioEnded);
resultAudio.addEventListener("waiting", onAudioWaiting);
resultAudio.addEventListener("canplay", onAudioCanPlay);
resultAudio.addEventListener("error", onAudioError);

function createEmptyScores() {
  return {
    howBadDoUWantMe: 0,
    abracadabra: 0,
    bornThisWay: 0,
    pokerFace: 0,
    justDance: 0,
    bloodyMary: 0,
    badRomance: 0,
    dieWithASmile: 0
  };
}

function startQuiz() {
  currentQuestion = 0;
  scores = createEmptyScores();
  currentWinnerKey = null;

  stopAudio();

  heroSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const item = questions[currentQuestion];

  progressText.textContent = `Питання ${currentQuestion + 1} / ${questions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  questionText.textContent = item.text;
  questionHint.textContent = item.hint;
  answersBox.innerHTML = "";

  item.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.type = "button";

    btn.addEventListener("click", () => {
      applyWeights(answer.weights);
      currentQuestion += 1;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });

    answersBox.appendChild(btn);
  });
}

function applyWeights(weights) {
  for (const key in weights) {
    if (Object.prototype.hasOwnProperty.call(weights, key)) {
      scores[key] += weights[key];
    }
  }
}

function showResult() {
  currentWinnerKey = getWinnerKey();
  const data = songs[currentWinnerKey];

  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  resultTitle.textContent = data.title;
  resultSong.textContent = data.songLine;
  resultDescription.textContent = data.description;
  resultWhyText.textContent = data.why;
  resultImage.src = data.image;
  resultImage.alt = data.title;
  shareTextBox.textContent = data.share;

  setupAudio(data);
}

function getWinnerKey() {
  let bestKey = "howBadDoUWantMe";

  for (const key in scores) {
    if (scores[key] > scores[bestKey]) {
      bestKey = key;
    }
  }

  return bestKey;
}

function restartQuiz() {
  stopAudio();

  resultSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  heroSection.classList.remove("hidden");
  progressFill.style.width = "0%";
  currentWinnerKey = null;
}

function setupAudio(songData) {
  stopAudio();

  resultAudioSource.src = songData.audio;
  resultAudio.load();

  audioTitle.textContent = songData.title;
  playerSongName.textContent = songData.title;
  playerCover.src = songData.image;
  playerCover.alt = songData.title;

  currentTimeEl.textContent = "0:00";
  durationTimeEl.textContent = "0:00";
  playerProgressFill.style.width = "0%";
  setPlayIcon("▶");
  musicStatus.textContent = "Готово до відтворення";
}

async function toggleAudioPlayback() {
  if (!currentWinnerKey) return;

  try {
    if (resultAudio.paused) {
      await resultAudio.play();
    } else {
      resultAudio.pause();
    }
  } catch (error) {
    musicStatus.textContent = "Не вдалося запустити трек";
  }
}

function restartTrack() {
  if (!currentWinnerKey) return;

  resultAudio.currentTime = 0;

  resultAudio.play().catch(() => {
    musicStatus.textContent = "Не вдалося перезапустити трек";
  });
}

function stopAudio() {
  resultAudio.pause();
  resultAudio.currentTime = 0;
  resultAudioSource.src = "";
  resultAudio.load();

  setPlayIcon("▶");
  currentTimeEl.textContent = "0:00";
  durationTimeEl.textContent = "0:00";
  playerProgressFill.style.width = "0%";
  musicStatus.textContent = "Готово до відтворення";
}

function onAudioPlay() {
  setPlayIcon("❚❚");
  musicStatus.textContent = "Зараз грає";
}

function onAudioPause() {
  if (!resultAudio.ended && resultAudio.currentTime > 0) {
    setPlayIcon("▶");
    musicStatus.textContent = "На паузі";
  }
}

function onAudioEnded() {
  setPlayIcon("▶");
  musicStatus.textContent = "Трек завершився";
  playerProgressFill.style.width = "100%";
}

function onAudioWaiting() {
  musicStatus.textContent = "Завантаження...";
}

function onAudioCanPlay() {
  if (resultAudio.paused && resultAudio.currentTime === 0) {
    musicStatus.textContent = "Готово до відтворення";
  }
}

function onAudioError() {
  musicStatus.textContent = "Не вдалося завантажити трек";
}

function updateDuration() {
  durationTimeEl.textContent = formatTime(resultAudio.duration);
}

function updateProgress() {
  const current = resultAudio.currentTime;
  const duration = resultAudio.duration || 0;

  currentTimeEl.textContent = formatTime(current);

  if (duration > 0) {
    const percent = (current / duration) * 100;
    playerProgressFill.style.width = `${percent}%`;
  } else {
    playerProgressFill.style.width = "0%";
  }
}

function seekAudio(event) {
  if (!resultAudio.duration) return;

  const rect = progressArea.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;
  const percent = Math.max(0, Math.min(1, clickX / width));

  resultAudio.currentTime = percent * resultAudio.duration;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function setPlayIcon(icon) {
  playPauseBtn.setAttribute("data-icon", icon);
}

async function copyResultText() {
  if (!currentWinnerKey) return;

  const text = songs[currentWinnerKey].share;

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Скопійовано";
    setTimeout(() => {
      copyBtn.textContent = "Скопіювати результат";
    }, 1500);
  } catch (error) {
    copyBtn.textContent = "Не вдалося";
    setTimeout(() => {
      copyBtn.textContent = "Скопіювати результат";
    }, 1500);
  }
}

async function shareResult() {
  if (!currentWinnerKey) return;

  const text = songs[currentWinnerKey].share;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Моя пісня Lady Gaga",
        text
      });
    } catch (error) {
      /* ignore */
    }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      shareBtn.textContent = "Текст скопійовано";
      setTimeout(() => {
        shareBtn.textContent = "Поширити";
      }, 1500);
    } catch (error) {
      shareBtn.textContent = "Не вдалося";
      setTimeout(() => {
        shareBtn.textContent = "Поширити";
      }, 1500);
    }
  }
}