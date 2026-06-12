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
  cook: {
    kicker: "Kitchen guidance",
    title: "Cook With Mushrooms",
    intro: "White Oyster Mushrooms are gentle, savoury, and quick to cook. They suit simple meals as well as chef-led dishes.",
    defaultAnswer:
      "Start with a hot pan, a little oil or butter, and enough space for the mushrooms to release moisture. Let them take on light colour before adding garlic, herbs, soy, cream, lemon, or whatever direction your dish is walking toward.",
    contactBody:
      "Hi Benny, I have a cooking question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "How should I cook White Oyster Mushrooms?",
        answer:
          "Tear or slice them into pieces, cook them in a hot pan with a little oil, and let moisture cook off before adding seasoning. They are lovely with garlic, thyme, soy, miso, butter, lemon, chilli, or a gentle cream sauce.",
      },
      {
        label: "What do they pair with?",
        answer:
          "White Oyster Mushrooms pair well with eggs, pasta, rice, noodles, sourdough, roasted vegetables, chicken, seafood, soft herbs, and savoury sauces. Their mild flavour makes them flexible without disappearing.",
      },
      {
        label: "Can I use them in quick meals?",
        answer:
          "Yes. A quick pan-fry can become toast topping, an omelette filling, a noodle bowl, a side for steak or eggs, or the start of a simple pasta. Give them heat and space first, then build the dish around them.",
      },
    ],
  },
  store: {
    kicker: "Freshness guidance",
    title: "Store & Use Fresh Mushrooms",
    intro: "Fresh mushrooms are happiest with airflow, gentle handling, and a cool place to rest until you are ready to cook.",
    defaultAnswer:
      "Keep mushrooms in the fridge, ideally in breathable packaging or a paper bag. Avoid sealing them tightly in plastic for long periods, because trapped moisture can shorten their useful life.",
    contactBody:
      "Hi Benny, I have a storage or freshness question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "How should I store them?",
        answer:
          "Keep them refrigerated and avoid crushing them. A paper bag or breathable container helps manage moisture. If they arrive in packaging, keep them cool and use them while they still look firm and fresh.",
      },
      {
        label: "When should I use them?",
        answer:
          "Sooner is better. Fancy A Fungi works around fresh harvest timing, so the best eating experience usually comes from using them within the first few days after receiving them.",
      },
      {
        label: "Should I wash them?",
        answer:
          "If needed, brush away any growing material or give them a very quick rinse just before cooking, then pat dry. Avoid soaking mushrooms, as they can take on water and lose texture.",
      },
    ],
  },
  learn: {
    kicker: "Mushroom knowledge",
    title: "Learn Mushroom Things",
    intro: "A small place for friendly mushroom facts, growing basics, and what makes Fancy A Fungi's approach distinct.",
    defaultAnswer:
      "Fancy A Fungi currently focuses on White Oyster Mushrooms grown in the Lockyer Valley with rainwater, organic soybean hulls, untreated hardwood sawdust, and a harvest-to-order mindset.",
    contactBody:
      "Hi Benny, I have a mushroom learning question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "What makes White Oyster Mushrooms special?",
        answer:
          "They are delicate, fast-cooking gourmet mushrooms with a mild savoury flavour and beautiful texture. They are approachable for home cooks and useful for chefs because they can carry many different flavour directions.",
      },
      {
        label: "What does harvest-to-order mean?",
        answer:
          "It means supply conversations are tied closely to what is ready to harvest. The goal is fresher mushrooms, clearer expectations, and less time between the farm and the person cooking them.",
      },
      {
        label: "What are they grown on?",
        answer:
          "Fancy A Fungi's current production approach uses organic soybean hulls and untreated hardwood sawdust, with rainwater as part of the growing system.",
      },
    ],
  },
  farm: {
    kicker: "Farm context",
    title: "What's Happening At Fancy A Fungi",
    intro: "The farm is currently focused on production consistency, contamination control, freshness, and careful growth.",
    defaultAnswer:
      "Fancy A Fungi is still in a grounded growth stage. The focus is not a huge catalogue of future products; it is reliable White Oyster Mushroom production and strong customer relationships.",
    contactBody:
      "Hi Benny, I have a farm update question after visiting Ask The Mushroom Whisper.",
    questions: [
      {
        label: "Can The Mushroom Whisper share live availability?",
        answer:
          "Not reliably. Availability depends on this week's harvest rhythm, production reality, and delivery plans. That is a Benny question, and it is best sent through to the farm directly.",
      },
      {
        label: "What is the farm focused on now?",
        answer:
          "The current focus is White Oyster Mushroom consistency, freshness, contamination control, and customer conversations that match what the farm can honestly supply.",
      },
      {
        label: "Will there be more farm stories later?",
        answer:
          "That is the natural direction. Farm notes, chef tips, seasonal updates, and community questions can be added when they are ready and useful.",
      },
    ],
  },
  benny: {
    kicker: "Farmer handoff",
    title: "Ask Benny The Farmer",
    intro: "Some questions need real farm judgement. That is where The Mushroom Whisper steps aside and helps you contact Benny.",
    defaultAnswer:
      "Good question. If it involves current availability, wholesale supply, delivery, pricing, events, special requests, or this week's harvest, Benny is the right person to answer it.",
    contactBody:
      "Hi Benny, The Mushroom Whisper suggested I send this through because it depends on current farm details.",
    questions: [
      {
        label: "Can I ask about wholesale supply?",
        answer:
          "Yes. Wholesale supply depends on current production, timing, quantities, and delivery rhythm, so it should go directly to Benny.",
      },
      {
        label: "Can I ask about pricing?",
        answer:
          "Yes, but The Mushroom Whisper should not guess pricing. Send the details through to Benny so the answer reflects the current farm situation.",
      },
      {
        label: "Can I request something special?",
        answer:
          "Yes. Special requests are best treated as conversations, not automated answers. Share what you need, when you need it, and where it needs to go.",
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

  renderWhisperTopic("cook");
}
