const interviewQuestionBank = 
   [
    {
        id: 1,
        category: "SQL",
        question: "What is the difference between Temporary Tables, CTEs, and Permanent Tables in SQL?",
        tip: "Explain session-scoping properties, disk vs memory storage, and when to block mutation with indexing restrictions."
    },
    {
        id: 2,
        category: "SQL",
        question: "Can you explain what a database index is to someone with no technical background?",
        tip: "Use the book index analogy. The reader (client) requests a specific topic, the index page (B-Tree index) bypasses the full textbook search (table scan) and points directly to the target information."
    },
    {
        id: 3,
        category: "SQL",
        question: "How do you optimize a complex query with multiple joins to speed up rendering data load times?",
        tip: "Talk about reviewing execution plans, eliminating nested subquery loops, and creating missing index filter constraints."
    },
    {
        id: 4,
        category: "SQL",
        question: "How would you design a data archiving architecture for a transaction table on a small budget?",
        tip: "Focus on zero-dollar strategy limits: building automated partition swaps, utilizing compressed historic storage tables, and scheduling low-priority off-peak cron routines."
    },
    {
        id: 5,
        category: "SQL",
        question: "What metrics are most critical to look at when evaluating automated query optimizer performance?",
        tip: "Clarify table scan frequencies, buffer pool cache hits, lock contention ratios, and total disk I/O read bytes."
    },
    {
        id: 6,
        category: "SQL",
        question: "Walk us through how you would handle an active database deadlock incident when our software experiences an unexpected outage.",
        tip: "Acknowledge the blocking transaction ID, terminate the less expensive process chain without damaging integrity, map a re-indexing fix step, and maintain real-time telemetry status clarity."
    },
    {
        id: 7,
        category: "SQL",
        question: "What does good database design and schema architecture mean to you in a data-first environment?",
        tip: "Emphasize high normalization balance, strict data integrity constraints, proactive query indexing, and making schemas simple for the developers to query."
    },
    {
        id: 8,
        category: "Product Manager",
        question: "What is the difference between North Star metrics, input metrics, and fluid feature variables in product strategy?",
        tip: "Explain strategic-scoping, metric alignment properties, and why establishing firm anchors blocks roadmap priority assignment shifting."
    },
    {
        id: 9,
        category: "Product Manager",
        question: "Can you explain what an API is to someone with no technical background?",
        tip: "Use the restaurant waiter analogy. The customer (client) requests food, the waiter (API) drops it off to the chef (server) and delivers it back."
    },
    {
        id: 10,
        category: "Product Manager",
        question: "How do you prioritize fixing technical debt versus launching new features to speed up product delivery value?",
        tip: "Talk about tracking customer churn drop-off loops, enabling performance-driven prioritization scorecards, and setting dedicated engineering team run capacity."
    },
    {
        id: 11,
        category: "Product Manager",
        question: "How would you design a digital product launch plan for a new brand MVP on a small budget?",
        tip: "Focus on zero-dollar organic hooks: building hyper-targeted manual onboarding funnels, leveraging open beta waitlists, and working micro-community feedback loops."
    },
    {
        id: 12,
        category: "Product Manager",
        question: "What metrics are most critical to look at when evaluating automated onboarding funnel performance?",
        tip: "Clarify activation rates, customer acquisition costs (CAC), feature adoption ratios, and user retention lifetime value (LTV)."
    },
    {
        id: 13,
        category: "Product Manager",
        question: "Walk us through how you would handle an angry enterprise customer account when our software experiences an unexpected outage.",
        tip: "Acknowledge the immediate operational friction, apologize without defensive excuses, map an action step, and maintain real-time status clarity."
    },
    {
        id: 14,
        category: "Product Manager",
        question: "What does good user-centric design mean to you in a digital-first environment?",
        tip: "Emphasize high empathy, fast value realization, proactive friction elimination, and making interfaces simple for the user."
    },

    {
        id: 15,
        category: "AI/ML",
        question: "What is the difference between local hyperparameters, learned parameters, and constant frozen weights in an ML model?",
        tip: "Explain execution-scoping, training mutation properties, and why freezing layers blocks weight updates during backpropagation."
    },
    {
        id: 16,
        category: "AI/ML",
        question: "Can you explain what model overfitting is to someone with no technical background?",
        tip: "Use the test-memorization analogy. The student (model) memorizes the exact practice guide answers (training data) perfectly but fails to handle real-world variations on the actual test."
    },
    {
        id: 17,
        category: "AI/ML",
        question: "How do you optimize an inference pipeline or model architecture to speed up server rendering load times?",
        tip: "Talk about compiling model graph structures, enabling batch caching quantization options, and minifying training features inside generation data loops."
    },
    {
        id: 18,
        category: "AI/ML",
        question: "How would you design a predictive model training pipeline on a small compute budget?",
        tip: "Focus on zero-dollar resource hooks: building fine-tuning transfer learning setups, leveraging open-source base models, and working aggressively sampled target data arrays."
    },
    {
        id: 19,
        category: "AI/ML",
        question: "What metrics are most critical to look at when evaluating automated model classification performance?",
        tip: "Clarify area under curve (ROC-AUC), precision-recall trade-offs, confusion matrix weights, and false positive penalty metrics."
    },
    {
        id: 20,
        category: "AI/ML",
        question: "Walk us through how you would handle an incident where a production model outputs highly biased data during an unexpected model drift event.",
        tip: "Acknowledge the immediate operational friction, route inputs to fallback heuristics without delay, map a retraining step, and maintain real-time telemetry tracking clarity."
    },
    {
        id: 21,
        category: "AI/ML",
        question: "What does good algorithmic ethics and explainability mean to you in a digital-first environment?",
        tip: "Emphasize high dataset neutrality, fast performance tracking, proactive bias resolution, and making predictions auditable for the user."
    },
    {
        id: 22,
        category: "UX Research",
        question: "What is the difference between behavioural trends, attitudinal user inputs, and foundational personas in design research?",
        tip: "Explain study-scoping properties, temporary preference fluctuations, and why firm structural baseline archetypes block map alignment distortion."
    },
    {
        id: 23,
        category: "UX Research",
        question: "Can you explain the difference between quantitative data and qualitative insights to someone with no technical background?",
        tip: "Use the step tracker analogy. The step count numbers (quantitative) show exactly how much distance you covered, but your diary notes (qualitative) clarify why you chose to go walking."
    },
    {
        id: 24,
        category: "UX Research",
        question: "How do you optimize a research protocol or user testing timeline to speed up discovery phase insights?",
        tip: "Talk about building modular interview screeners, enabling rapid unmoderated testing tracks, and automating text transcription tags."
    },
    {
        id: 25,
        category: "UX Research",
        question: "How would you design a comprehensive field study on a small recruitment budget?",
        tip: "Focus on zero-dollar recruitment hooks: building community intercept loops, leveraging internal customer proxies, and working unmoderated social network surveys."
    },
    {
        id: 26,
        category: "UX Research",
        question: "What metrics are most critical to look at when evaluating automated usability test success?",
        tip: "Clarify task completion rates (TCR), error occurrence ratios, time-on-task, and post-study System Usability Scale (SUS) scores."
    },
    {
        id: 27,
        category: "UX Research",
        question: "Walk us through how you handle a live testing participant who becomes visibly angry when a prototype experiences an unexpected outage.",
        tip: "Acknowledge the immediate operational friction, apologize to validate their frustration, map an alternative feedback path, and maintain user-comfort tracking clarity."
    },
];

let currentCategoryFilter = "All";
let currentSearchQuery = "";

function renderCards() {
    const targetGrid = document.getElementById("questions-container");
    if (!targetGrid) return;

    const processedList = interviewQuestionBank.filter(item => {
        const matchesCategory = (currentCategoryFilter === "All" || item.category === currentCategoryFilter);
        const matchesSearch = item.question.toLowerCase().includes(currentSearchQuery) || 
                              item.tip.toLowerCase().includes(currentSearchQuery);
        return matchesCategory && matchesSearch;
    });

    targetGrid.innerHTML = "";

    if (processedList.length === 0) {
        targetGrid.innerHTML = `<p class="no-results"><br>No interview items match your query. Try again!</p>`;
        return;
    }

    processedList.forEach(item => {
        const structuralDiv = document.createElement("div");
        structuralDiv.className = "question-card";

        structuralDiv.innerHTML = `
            <div>
                <span class="badge">${item.category}</span>
                <h3>${item.question}</h3>
            </div>
            <div class="tip-box">
                <strong>Prep Guide:</strong> ${item.tip}
            </div>
        `;
        targetGrid.appendChild(structuralDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-input");
    const tabContainer = document.getElementById("category-tabs");

    renderCards();

    if (searchBar) {
        searchBar.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            renderCards();
        });
    }

    if (tabContainer) {
        tabContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("tab-btn")) {
                const tabs = tabContainer.querySelectorAll(".tab-btn");
                tabs.forEach(btn => btn.classList.remove("active"));

                e.target.classList.add("active");
                currentCategoryFilter = e.target.getAttribute("data-category");
                
                renderCards();
            }
        });
    }
});
