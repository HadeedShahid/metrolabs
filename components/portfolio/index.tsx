"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousal";

export function Portfolio() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="mt-40 w-full h-full">
      <h2 className="subtitle">Explore our works</h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              The <strong>Hero section</strong> on the Homify landing page is
              designed to instantly engage users with visually striking imagery.
              The inclusion of <strong>Quick filters</strong> allows users to
              start searching properties right away, streamlining their
              experience.
            </p>
            <Image
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/78e4eeb17dce4906a12ececcd036808c?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGXHavDr%2Bsp6gTYiZon1xq3quvO/45vQGkr3/u4ILkBFAiBFvfn9mlKJdfymS3XrGvoMAAG2bbOyFA1gk9ZegREcMyrNBAhXEAAaDDczOTkzOTE3MzgxOSIME4ShUryCicfUbhYUKqoEleYdIKmKv/mcyrb4WBAFU1LoK7LfSTf2xMoJ%2BVAnxqGWPLd6kJJDs42yPkElwejPZdxa9ar5Z69wk/YDcGL1t9ZHSadkm9xvpZxcDEUg6Vw547jFk9wmWMemoaows/fVc/GHyckUSttXNm2sAaCX91lzDiMQ1tboWlfFFSTHSJlLPeQhYB/Le7BxB9zJLZsAquG0bMQW1B2sBr/j%2BODMH6EFewopi7uHga4ux0VbQlvba5koTVons0U4kY5FAZkznUka0O211FLL9/6E1edoOET7oHzkVzZCi8uCvEE/ihIznlxxZj9K6ELTTQQAo47Tls1mgNn6lA6JypBxDgo4L9w5R6juXfahzlPHZjSw3UB3LrCYXPPVXLQKnRbGamPZd51usysILzs%2BH9Y6MnRsdzZzdBvFyMNHc7dX3yVQ9fOhHr3k8VlQ8J422aIuS0Aw7y%2BnPw5mflWiS3CnknfywlKRpLonaQZNyxmm0gZ5TOkaEHA3vO8WAZp9WwcQk6Ng54BtLC52yZ2GzWhcjpg0Feoiw1/CqEy0k0plt2Cr%2BtvTyiT0JRL1jX4ZoSh0j7z/KInKlpq9pi9zyBLP3NwuSRIw3xv94chnzUfbMj0d77gavp6tita3J0H8Nsgejc82jO4MM9a4mQz2RLpL4LamdPEZ02TY/0HygVp4b7dfqOryvycDwC1%2BXw53JKiIUcKbemYwXWNZ56Z2%2BW9ujY2gC5ZewSzaUmjIEJgwgNnjtwY6qAG3SoLevPUCmAICjQGAK6isDw2BR1PIpe6sfEoBz5SOsiaiJ4nEhlqaSIAo3Novk0/lFtqNTzGFM5ComOlFWombeGKjB17/wwHzUxCWggNvENnJ3DmqPHEXCDCLPWm5Fnt7FoFoYjxmemuknsSEDNrzrVYaLX%2BrEi7QsT0TXWNAYgO08yIl/WsgSEybtCI2uHJcr%2BGn0JW10lrATYftzkdZhr0SvhCBnFo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T065330Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW52SB4E6WZ/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=9ba40aadbd3222f244b0f6def0d0a35f055c2c03c57c2c207d8bd437023ab866"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
          </div>
        );
      })}
    </>
  );
};

const getPortfolioDetails = (
  dataArray: { text: JSX.Element; image: React.ReactNode }[]
) => {
  return (
    <>
      {dataArray.map((item, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {item.text}
            </p>
            {item.image}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Homify",
    title: "A Real Estate Portal  ",
    src: "https://images.unsplash.com/photo-1523688471150-efdd09f0f312?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: getPortfolioDetails([
      {
        text: (
          <>
            The <strong>Hero section</strong> on the Homify landing page is
            designed to instantly engage users with visually striking imagery.
            The inclusion of <strong>Quick filters</strong> allows users to
            start searching properties right away, streamlining their
            experience.
          </>
        ),
        image: (
          <Image
            src="/images/homify/landing-hero.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p>
              The <strong>bento grid</strong> highlights essential statistics,
              offering transparency and building trust. Below this, users can
              easily <strong>browse properties by type</strong>, streamlining
              their search experience. A prominent{" "}
              <strong>call-to-action</strong> button encourages users to take
              the next step, driving engagement and conversion.
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/homify/landing-bento.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p>
              The <strong>listing page</strong> is designed to offer a smooth
              and intuitive property browsing experience. Users can apply a
              variety of <strong>filters</strong>. The listings are displayed in
              a <strong>clean and modern layout</strong>, making it easy for
              users to find the one that best fits their needs.
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/homify/listing-filters.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p>
              The page also includes a captivating{" "}
              <strong>banner carousel</strong> that showcases featured
              properties in a sleek, <strong>glassy design</strong>, creating an
              engaging experience for users as they explore the top properties
              on the platform.
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/homify/listing-banner.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p>
              The <strong>detail page</strong> is designed with a focus on user
              experience and clean aesthetics. A sleek{" "}
              <strong>image gallery</strong> allows users to seamlessly browse
              property photos, while the <strong>Key information</strong> are
              displayed in a clear and structured layout, making the
              decision-making process effortless.
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="/images/homify/detail-gallery.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/homify/detail-map.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
          </>
        ),
      },
    ]),
  },
  {
    category: "EduBridge Classroom",
    title: "AI based Learning Platform",
    src: " https://images.unsplash.com/photo-1720139290958-d8676702c3ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: getPortfolioDetails([
      {
        text: (
          <p className="mb-10">
            The <strong>Dashboard</strong> provides a comprehensive overview of
            student activity. Students can easily monitor their learning journey
            and quickly access key features.
          </p>
        ),
        image: (
          <Image
            src="/images/edubridge/dashboard.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },

      {
        text: (
          <p className="mb-10">
            The <strong>quiz generation screen</strong> simplifies creating
            quizzes with an intuitive interface. Users can easily add various
            question types, set difficulty levels, and customize settings,
            making the quiz creation process efficient and user-friendly.
          </p>
        ),
        image: (
          <Image
            src="/images/edubridge/quiz-gen.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <p className="mb-10">
            The <strong>quiz screen</strong> features a sleek, intuitive design,
            accommodating multiple question formats. Users can easily navigate
            and answer different types, ensuring a smooth and engaging quiz
            experience.
          </p>
        ),
        image: (
          <>
            <Image
              src="/images/edubridge/attemp-quiz.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/edubridge/fill-blanks.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover mt-4"
            />
          </>
        ),
      },
      {
        text: (
          <p className="mb-10">
            The <strong>quiz feedback screen</strong> offers users a clear and
            concise summary of their performance. With detailed insights on
            correct and incorrect answers, scores, and suggestions for
            improvement, the design ensures easy navigation and understanding,
            enhancing the overall learning experience.
          </p>
        ),
        image: (
          <>
            <Image
              src="/images/edubridge/feedback.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/edubridge/feedback-bool.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover mt-4"
            />
          </>
        ),
      },
      {
        text: (
          <p className="mb-10">
            The <strong>Quiz history</strong> page allows students to review
            past quizzes, view detailed feedback, and reattempt quizzes to
            improve their scores. With a simple and clear layout, students can
            easily track their progress and enhance their learning experience.
          </p>
        ),
        image: (
          <Image
            src="/images/edubridge/view-history.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              The <strong>payment screen</strong> offers a clean, side-by-side
              comparison of multiple plans, helping users quickly find the best
              option. Clear design and straightforward details make choosing a
              plan effortless.
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/edubridge/payment-sub.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },

      {
        text: (
          <>
            <p className="mb-10">
              <p>
                The <strong>manage payment plan page</strong> enables users to
                easily manage their subscription, <strong>change plans</strong>,
                and <strong>add or update payment methods</strong>. With a
                straightforward interface, users can quickly make adjustments to
                fit their needs.
              </p>
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/edubridge/quiz-gen.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              The <strong>login</strong> and <strong>sign-up pages</strong>{" "}
              offer a simple, user-friendly experience, allowing students to
              quickly access their accounts or create new ones. With a clean
              design and clear prompts, the process is seamless, ensuring
              minimal friction for users.
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="/images/edubridge/attemp-quiz.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/edubridge/fill-blanks.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />
          </>
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              The <strong>login</strong> and <strong>sign-up pages</strong>{" "}
              offer a simple, user-friendly experience, allowing students to
              quickly access their accounts or create new ones. With a clean
              design and clear prompts, the process is seamless, ensuring
              minimal friction for users.
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="/images/edubridge/feedback.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/edubridge/feedback-bool.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />
          </>
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              <p>
                The <strong>manage payment plan page</strong> enables users to
                easily manage their subscription, <strong>change plans</strong>,
                and <strong>add or update payment methods</strong>. With a
                straightforward interface, users can quickly make adjustments to
                fit their needs.
              </p>
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/edubridge/manage-plan.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              <p>
                The <strong>manage payment plan page</strong> enables users to
                easily manage their subscription, <strong>change plans</strong>,
                and <strong>add or update payment methods</strong>. With a
                straightforward interface, users can quickly make adjustments to
                fit their needs.
              </p>
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/edubridge/payment-sub.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 h-full w-full mx-auto object-cover"
          />
        ),
      },
    ]),
  },
  {
    category: "IGiftIt",
    title: "AI based Gifting Platform",
    src: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: getPortfolioDetails([
      {
        text: (
          <p className="mb-10">
            The <strong>landing page</strong> is designed to maximize engagement
            and drive conversions. With a <strong>clean</strong>,{" "}
            <strong>modern</strong> layout, it guides users seamlessly through
            the journey of discovering the perfect gift. Clear{" "}
            <strong>CTA</strong> enhancing user satisfaction and boosting{" "}
            <strong>conversion rates.</strong>
          </p>
        ),
        image: (
          <Image
            src="/images/iGiftit/landing.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <p className="mb-10">
            The <strong>Listing page</strong> is designed to first display the{" "}
            <strong>Most matched products</strong> based on the user’s
            preferences. To further refine the search, users can utilize the{" "}
            <strong>Quick filters</strong> to tailor the product suggestions,
          </p>
        ),
        image: (
          <Image
            src="/images/iGiftit/listing.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              The <strong>product detail page</strong> features a{" "}
              <strong>Modern</strong> and <strong>Minimalist</strong> design,
              providing a clean and focused experience for users. Users can
              customize their purchase with optional <strong>add-ons</strong>,
              making the shopping experience personalized and thoughtful.
            </p>
          </>
        ),
        image: (
          <Image
            src="/images/iGiftit/detail.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-2/3 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              The <strong>checkout flow</strong> is fast and intuitive, with
              easy access to saved addresses and payment info. A clean,
              step-by-step layout ensures a <strong>seamless purchase</strong>{" "}
              experience from cart to confirmation.
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="/images/iGiftit/checkout-1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/iGiftit/checkout-2.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover mt-4"
            />
          </>
        ),
      },
      {
        text: (
          <>
            <p className="mb-10">
              The <strong>Profile page</strong> allows users to easily manage
              their <strong>Account information</strong>, including saved{" "}
              <strong>Payment methods</strong> and{" "}
              <strong>Shipping addresses</strong>. With a simple and organized
              layout, users can quickly update their details and ensure a smooth
              checkout experience for future purchases.
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="/images/iGiftit/profile.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-2/3 h-full w-full mx-auto object-cover"
            />
          </>
        ),
      },
    ]),
  },

  {
    category: "Solid Tees",
    title: "Ecommerce website",
    src: "https://miro.medium.com/v2/resize:fit:1200/1*awg3yAtG8_1A_tzEBstlrw.jpeg",
    content: <DummyContent />,
  },
  {
    category: "NobleSkin AI",
    title: "Generative AI for Image Manipulation",
    src: "https://images.unsplash.com/photo-1717501218636-a390f9ac5957?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
