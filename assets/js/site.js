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

const whisperReplies = {
  cook: {
    prompt: "How do I cook Oyster Mushrooms?",
    paragraphs: [
      "Beautiful question. Oyster Mushrooms love a hot pan and a little patience. Tear them into pieces, give them space, and let their moisture cook off before you start fussing with flavours.",
      "Once the edges turn golden, garlic, butter, soy, lemon, herbs, chilli, miso, or cream can all take them somewhere delicious.",
    ],
    whisper:
      "The trick is not rushing them. Mushrooms tell you when they're ready if you give them time.",
  },
  sauce: {
    prompt: "Can you help me find a mushroom sauce recipe?",
    paragraphs: [
      "Absolutely. Here are a few places to start exploring: creamy garlic mushroom sauce, soy and miso mushrooms over rice, lemon-herb mushrooms for pasta, or a peppery pan sauce with butter and a splash of stock.",
      "If you're browsing recipes or videos, look for ones that brown the mushrooms first. That usually gives the sauce more flavour.",
    ],
    whisper:
      "Start with the pan, then choose the sauce. Golden mushrooms make almost any sauce feel a little more serious.",
  },
  buy: {
    prompt: "Where can I buy mushrooms near me?",
    paragraphs: [
      "That one depends on where you are, what is ready this week, and the delivery rhythm. Benny is the right person for current availability and supply details.",
      "The Mushroom Whisper can help with cooking and storage ideas, but real farm stock should come from the farmer.",
    ],
    whisper:
      "Freshness is a real-world thing. Best to ask the person looking at the harvest.",
    actions: [
      {
        label: "Ask Benny The Farmer",
        href: "contact.html",
      },
    ],
  },
  learn: {
    prompt: "Tell me something interesting about mushrooms.",
    paragraphs: [
      "Here's a good one: the mushroom you cook is only the visible part. Before that, mycelium has been quietly growing through the substrate, doing the patient work you do not see.",
      "So a mushroom is a little bit like the farm saying, 'Righto, now you can see what I've been up to.'",
    ],
    whisper:
      "Mushrooms reward people who notice small things.",
  },
  curious: {
    prompt: "I'm just here to learn.",
    paragraphs: [
      "Lovely. No test, no pressure, no need to know the right words. You can ask about cooking, storing, growing, farm practice, flavour, or just odd little mushroom facts.",
      "A good place to begin is this: mushrooms are fungi, not plants, and they have their own quiet way of doing things.",
    ],
    whisper:
      "Curiosity is welcome at the farm gate.",
  },
  storage: {
    prompt: "How should I store fresh mushrooms?",
    paragraphs: [
      "Keep them cool, avoid crushing them, and give them a little breathing room. A paper bag or breathable packaging helps manage moisture better than sealing them up tightly.",
      "Use them while they still look firm, fresh, and lively. If they smell sour, feel slimy, or look wrong, pause and use your judgement.",
    ],
    whisper:
      "Fresh mushrooms like care, not confinement.",
  },
  grow: {
    prompt: "Can I grow mushrooms at home?",
    paragraphs: [
      "You can, and a simple kit is usually the friendliest place to start. Clean hands, steady moisture, fresh air, and patience will teach you plenty before anything gets complicated.",
      "Tell me what you're growing, how long it has been going, where it is sitting, and what you can see. Small clues matter.",
    ],
    whisper:
      "Mushrooms are quiet teachers. They show you what changed if you learn to look.",
  },
  kit: {
    prompt: "Something looks wrong with my grow kit.",
    paragraphs: [
      "Let's have a proper look at the clues first: colour, smell, texture, moisture, airflow, and timing. Do not taste anything from a kit that seems off.",
      "Strong sour smells, black or green patches, sliminess, or fast-spreading fuzzy growth should be treated cautiously and checked with the kit supplier or a knowledgeable local grower.",
    ],
    whisper:
      "With grow kits, the small clues are often the useful ones.",
  },
  safety: {
    prompt: "Can you identify this wild mushroom?",
    paragraphs: [
      "I need to be careful here. I cannot identify a wild mushroom as safe to eat from a photo, description, or casual chat.",
      "For wild mushrooms, please speak with a qualified local expert before anything goes near a plate.",
    ],
    whisper:
      "Mushroom curiosity is wonderful. Mushroom safety comes first.",
  },
  health: {
    prompt: "What are the health benefits of mushrooms?",
    paragraphs: [
      "I can talk generally about mushrooms as food, but I cannot give medical advice or make health benefit claims.",
      "If a question relates to health conditions, supplements, treatment, or nutrition advice for a person, it belongs with a qualified health professional.",
    ],
    whisper:
      "Good food questions are welcome. Medical questions need the right human expert.",
  },
  default: {
    prompt: "Mushroom question",
    paragraphs: [
      "Good mushroom question. I can help with cooking, storage, simple growing observations, mushroom facts, and general Fancy A Fungi context.",
      "If your question depends on current stock, pricing, delivery, wholesale supply, or this week's harvest, Benny is the right person to ask.",
    ],
    whisper:
      "Tell me what you're seeing first. Small clue, big difference with mushrooms.",
    actions: [
      {
        label: "Ask Benny The Farmer",
        href: "contact.html",
      },
    ],
  },
};

const whisperButtons = document.querySelectorAll("[data-whisper-topic]");
const whisperLog = document.querySelector("[data-whisper-log]");
const whisperNoteForm = document.querySelector("[data-whisper-note-form]");
const whisperNoteInput = document.querySelector("[data-whisper-note]");
const whisperNoteStatus = document.querySelector("[data-whisper-note-status]");

function addChatMessage(kind, speaker, paragraphs, reply = {}) {
  if (!whisperLog) {
    return;
  }

  const row = document.createElement("div");
  row.className = `chat-row is-${kind}`;

  const speakerLabel = document.createElement("div");
  speakerLabel.className = "chat-speaker";
  speakerLabel.textContent = speaker;

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";

  paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    bubble.append(paragraph);
  });

  if (reply.whisper) {
    const whisper = document.createElement("p");
    whisper.className = "little-whisper";
    whisper.textContent = `A little whisper: ${reply.whisper}`;
    bubble.append(whisper);
  }

  if (reply.actions) {
    const actions = document.createElement("div");
    actions.className = "chat-actions";

    reply.actions.forEach((action) => {
      const link = document.createElement("a");
      link.className = "button button-primary";
      link.href = action.href;
      link.textContent = action.label;
      actions.append(link);
    });

    bubble.append(actions);
  }

  row.append(speakerLabel, bubble);
  whisperLog.append(row);
  whisperLog.scrollTop = whisperLog.scrollHeight;
}

function findWhisperReply(question) {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("wild") || lowerQuestion.includes("identify") || lowerQuestion.includes("poison") || lowerQuestion.includes("safe to eat") || lowerQuestion.includes("forage")) {
    return whisperReplies.safety;
  }

  if (lowerQuestion.includes("health") || lowerQuestion.includes("benefit") || lowerQuestion.includes("medical") || lowerQuestion.includes("nutrition") || lowerQuestion.includes("supplement")) {
    return whisperReplies.health;
  }

  if (lowerQuestion.includes("buy") || lowerQuestion.includes("near me") || lowerQuestion.includes("stock") || lowerQuestion.includes("available") || lowerQuestion.includes("price") || lowerQuestion.includes("delivery") || lowerQuestion.includes("wholesale") || lowerQuestion.includes("order")) {
    return whisperReplies.buy;
  }

  if (lowerQuestion.includes("sauce") || lowerQuestion.includes("recipe")) {
    return whisperReplies.sauce;
  }

  if (lowerQuestion.includes("store") || lowerQuestion.includes("storage") || lowerQuestion.includes("fridge") || lowerQuestion.includes("fresh")) {
    return whisperReplies.storage;
  }

  if (lowerQuestion.includes("cook") || lowerQuestion.includes("oyster") || lowerQuestion.includes("pan")) {
    return whisperReplies.cook;
  }

  if (lowerQuestion.includes("kit") || lowerQuestion.includes("wrong") || lowerQuestion.includes("contamination") || lowerQuestion.includes("mould") || lowerQuestion.includes("mold")) {
    return whisperReplies.kit;
  }

  if (lowerQuestion.includes("grow") || lowerQuestion.includes("home")) {
    return whisperReplies.grow;
  }

  if (lowerQuestion.includes("learn") || lowerQuestion.includes("interesting") || lowerQuestion.includes("fact")) {
    return whisperReplies.learn;
  }

  return whisperReplies.default;
}

function renderConversation(question, reply) {
  addChatMessage("user", "You", [question]);
  addChatMessage("whisper", "The Mushroom Whisper", reply.paragraphs, reply);

  if (whisperNoteStatus) {
    whisperNoteStatus.textContent = reply.actions
      ? "That one belongs with Benny when it depends on the real farm rhythm."
      : "Ask another one when you're ready. The farm gate is open.";
  }
}

if (whisperButtons.length > 0 && whisperLog) {
  whisperButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const topic = whisperReplies[button.dataset.whisperTopic] || whisperReplies.default;

      whisperButtons.forEach((topicButton) => {
        topicButton.classList.remove("is-active");
        topicButton.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      renderConversation(topic.prompt, topic);
    });
  });
}

if (whisperNoteForm && whisperNoteInput && whisperLog) {
  whisperNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = whisperNoteInput.value.trim();

    if (!question) {
      whisperNoteInput.focus();
      return;
    }

    renderConversation(question, findWhisperReply(question));
    whisperNoteInput.value = "";
    whisperNoteInput.focus();
  });
}
