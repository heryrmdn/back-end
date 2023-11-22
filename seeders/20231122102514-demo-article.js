"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Article",
      [
        {
          title: "Understanding the Mind-Body Connection",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychiatry",
          content: `
      Exploring the intricate relationship between the mind and the body has been a focal point in psychiatry. Recent studies delve into the ways psychological well-being influences physical health and vice versa.

      Psychiatric experts emphasize the importance of holistic approaches that consider both mental and physical aspects of an individual's health. Understanding this mind-body connection opens new avenues for comprehensive healthcare strategies.
    `,
          createdAt: "2023-12-01",
        },
        {
          title: "The Impact of Positive Psychology on Mental Health",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychology",
          content: `
      Positive psychology, with its emphasis on strengths and positive emotions, has shown a profound impact on mental health. Research indicates that cultivating positivity, gratitude, and engagement contributes to improved well-being and resilience.

      Psychologists advocate for integrating positive psychology interventions into therapeutic practices to enhance mental health outcomes. The power of a positive mindset in promoting resilience and mental wellness is increasingly recognized.
    `,
          createdAt: "2023-12-02",
        },
        {
          title: "Nutritional Strategies for Optimal Mental Health",
          image: "https://loremflickr.com/640/480/people",
          category: "General Health",
          content: `
      The connection between nutrition and mental health is gaining attention in the realm of general health. Scientific studies explore the impact of diet on mood, cognition, and overall mental well-being.

      Health experts emphasize the role of a balanced diet rich in essential nutrients for maintaining optimal mental health. Nutritional strategies are becoming integral to holistic health practices, highlighting the importance of a healthy mind and body.
    `,
          createdAt: "2023-12-03",
        },
        {
          title: "Advancements in Cognitive Behavioral Therapy",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychiatry",
          content: `
      Cognitive Behavioral Therapy (CBT) continues to evolve with groundbreaking advancements in psychiatry. The therapy, known for its effectiveness in treating various mental health conditions, adapts to incorporate new techniques and approaches.

      Psychiatrists and therapists utilize technology, innovative interventions, and personalized treatment plans to enhance the efficacy of CBT. These advancements contribute to the ongoing improvement of mental health care.
    `,
          createdAt: "2023-12-04",
        },
        {
          title: "Exploring the Psychology of Resilience",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychology",
          content: `
      Resilience, a psychological trait associated with the ability to bounce back from adversity, is a subject of extensive research in psychology. Studies delve into the factors that contribute to resilience and ways to cultivate this vital quality.

      Psychologists emphasize the importance of fostering resilience as a preventive measure for mental health challenges. Understanding the psychology of resilience empowers individuals to navigate life's challenges with greater strength and adaptability.
    `,
          createdAt: "2023-12-05",
        },
        {
          title: "The Role of Sleep in Mental and Physical Health",
          image: "https://loremflickr.com/640/480/people",
          category: "General Health",
          content: `
      Sleep plays a crucial role in both mental and physical health. Ongoing research explores the intricate connections between quality sleep and cognitive function, emotional well-being, and overall physical health.

      Health professionals highlight the significance of adopting healthy sleep habits for maintaining optimal health. Understanding the relationship between sleep and well-being is essential for comprehensive health care practices.
    `,
          createdAt: "2023-12-06",
        },
        {
          title: "Innovations in Telepsychiatry Services",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychiatry",
          content: `
      Telepsychiatry, the provision of mental health services through remote technology, is undergoing transformative innovations. Advancements in digital platforms, virtual therapy sessions, and online mental health resources are reshaping the landscape of psychiatric care.

      Psychiatrists leverage technology to reach a broader audience and provide accessible mental health support. These innovations mark a significant step toward overcoming barriers to mental health care.
    `,
          createdAt: "2023-12-07",
        },
        {
          title: "The Psychology of Mindfulness Meditation",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychology",
          content: `
      Mindfulness meditation, rooted in ancient practices, has become a focal point in modern psychology. Researchers explore the psychological benefits of mindfulness, including stress reduction, improved focus, and enhanced emotional well-being.

      Psychologists incorporate mindfulness techniques into therapeutic interventions, emphasizing its positive impact on mental health. The psychology of mindfulness continues to unfold as a valuable tool for cultivating a balanced and resilient mind.
    `,
          createdAt: "2023-12-08",
        },
        {
          title: "Holistic Approaches to Mental Health Care",
          image: "https://loremflickr.com/640/480/people",
          category: "General Health",
          content: `
      Holistic approaches to mental health care encompass a comprehensive view of an individual's well-being, considering physical, psychological, and social aspects. Integrative practices, such as combining traditional and alternative therapies, aim to provide holistic support.

      Health professionals advocate for personalized treatment plans that address the diverse needs of individuals. Holistic mental health care emphasizes the interconnectedness of various factors influencing overall well-being.
    `,
          createdAt: "2023-12-09",
        },
        {
          title: "Psychiatric Considerations in the Era of Remote Work",
          image: "https://loremflickr.com/640/480/people",
          category: "Psychiatry",
          content: `
      The shift to remote work has prompted a closer examination of psychiatric considerations in the digital era. Psychiatrists explore the mental health challenges associated with remote work, including isolation, burnout, and stress.

      Mental health professionals provide guidance on maintaining psychological well-being in a virtual work environment. Psychiatric considerations in the era of remote work highlight the importance of adapting mental health support to evolving societal trends.
    `,
          createdAt: "2023-12-10",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Article", null, {});
  },
};
