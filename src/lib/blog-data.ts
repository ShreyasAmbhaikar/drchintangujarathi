export interface BlogSection {
  type: "paragraph" | "heading2" | "heading3" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-pcos",
    title: "Understanding PCOS: Symptoms, Diagnosis, and Management",
    date: "May 26, 2026",
    author: "Dr. Poonam",
    authorRole: "Senior Consultant Obstetrician & Gynecologist",
    readTime: "6 min read",
    category: "Hormonal Health",
    tags: ["PCOS", "Women's Health", "Hormonal Balance", "Fertility"],
    image: "/images/blog-pcos-health.webp",
    excerpt: "Polycystic Ovary Syndrome (PCOS) is a common hormonal condition affecting women of reproductive age. Explore its symptoms, how it is diagnosed, and practical management strategies.",
    content: [
      {
        type: "paragraph",
        text: "Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine disorders, affecting approximately 8% to 13% of women of reproductive age globally. Despite its name, PCOS is not simply a disease of the ovaries; rather, it is a complex metabolic and hormonal condition that affects multiple systems in the body.",
      },
      {
        type: "heading2",
        text: "Key Symptoms of PCOS",
      },
      {
        type: "paragraph",
        text: "PCOS symptoms can vary significantly from one individual to another, but they typically center around three main physiological markers:",
      },
      {
        type: "list",
        items: [
          "Irregular or Absent Periods: Infrequent, irregular, or prolonged menstrual cycles are the most common sign. This happens because ovulation does not occur regularly.",
          "Excess Androgens: Elevated levels of male hormones (androgens) can lead to physical signs such as excess facial and body hair (hirsutism), severe adult acne, and male-pattern baldness.",
          "Polycystic Ovaries: On an ultrasound scan, the ovaries may appear enlarged and show multiple small, fluid-filled sacs (follicles) surrounding the outer edge. These follicles are immature egg sacs that have failed to release an egg."
        ],
      },
      {
        type: "heading2",
        text: "How is PCOS Diagnosed?",
      },
      {
        type: "paragraph",
        text: "Today, medical specialists diagnose PCOS using the Rotterdam Criteria. A patient must meet at least two of the following three criteria, after ruling out other conditions that present similar symptoms:",
      },
      {
        type: "list",
        items: [
          "Delayed ovulation or irregular menstrual cycles.",
          "Clinical or biochemical signs of hyperandrogenism (excess male hormones).",
          "Polycystic ovaries visible on a pelvic ultrasound scan."
        ],
      },
      {
        type: "heading2",
        text: "Practical Management Strategies",
      },
      {
        type: "paragraph",
        text: "While there is currently no permanent cure for PCOS, the condition can be managed highly effectively through a combination of lifestyle adjustments and targeted medical treatments:",
      },
      {
        type: "heading3",
        text: "1. Nutrition & Lifestyle Modifications",
      },
      {
        type: "paragraph",
        text: "Dietary habits play a critical role in managing PCOS, especially since insulin resistance is present in up to 70% of cases. Emphasizing whole foods, high-fiber carbohydrates, lean proteins, and anti-inflammatory healthy fats can help stabilize blood sugar levels and lower insulin levels. Regular physical activity—combining cardiovascular workouts with resistance training—further improves insulin sensitivity.",
      },
      {
        type: "heading3",
        text: "2. Medical Interventions",
      },
      {
        type: "paragraph",
        text: "Depending on your specific goals (such as cycle regulation, acne management, or conceiving), your gynecologist may recommend medical treatments. These can include low-dose oral contraceptive pills to regulate periods and protect the uterine lining, insulin-sensitizing medications like Metformin, or specific fertility treatments to stimulate regular ovulation when trying to conceive.",
      },
      {
        type: "paragraph",
        text: "If you suspect you have PCOS, scheduling a consultation with a reproductive endocrinologist or gynecologist is the first step toward getting an accurate diagnosis and regaining control of your hormonal health.",
      }
    ],
  },
  {
    slug: "first-trimester-guide",
    title: "A Guide to the First Trimester of Pregnancy: What to Expect",
    date: "May 18, 2026",
    author: "Dr. Poonam",
    authorRole: "Senior Consultant Obstetrician & Gynecologist",
    readTime: "5 min read",
    category: "Pregnancy Care",
    tags: ["Pregnancy", "First Trimester", "Prenatal Care", "Maternal Health"],
    image: "/images/blog-pregnancy.webp",
    excerpt: "The first 12 weeks of pregnancy are a time of rapid development and major hormonal shifts. Learn what symptoms to expect, key prenatal tests, and tips to nourish your body.",
    content: [
      {
        type: "paragraph",
        text: "Finding out you are pregnant marks the beginning of an incredible, life-changing chapter. The first trimester, spanning from week 1 through week 12, is a period of intense development. While you may not look noticeably pregnant, your body is working tirelessly behind the scenes to build a support system for your baby.",
      },
      {
        type: "heading2",
        text: "Common Symptoms & Physical Shifts",
      },
      {
        type: "paragraph",
        text: "A dramatic surge in hormones, particularly progesterone and hCG, triggers various physical changes. Some of the most common early pregnancy symptoms include:",
      },
      {
        type: "list",
        items: [
          "Morning Sickness: Contrary to its name, pregnancy-related nausea and vomiting can occur at any time of the day or night. It typically begins around week 6 and begins to improve by week 14.",
          "Severe Fatigue: You may feel unexpectedly exhausted. This fatigue occurs because your body is producing more blood, increasing heart rate, and building the placenta.",
          "Breast Changes: Hormonal changes make breasts tender, swollen, or sensitive. The nipples may darken and enlarge in preparation for future feeding.",
          "Frequent Urination: As the uterus begins to expand, it places direct pressure on the bladder, leading to more frequent trips to the restroom."
        ],
      },
      {
        type: "heading2",
        text: "Key Medical Scans and Appointments",
      },
      {
        type: "paragraph",
        text: "During the first trimester, regular prenatal visits are vital to monitor the early development of the pregnancy. Essential screenings include:",
      },
      {
        type: "list",
        items: [
          "Early Viability/Dating Scan: Performed between weeks 6 and 8, this ultrasound confirms a viable intrauterine pregnancy, checks the baby's heartbeat, and establishes an accurate due date.",
          "Nuchal Translucency (NT) Scan: Usually scheduled between weeks 11 and 13, this scan measures the fluid-filled space at the back of the baby's neck to assess genetic health.",
          "Prenatal Blood Screenings: Routine maternal blood tests check your blood group, iron levels, and screen for infections or genetic markers (such as the double marker test)."
        ],
      },
      {
        type: "heading2",
        text: "Self-Care & Nutritional Tips",
      },
      {
        type: "paragraph",
        text: "Prioritizing your health during these early weeks sets a strong foundation for your pregnancy journey:",
      },
      {
        type: "list",
        items: [
          "Take Folic Acid: Consuming a daily prenatal supplement with at least 400mcg of folic acid is critical to prevent neural tube defects in the baby's developing brain and spine.",
          "Eat Small, Frequent Meals: If nausea makes eating difficult, consume bland, high-protein snacks like nuts, crackers, or toast throughout the day.",
          "Stay Hydrated: Drink plenty of water. If plain water causes nausea, try adding fresh lemon slices, ginger, or drinking tender coconut water."
        ],
      },
      {
        type: "paragraph",
        text: "Remember, every pregnancy is unique. Some women experience every symptom intensely, while others feel very few. Always keep in close touch with your obstetrician regarding any concerns.",
      }
    ],
  },
  {
    slug: "importance-of-screenings",
    title: "Why Routine Gynecological Screenings are Crucial for Women's Health",
    date: "April 29, 2026",
    author: "Dr. Poonam",
    authorRole: "Senior Consultant Obstetrician & Gynecologist",
    readTime: "4 min read",
    category: "Preventive Care",
    tags: ["Gynecology", "Health Screenings", "Cervical Health", "Cancer Prevention"],
    image: "/images/blog-screenings.webp",
    excerpt: "Routine screenings are key to preventing and detecting major health issues early. Find out the guidelines for Pap tests, breast checks, and pelvic exams.",
    content: [
      {
        type: "paragraph",
        text: "In the busyness of daily life, preventive health screenings are often postponed. However, routine gynecological check-ups are the most powerful tool we have to protect women's health. Many major gynecological issues, including cervical pre-cancers and ovarian cysts, show zero symptoms in their early stages, making screenings the only way to detect them.",
      },
      {
        type: "heading2",
        text: "Key Screenings Every Woman Needs",
      },
      {
        type: "paragraph",
        text: "Preventive care needs change depending on your age and health history. Here are the core screenings you should plan with your gynecologist:",
      },
      {
        type: "heading3",
        text: "1. The Pap Smear and HPV Co-Test",
      },
      {
        type: "paragraph",
        text: "A Pap test collects cells from the cervix to look for abnormal changes that could turn into cervical cancer if left untreated. The HPV test checks for high-risk strains of the human papillomavirus that cause these changes. Guidelines recommend that women start Pap tests at age 21, repeating them every 3 to 5 years depending on age, testing methods, and past medical history.",
      },
      {
        type: "heading3",
        text: "2. Pelvic Exams",
      },
      {
        type: "paragraph",
        text: "An annual pelvic exam allows your doctor to physically assess the size and position of your vagina, cervix, uterus, and ovaries. This check helps identify signs of ovarian cysts, uterine fibroids, pelvic inflammatory disease, or early-stage infections.",
      },
      {
        type: "heading3",
        text: "3. Breast Exams and Mammography",
      },
      {
        type: "paragraph",
        text: "Clinical breast exams should be a routine part of your yearly check-up. For women aged 40 and older, an annual or biennial screening mammogram is recommended to detect breast cancer early, when treatment is most effective. Women with a family history of breast cancer may need to start screening earlier.",
      },
      {
        type: "heading2",
        text: "Demystifying the Screening Process",
      },
      {
        type: "paragraph",
        text: "It is normal to feel a bit anxious before a gynecological check-up. However, knowing what to expect can help ease your mind. An exam is typically quick, lasting only a few minutes, and is designed to be as gentle as possible. It is also a safe space to ask your doctor questions about menstrual cycles, contraception, sexual health, and fertility planning.",
      },
      {
        type: "paragraph",
        text: "Preventive screenings are an investment in your future health. If you haven't had a check-up in the last year, make it a priority to schedule a routine screening today.",
      }
    ],
  }
];
