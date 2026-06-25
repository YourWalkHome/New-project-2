const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const contactEmail = "hello@fancyafungi.com.au";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const business = formData.get("business") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const interest = formData.get("interest") || "General enquiry";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(`Fancy A Fungi enquiry - ${interest}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Business or organisation: ${business}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Enquiry type: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Your email draft has been prepared. Please review and send it from your email app.";
    }
  });
}

const whisperTopics = {
  grow: {
    kicker: "Growing curiosity",
    title: "Can I grow mushrooms at home?",
    intro: "Hmm, that's a good mushroom question. Start simple: mushrooms like clean conditions, steady moisture, fresh air, and patience.",
    defaultAnswer:
      "A good kit, clean hands, steady moisture, enough fresh air, and a little patience will teach you plenty before things get fancy.",
    contactBody:
      "Hi Benny, I have a mushroom growing question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "What do mushrooms need to grow well?",
        answer:
          "They need the right food, moisture, fresh air, temperature, and cleanliness. Small changes matter. Too dry and they stall; too wet and things can go sideways; too little fresh air and the mushrooms can grow long and leggy.",
      },
      {
        label: "Why does consistency matter?",
        answer:
          "Mushrooms respond to their environment. A steady rhythm helps the grower understand what changed, what worked, and what needs adjusting. That is why Fancy A Fungi is careful about contamination control and repeatable production.",
      },
      {
        label: "Can I grow mushrooms at home?",
        answer:
          "Yes, but start simple. Use a reputable kit, follow the instructions, and pay attention to what you see and smell. Tell me the timing, colour, moisture, and airflow first, and we can have a more useful look.",
      },
    ],
  },
  kit: {
    kicker: "Grow-kit check",
    title: "Something looks wrong with my grow kit",
    intro: "Let's have a proper look at that. With grow kits, the little clues matter: colour, smell, texture, moisture, airflow, and timing.",
    defaultAnswer:
      "First, do not panic. Tell me what you are seeing before changing too much. A photo can help, but unusual colours, sour smells, slimy patches, or fast-spreading fuzzy growth should be treated cautiously and checked with the kit supplier or a knowledgeable grower.",
    contactBody:
      "Hi Benny, I have a grow-kit question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "What should I describe first?",
        answer:
          "Tell me the colour, smell, texture, how many days since opening, whether the kit looks too wet or too dry, and where it is sitting. Small clue, big difference with mushrooms.",
      },
      {
        label: "When should I stop and ask someone?",
        answer:
          "If you notice strong sour or rotten smells, black or green patches, sliminess, or anything spreading quickly, pause and check with the kit supplier or a local grower. Do not taste anything from a kit that seems off.",
      },
      {
        label: "Could it just be normal mushroom fuzz?",
        answer:
          "Sometimes white fuzzy growth is just mycelium doing its work. But colour, smell, timing, and texture all matter. If it is not clean white, or it smells wrong, treat it as a question for a real person with the kit in front of them.",
      },
    ],
  },
  cook: {
    kicker: "Kitchen and freshness",
    title: "How do I cook these?",
    intro: "Good fresh mushrooms deserve a gentle hand and a hot pan. White Oysters are quick, savoury, and forgiving once you know their rhythm.",
    defaultAnswer:
      "Keep them cool, give them a little airflow, and cook them with enough heat to let moisture move off. Then bring in garlic, butter, herbs, soy, lemon, chilli, cream, or whatever direction dinner is taking.",
    contactBody:
      "Hi Benny, I have a cooking or storage question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "How should I store them?",
        answer:
          "Keep them in the fridge and avoid crushing them. Breathable packaging or a paper bag helps manage moisture. Try to use them while they still look firm, fresh, and lively.",
      },
      {
        label: "How should I cook them?",
        answer:
          "Tear or slice them, give them space in a hot pan, and let them take on light colour before adding the softer flavours. If the pan is crowded, they steam before they brown.",
      },
      {
        label: "What do they go with?",
        answer:
          "Eggs, sourdough, pasta, rice, noodles, roasted vegetables, chicken, seafood, soft herbs, butter, miso, soy, cream, and lemon all sit nicely with White Oyster Mushrooms.",
      },
    ],
  },
  difference: {
    kicker: "From the farm",
    title: "What makes Fancy A Fungi different?",
    intro: "This is where the farm voice matters. Fancy A Fungi is not trying to sound bigger than it is; it is trying to grow well, supply honestly, and keep the relationship direct.",
    defaultAnswer:
      "Fancy A Fungi grows White Oyster Mushrooms in the Lockyer Valley with a harvest-to-order mindset, rainwater, organic soybean hulls, untreated hardwood sawdust, and direct grower relationships.",
    contactBody:
      "Hi Benny, I have a Fancy A Fungi question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "What does harvest-to-order mean?",
        answer:
          "It means supply conversations stay close to what is actually ready. That helps keep produce fresher, expectations clearer, and the relationship more direct.",
      },
      {
        label: "What is the farm focused on?",
        answer:
          "The current focus is White Oyster Mushroom consistency, freshness, contamination control, and customer conversations that match what the farm can honestly supply.",
      },
      {
        label: "Can I ask about supply?",
        answer:
          "Yes. If you need current availability, wholesale supply, pricing, delivery, or timing, that question should go through to Benny so the answer matches the actual harvest rhythm.",
      },
    ],
  },
  learn: {
    kicker: "Pull up a chair",
    title: "I'm just here to learn",
    intro: "Lovely. No rush, no test. Mushrooms are a whole quiet world once you start noticing the details.",
    defaultAnswer:
      "Here is a friendly starting point: mushrooms are not plants. The part you cook is the fruiting body, while the hidden mycelium does the patient work before the mushroom appears.",
    contactBody:
      "Hi Benny, I have a general mushroom question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "Are mushrooms plants?",
        answer:
          "No. Mushrooms are fungi. They do not grow like leafy plants, and they do not make food from sunlight in the same way. They are their own fascinating kingdom.",
      },
      {
        label: "What is mycelium?",
        answer:
          "Mycelium is the living network that grows through the substrate before mushrooms appear. Think of the mushroom as the visible moment after a lot of quiet work has already happened.",
      },
      {
        label: "Can you identify wild mushrooms?",
        answer:
          "I can talk generally about mushroom safety, but I will not identify a wild mushroom as safe to eat from a casual description or photo. For wild mushrooms, use a qualified local expert before anything goes near a plate.",
      },
    ],
  },
};

const whisperButtons = document.querySelectorAll("[data-whisper-topic]");
const whisperKicker = document.querySelector("[data-whisper-kicker]");
const whisperTitle = document.querySelector("[data-whisper-title]");
const whisperIntro = document.querySelector("[data-whisper-intro]");
const whisperAnswer = document.querySelector("[data-whisper-answer]");
const whisperQuestions = document.querySelector("[data-whisper-questions]");
const whisperContact = document.querySelector("[data-whisper-contact]");
const whisperNoteForm = document.querySelector("[data-whisper-note-form]");
const whisperNoteInput = document.querySelector("[data-whisper-note]");
const whisperNoteStatus = document.querySelector("[data-whisper-note-status]");

function setWhisperAnswer(text) {
  if (!whisperAnswer) {
    return;
  }

  whisperAnswer.replaceChildren();
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  whisperAnswer.append(paragraph);
}

function setWhisperContact(topic) {
  if (!whisperContact) {
    return;
  }

  const subject = encodeURIComponent(`Fancy A Fungi enquiry - ${topic.title}`);
  const body = encodeURIComponent(
    [
      topic.contactBody,
      "",
      "My question:",
      "",
    ].join("\n")
  );

  whisperContact.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

function renderWhisperTopic(topicKey) {
  const topic = whisperTopics[topicKey];

  if (!topic || !whisperKicker || !whisperTitle || !whisperIntro || !whisperQuestions) {
    return;
  }

  whisperKicker.textContent = topic.kicker;
  whisperTitle.textContent = topic.title;
  whisperIntro.textContent = topic.intro;
  setWhisperAnswer(topic.defaultAnswer);
  setWhisperContact(topic);

  whisperQuestions.replaceChildren();
  topic.questions.forEach((question) => {
    const button = document.createElement("button");
    button.className = "question-chip";
    button.type = "button";
    button.textContent = question.label;
    button.addEventListener("click", () => {
      whisperQuestions.querySelectorAll(".question-chip").forEach((chip) => {
        chip.classList.remove("is-active");
      });
      button.classList.add("is-active");
      setWhisperAnswer(question.answer);
    });
    whisperQuestions.append(button);
  });
}

if (whisperButtons.length > 0) {
  whisperButtons.forEach((button) => {
    button.addEventListener("click", () => {
      whisperButtons.forEach((topicButton) => {
        topicButton.classList.remove("is-active");
        topicButton.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      renderWhisperTopic(button.dataset.whisperTopic);
    });
  });

  renderWhisperTopic("grow");
}

if (whisperNoteForm && whisperNoteInput) {
  whisperNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = whisperNoteInput.value.trim();

    if (!question) {
      whisperNoteInput.focus();
      return;
    }

    const subject = encodeURIComponent("Fancy A Fungi question - The Mushroom Whisper");
    const body = encodeURIComponent(
      [
        "Hi Benny,",
        "",
        "I pulled up a chair with The Mushroom Whisper and had this question:",
        "",
        question,
        "",
        "Thanks,",
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    if (whisperNoteStatus) {
      whisperNoteStatus.textContent = "Good question. I have prepared that as a note for Benny so the farm answer stays honest.";
    }
  });
}
