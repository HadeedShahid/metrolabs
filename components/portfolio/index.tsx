"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousal";

export function Portfolio() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="mt-48 w-full h-full">
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
              className="md:w-1/2 h-full w-full mx-auto object-cover"
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
    detail: [
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/78e4eeb17dce4906a12ececcd036808c?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGXHavDr%2Bsp6gTYiZon1xq3quvO/45vQGkr3/u4ILkBFAiBFvfn9mlKJdfymS3XrGvoMAAG2bbOyFA1gk9ZegREcMyrNBAhXEAAaDDczOTkzOTE3MzgxOSIME4ShUryCicfUbhYUKqoEleYdIKmKv/mcyrb4WBAFU1LoK7LfSTf2xMoJ%2BVAnxqGWPLd6kJJDs42yPkElwejPZdxa9ar5Z69wk/YDcGL1t9ZHSadkm9xvpZxcDEUg6Vw547jFk9wmWMemoaows/fVc/GHyckUSttXNm2sAaCX91lzDiMQ1tboWlfFFSTHSJlLPeQhYB/Le7BxB9zJLZsAquG0bMQW1B2sBr/j%2BODMH6EFewopi7uHga4ux0VbQlvba5koTVons0U4kY5FAZkznUka0O211FLL9/6E1edoOET7oHzkVzZCi8uCvEE/ihIznlxxZj9K6ELTTQQAo47Tls1mgNn6lA6JypBxDgo4L9w5R6juXfahzlPHZjSw3UB3LrCYXPPVXLQKnRbGamPZd51usysILzs%2BH9Y6MnRsdzZzdBvFyMNHc7dX3yVQ9fOhHr3k8VlQ8J422aIuS0Aw7y%2BnPw5mflWiS3CnknfywlKRpLonaQZNyxmm0gZ5TOkaEHA3vO8WAZp9WwcQk6Ng54BtLC52yZ2GzWhcjpg0Feoiw1/CqEy0k0plt2Cr%2BtvTyiT0JRL1jX4ZoSh0j7z/KInKlpq9pi9zyBLP3NwuSRIw3xv94chnzUfbMj0d77gavp6tita3J0H8Nsgejc82jO4MM9a4mQz2RLpL4LamdPEZ02TY/0HygVp4b7dfqOryvycDwC1%2BXw53JKiIUcKbemYwXWNZ56Z2%2BW9ujY2gC5ZewSzaUmjIEJgwgNnjtwY6qAG3SoLevPUCmAICjQGAK6isDw2BR1PIpe6sfEoBz5SOsiaiJ4nEhlqaSIAo3Novk0/lFtqNTzGFM5ComOlFWombeGKjB17/wwHzUxCWggNvENnJ3DmqPHEXCDCLPWm5Fnt7FoFoYjxmemuknsSEDNrzrVYaLX%2BrEi7QsT0TXWNAYgO08yIl/WsgSEybtCI2uHJcr%2BGn0JW10lrATYftzkdZhr0SvhCBnFo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T065330Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW52SB4E6WZ/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=9ba40aadbd3222f244b0f6def0d0a35f055c2c03c57c2c207d8bd437023ab866"
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
            <p>
              This section is designed to provide users with quick insights into
              the platform’s success and key features. The{" "}
              <strong>bento grid</strong> highlights essential statistics such
              as the number of active listings, properties sold, and satisfied
              clients, offering transparency and building trust. Below this,
              users can easily <strong>browse properties by type</strong>, such
              as apartments, houses, and commercial spaces, streamlining their
              search experience. A prominent <strong>call-to-action</strong>{" "}
              button encourages users to take the next step, driving engagement
              and conversion.
            </p>
          </>
        ),
        image: (
          <Image
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/88ec7931d23cc48fc12521825826db8e?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFztZf7UZxqHjukVqU/DOTKas/cLSNgXXXfGetONNj8UAiARQniQxh1gdcI0i4JCVQ6t8AQ8PkVC7nKMvXFt4sHdNirNBAhdEAAaDDczOTkzOTE3MzgxOSIMv1jt3v3K5z%2BvRCNxKqoEgQKBJRUe4Ly6p/K3tc1dR9y7LpBWTB8p3wxP1eEeGmG5Un8T2HVgDG/WfHxiuD9XGzJ574S6tQUaFmYi4exB/OPsCV4uu/QmvzHgjOlg1/K9FJRtDLW6iIf%2BDGwnBYrS5HJHK3/yv8IWZu9XW9tVTr3V3DD69ntGZ9WFPHJCmJOG/2l4vr8P6coy2q8%2BgBo2Hh3b4f2gKqnbsodW0MzQC7kAxgvnm7RseL18jZq1f8sxr5/Ci3KgGG5zqJY46E4z9dmfVsOKOsC3Eza6BVIGP1y6YV0t36AEYexuIUyEtKdI7uffVFxYq8uOFxKkkzN1bnIGgyjnfzuq139rs%2BdNIhgoybD17yKJEDwQyRWdHTmLS1VY6Jqnsdvs9eOBTOtNuDNDgd4pOq9ufre7j3PITgfVjax3/iJyQyXh5tYG6z03OwFQJ7pmrv7Yb8Eney8n9d1SX5OXmgrFoHwjWFELVgTRVdcgKZjosCePyiscWmH2o5hwoo%2ByWgdP4JZheRpELGsLEDrGtaNgkGRXSBMskfrVsiJoCKZ/XUnm3ezO4D0JChJPSbcue4asdEW30xufv/%2BwjR2kLeWcDjFAj4fCCN93iJbZrTPOjan8AbKwOzoBejq60POkdJN/e0uFy4c612i%2BXk5jvbSh2q1G7y%2Bc9JMEgN/62JZiS2wWcxB2QNaz4AxqNC5eNKHowRzzaK3p4bMkrHL1m29PWwKhhHmv5i8FZ4x8pGVhsRAw8v/ktwY6qAENoQcftTKma%2B8UXT64xnZ9OFxP2kCTQXweamwEY8AWSbDNkaECwRW4leJCe0CEvbd/FmEQ5oKOb3tcDCH7K3A//ilkh3nQhk9V3weBbs72mqgazoXdWVMwxOECv5QEjq%2Bwa0Lw4KVN5ajVAByop%2BEFviyQrXVuTSsdRJOgKa9FUFhcPofpfYFGQJBnDHk2ZtTLYz9hkR42NTMxJ3M/97ayv3IW63LjuhA=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T130341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIA2YR6PYW5R5SQ4PXC/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=2ba0c4f4b166d706b2ac10fe4a3f27d66aae03c4c6f54982f0bd7f75dd74f086"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 h-full w-full mx-auto object-cover"
          />
        ),
      },
    ],
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/78e4eeb17dce4906a12ececcd036808c?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGXHavDr%2Bsp6gTYiZon1xq3quvO/45vQGkr3/u4ILkBFAiBFvfn9mlKJdfymS3XrGvoMAAG2bbOyFA1gk9ZegREcMyrNBAhXEAAaDDczOTkzOTE3MzgxOSIME4ShUryCicfUbhYUKqoEleYdIKmKv/mcyrb4WBAFU1LoK7LfSTf2xMoJ%2BVAnxqGWPLd6kJJDs42yPkElwejPZdxa9ar5Z69wk/YDcGL1t9ZHSadkm9xvpZxcDEUg6Vw547jFk9wmWMemoaows/fVc/GHyckUSttXNm2sAaCX91lzDiMQ1tboWlfFFSTHSJlLPeQhYB/Le7BxB9zJLZsAquG0bMQW1B2sBr/j%2BODMH6EFewopi7uHga4ux0VbQlvba5koTVons0U4kY5FAZkznUka0O211FLL9/6E1edoOET7oHzkVzZCi8uCvEE/ihIznlxxZj9K6ELTTQQAo47Tls1mgNn6lA6JypBxDgo4L9w5R6juXfahzlPHZjSw3UB3LrCYXPPVXLQKnRbGamPZd51usysILzs%2BH9Y6MnRsdzZzdBvFyMNHc7dX3yVQ9fOhHr3k8VlQ8J422aIuS0Aw7y%2BnPw5mflWiS3CnknfywlKRpLonaQZNyxmm0gZ5TOkaEHA3vO8WAZp9WwcQk6Ng54BtLC52yZ2GzWhcjpg0Feoiw1/CqEy0k0plt2Cr%2BtvTyiT0JRL1jX4ZoSh0j7z/KInKlpq9pi9zyBLP3NwuSRIw3xv94chnzUfbMj0d77gavp6tita3J0H8Nsgejc82jO4MM9a4mQz2RLpL4LamdPEZ02TY/0HygVp4b7dfqOryvycDwC1%2BXw53JKiIUcKbemYwXWNZ56Z2%2BW9ujY2gC5ZewSzaUmjIEJgwgNnjtwY6qAG3SoLevPUCmAICjQGAK6isDw2BR1PIpe6sfEoBz5SOsiaiJ4nEhlqaSIAo3Novk0/lFtqNTzGFM5ComOlFWombeGKjB17/wwHzUxCWggNvENnJ3DmqPHEXCDCLPWm5Fnt7FoFoYjxmemuknsSEDNrzrVYaLX%2BrEi7QsT0TXWNAYgO08yIl/WsgSEybtCI2uHJcr%2BGn0JW10lrATYftzkdZhr0SvhCBnFo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T065330Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW52SB4E6WZ/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=9ba40aadbd3222f244b0f6def0d0a35f055c2c03c57c2c207d8bd437023ab866"
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
            <p>
              This section is designed to provide users with quick insights into
              the platform’s success and key features. The{" "}
              <strong>bento grid</strong> highlights essential statistics such
              as the number of active listings, properties sold, and satisfied
              clients, offering transparency and building trust. Below this,
              users can easily <strong>browse properties by type</strong>, such
              as apartments, houses, and commercial spaces, streamlining their
              search experience. A prominent <strong>call-to-action</strong>{" "}
              button encourages users to take the next step, driving engagement
              and conversion.
            </p>
          </>
        ),
        image: (
          <Image
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/88ec7931d23cc48fc12521825826db8e?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFztZf7UZxqHjukVqU/DOTKas/cLSNgXXXfGetONNj8UAiARQniQxh1gdcI0i4JCVQ6t8AQ8PkVC7nKMvXFt4sHdNirNBAhdEAAaDDczOTkzOTE3MzgxOSIMv1jt3v3K5z%2BvRCNxKqoEgQKBJRUe4Ly6p/K3tc1dR9y7LpBWTB8p3wxP1eEeGmG5Un8T2HVgDG/WfHxiuD9XGzJ574S6tQUaFmYi4exB/OPsCV4uu/QmvzHgjOlg1/K9FJRtDLW6iIf%2BDGwnBYrS5HJHK3/yv8IWZu9XW9tVTr3V3DD69ntGZ9WFPHJCmJOG/2l4vr8P6coy2q8%2BgBo2Hh3b4f2gKqnbsodW0MzQC7kAxgvnm7RseL18jZq1f8sxr5/Ci3KgGG5zqJY46E4z9dmfVsOKOsC3Eza6BVIGP1y6YV0t36AEYexuIUyEtKdI7uffVFxYq8uOFxKkkzN1bnIGgyjnfzuq139rs%2BdNIhgoybD17yKJEDwQyRWdHTmLS1VY6Jqnsdvs9eOBTOtNuDNDgd4pOq9ufre7j3PITgfVjax3/iJyQyXh5tYG6z03OwFQJ7pmrv7Yb8Eney8n9d1SX5OXmgrFoHwjWFELVgTRVdcgKZjosCePyiscWmH2o5hwoo%2ByWgdP4JZheRpELGsLEDrGtaNgkGRXSBMskfrVsiJoCKZ/XUnm3ezO4D0JChJPSbcue4asdEW30xufv/%2BwjR2kLeWcDjFAj4fCCN93iJbZrTPOjan8AbKwOzoBejq60POkdJN/e0uFy4c612i%2BXk5jvbSh2q1G7y%2Bc9JMEgN/62JZiS2wWcxB2QNaz4AxqNC5eNKHowRzzaK3p4bMkrHL1m29PWwKhhHmv5i8FZ4x8pGVhsRAw8v/ktwY6qAENoQcftTKma%2B8UXT64xnZ9OFxP2kCTQXweamwEY8AWSbDNkaECwRW4leJCe0CEvbd/FmEQ5oKOb3tcDCH7K3A//ilkh3nQhk9V3weBbs72mqgazoXdWVMwxOECv5QEjq%2Bwa0Lw4KVN5ajVAByop%2BEFviyQrXVuTSsdRJOgKa9FUFhcPofpfYFGQJBnDHk2ZtTLYz9hkR42NTMxJ3M/97ayv3IW63LjuhA=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T130341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIA2YR6PYW5R5SQ4PXC/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=2ba0c4f4b166d706b2ac10fe4a3f27d66aae03c4c6f54982f0bd7f75dd74f086"
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
    category: "EduBridge Classroom",
    title: "AI based Learning Platform",
    src: " https://images.unsplash.com/photo-1720139290958-d8676702c3ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "IGiftIt",
    title: "AI based Gifting Platform",
    src: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
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
