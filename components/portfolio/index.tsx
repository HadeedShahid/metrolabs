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
            className="md:w-1/2 h-full w-full mx-auto object-cover"
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
            className="md:w-1/2 h-full w-full mx-auto object-cover"
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
            className="md:w-1/2 h-full w-full mx-auto object-cover"
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
            className="md:w-1/2 h-full w-full mx-auto object-cover"
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
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />
            <Image
              src="/images/homify/detail-map.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
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
            className="md:w-1/2 h-full w-full mx-auto object-cover"
          />
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
            className="md:w-1/2 h-full w-full mx-auto object-cover"
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
            src="/images/edubridge/manage-plan.png"
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
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/442b68a8b758789020305bfd5310268b?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCID9ikqYgv6G/XaKiTX3y%2BIqQOzIwagaPq1ofvTcamXVRAiEAmaZR%2BzPzbVekWoSvzK0/lndwSuMXPUrCBKn6/b8Tk9kq1gQIkf//////////ARAAGgw3Mzk5MzkxNzM4MTkiDMjOHmNqVy81xzXQWiqqBI/LijwBJt9goZyLsvKTuK3M5BuaWYeGnnvbdrzn1dhWFvooTKmYOnb9d4fnnYGNimUQLHGg6/xORQdZg54pBLATNaHymM6KWBDq/NjyiOwTA7/QaKWCZCkZUG13dVcZF%2BsuuIIzttqZ2k8wqcq2CPUqKzOAkVav/3UFSLLE1QPmBgy6Unc6faSs649pB1v35DwJmGFnszWkBpKZ6ZjeNf0S76sXzxz1IwvFfySY4RsP/7RBYdNf6Lg1X7JsMxCUiPWqTuJADGa%2BVfeWB1YTLR7jvtv7OlvDNsq9FWdtC4WdWihNkBZlt/fOtHPwOocZT3Dg/rT7y4z0Esht3d/INqJGn9FkWQQV9VowFAyxPLtWc%2Bq/Cd7LspksNNAnuU/NHy8JNhHhdf%2BAPioZhrxbhf28mwgq1jovxMWeb3puWgChjDY8913FQT8Vb16VCKjMraQ6NkasuQnhmbCMbo3W1%2Bwsc0YJTbsd/LvauOe%2BjXiGQxrabmbDOr4MGVuG6AqOknqEWMp699P4X1grr67kWzdDa%2BFkcELhlGR/6T31%2BNhkOdT7FlhCynAmd8dGzh2N3%2B/uUJYf1ndXqNfzG2M5HCHNFNBgZ83Brm%2Bfy1tHR76gmV3BhEV2gWCkkZFHgnr%2B1VK8WlgWfDcOul%2B6wGuGIW/qb23GSQaQbarvvsZ/RI4m2zAvOVRPp1ViU7Nh0mC/W7jfx%2BFnXrBk3%2BlO4jHByQkJ3L8cDcF5Hbw7MOvC8LcGOqcBQgQQFgT9Zuf2NNJRWl/Dlprka0z4o2tyV7vOupXULM1Gi4%2B5TYjXBdEd3aecKOZwSifGjhhqiSi2GxT52hqNbg0UVAqkzaHcU2wLXvLvoes85oxJXbsbVVHmSa45dOEsS9y2bT%2BFyNNZWq3HEoxNrXywXaBmCggszCLea%2Brle%2BAfSYUsO4eZOc6WgWy9ZdrLufVHzSu57iEws/lGQIQz4VYK4%2BNNvvg=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T163822Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW557AMIYTY/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=d7648e214155bb827fa3602c4fe51b54df6f5904eb72d516a280c7765e231682"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />

            <Image
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/565103364539e9293be4d658de0563f1?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAg3yhONOISLk35WkuuDqJybXMTcFj0yIxrhfy%2BLRXybAiBqFjFJ63SqCBdG6EuyCcaZJptOggzTmxSfiMWP2diTxirWBAiS//////////8BEAAaDDczOTkzOTE3MzgxOSIMUEZ4CDfb/HWnJCiEKqoE0Cd3l5Nf9g5ZMOvx/4hH/KsdpgFuM7GyhJhC8onyi9e1L2FMXGTO64O%2BHpxvAcN91qE/6qPuiXuDFDqYnAGc1DJE6bXwyRLidwNQTdxkhvJKmSnO/Pbo6wOgPknr9VcI9GJMkzpF834UbfbUXXT/JrvTB1xx8CaXLKghVQStI74R%2BUwS4UvwqN4RNCpp1zjI%2BxG4bQ88cbhjHxvfJ0X6WneG4IBbKwQ4CGB1zub8rKMkRpGvELuEWpn934n5lMZ6SAZ9H9jRKcj/uWQfxqtWr6vYvuSpuYgrTRcqUVu6DAdLqnJ6F1hi153OUphjqLEnY6Pu8yuxIfYe3VqY8JzgR1pLu8rzOIikIhfBdBmrgiYHOfPViaPdZUJNkW0yfAA/IEmXXBdGPltYx2dXAnQV93qDuZ0hKh60OkuL/wJ5f/QHuDBeUzE6oPnrZO9AFj3RMqFU7BwfeTg9OBjQxvO0OlX3pYyJKE0t2SF6rALvrIGi39t13Q21laesXJ7IOgOeTPyKFt8sH5q6SptVacfhU4Ga5skn/y9omHYYYk1nuHuh6WKQwizG/sffHp2voermkgDCWYcH3m1bMK6puCrVygvMmeirM9WVJPdXtV66cVxtyD1fRA3cLzX6fGLqNKSAHWqofKBwwjT5YWhpRpYNVET6aMwuQzTN%2BhwhTtwBrR7Um%2BaJNl9VrWQjiErJa5WdSJoLN%2BbfDaCp6%2BTUa6ZpW4thq23DC54ZnOowu8jwtwY6qAENmK8/9ve34tYrIx%2BX76xm2Mvb51O9EPhnOjJxt8mqtlysAlWjWWiBSWVj2H%2Bib93kMflG28/DSTxV28k0ZkCU%2BaP%2BL%2Bi8ZUMhuksTw58VT6dyZdWvhqvpcMHFw5TR5TuiPRPBB7gao3fGevGcODJvWzE2HnsUq8MCLcfc90trutAJQiM86%2Bm6dn8OY%2BH6SPtYgKWWT4crmfVdJL8ht75TRkOpDoS5a%2BE=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T163827Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW53MMK5EPP/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=017bec9cb0e770d5b8e14726b481b6e0583aa63f4fcaa0bf0a0a2a0abfb84642"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mt-10 md:w-1/2 h-full w-full mx-auto object-cover"
            />
          </>
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
            The <strong>Listing page</strong> is designed to first display the{" "}
            <strong>Most matched products</strong> based on the user’s
            preferences. To further refine the search, users can utilize the{" "}
            <strong>Quick filters</strong> to tailor the product suggestions,
          </p>
        ),
        image: (
          <Image
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/530e23ac5f4208f71926de3d0e6cb290?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFw2N85p4fM1P4XNXs4IeCFhco7Tk2vLqSQmyWhyU8BWAiAp7T0cwjX6WHjkY0r6y7KvRm9q3SjdXGDMnl2ZeQDuOSrWBAiS//////////8BEAAaDDczOTkzOTE3MzgxOSIMAEt7o0B2NEttG625KqoERs9nl%2BKaYTxIBQ2wxvOfvNq2NHTOufY%2B4eMFelmYmBRgUrXNYC964RGY9ZtyA6zZukZnrdo4LIh3P71hTkWvXjh8HLDlgodqWCk38qobjdXhaoQAkUqE0r7UH/XDlJG5DxRHWChKB0joxk0TLQksukzzCzy4RMaIOvwh0OM29VadQYXYRldWxekPGLntlSO/nPnivk44Nc8dwpnLn%2BDFnbb9mYiQFofuC4mBNovAl5Cvco769%2BBo9jq96k2VWvEURfTuKOovgTs6P85z/22Dl8oH5jytBX99UX2ZuJhp690HlsWLuyAGiP3DTcrvErvOuhxPlfgB2kuqZAa1NVdsLJnMHnnbzKhS7F4gxR93Z8DOyYlM7DWmMqtH7PlwKU26tjjc8Av6iMjLYPnBLc7JQei2m/ocm7pvnMbZpDBXM9QefaQIQlT2OTvwifac1gU2%2BIAP%2BkfIAQfd2uWDNV3kSNm0vLA6GmgVuCX69YxdauhKcoEvsoSoc4%2BeTciUVTjEsef//iGdsWeLzJUDH/iXqAB70ynrBGHmhMMpgavzLc91BGBE/z7q33a6ghzt95TwK7we2ewRxzD/dPjQOzL9B3H6Nri/ixyKWnk0IhrnqU9W4230M7zMficuFyz8iC53Eb0LCvV1JhlPImyG4sLq6Xr9J88tZZqpF5ZeNHRx1fK7mRHZLFYvV5X2SDQJs/nF293QRBfSoHr67hSHLXNbQeJGOhUreA3hWzIwudzwtwY6qAEHplatE%2BmXZJMBWDiG/lh2dFKPvnsXoKEwJN6q/SAkEHrTEiOcqxQU4S9aS72nQ0Lfj1B%2Be4OUKAGn5GB4a1ZTe1VrttPw4aGfkx1iQ7AgQ%2BdZLKFRgA0ynxpasseXaFe%2B/OEBk6oVmmEAvOM85ftRqMvwcHdlLrCTHtwwOSbncELkiv%2BB/i59sUcJS8pMggoeEF2VDBjB8FwmSwOj6Nj65wV0cQx3zpo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T173919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW57DAYPOFN/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=5c1ed7f30ab0b1adb57bcf72a9c53a6a5815184ce26a219f9dc340f10a200022"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 h-full w-full mx-auto object-cover"
          />
        ),
      },
      {
        text: (
          <p className="mb-10">
            Below the featured sections, the page presents a series of{" "}
            <strong>Product listings</strong>. Throughout the listings,
            strategically placed <strong>Quick filters</strong> allow users to
            refine their search on the go.
          </p>
        ),
        image: (
          <Image
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/5247f9ab30fc5560351b2f34e50edbdf?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFeMqeXBydxFyfYd6Kgew7td1ISD6byNYYN8JqrcLiOlAiAWNbeTziBhUt70fxioQwku0kdbIh9R8Li0dTXq/1FMNirWBAiT//////////8BEAAaDDczOTkzOTE3MzgxOSIM/Qn0Lssl6YCdx9PbKqoEtIdEKJa3hGkQek/bD8iXOQnGmpEGU6b0U3JT9w4GjbSRO1puNmSaxB8%2BYE%2BhDXxQQPlFbMaFm23PnClKcA91Mw72ZejoITPskl7Xub8ZZgKy5CKrN6oxrQX8vNbbP3iVQT3mAzagZlwFcw1CMuJ%2B3PvvcXGPTnK2aT04xWfvaaKUCY1O5evkiytjn4GUboXNpOwBIZQBrMt8v6WK/Pnp3R9KnqaLvH6Y%2BB7tIYzr953gXvgz78RBVwy88b0Kprv7YL1ehkSZJnGQbqSCQt3b9kxBZbd2bb7IJ1CKV7jWqtaj7lyA0wYlWAY6EkGULDt8tW%2BW%2BZ%2BSCk7JpWpiGMdXtpMxxPICMyDjSkKrBlMb5Bt8xEqeIZPnXx/QgGHE%2Bs2n%2BWEXSLU0VMbj1EiCdU9NHUEATWOwhXRz3TkjZD9Ve2a8GmjRUhIVLMM4NzuvRi4DsiE%2BDAFFnTMihmMYh14dASFCw2jW3GAoSmUdS%2Bo%2Bf1gFTO6U/fWh9WgEyIS7V%2BKDkKeEBvRYnMtC8onb4y7vgv0azU%2B9uKIQyQmHJfhNcJ4PardfqxuvIIEHwlG07ZngqqAiXfbA2aNgOmbL8YjUCw662nQyHjxUcVz4pRq9U/e283r3CgZbjcfWFf9Vxm0wZZsNGCSNflO4Tok3gKunvNk7%2BO8MyLOInv5uJ40oX0VD1PIQLuBObTy48AGPrv/C55mYlG6hSaukfWjEeDz9N51oxRj%2Bip6grxow3eDwtwY6qAGIVqhg8S/KBjtBPgjzHKVwCPnKz83BGPizzOVUkBF2ezPpOTxt9SMG94tJw8KQSI7Kfy/0HjCSjvhQLNyobrJSXmXlYf0CmGlgeNJUa5EvDh3aQtu0FFZRpam99GUekyBi8TXpKoybxVmMLIqP9T3SWNOFKdxRcrPbbZ337EoBPfkRQo1kxdH3yZtwd22QLnWJQNjQ2qjCrYgvMmfM7hoEIKtrXHTGesc=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T173925Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5RU6243X2/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=11eb3af37abc70de75e66fafc5d39d9d03373b958b3d47866fa6eb44c0f74424"
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
              A visually striking <strong>Banner</strong> highlights a{" "}
              <strong>Featured product</strong>, drawing attention to a special
              item. The listings then continue with seamless{" "}
              <strong>Pagination</strong>
            </p>
          </>
        ),
        image: (
          <Image
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/e70810b93a079ab97c0ffcb9339dfc5b?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIACsVrmJQz%2BVUPHmbPytvLDyhqaszkDgtybGs9HDx/EtAiEA9neGn0MhftGwnas6z0srP1iQow3PblCX8A5LqZR9NeAq1gQIkv//////////ARAAGgw3Mzk5MzkxNzM4MTkiDFSauGRnD811UkeIJiqqBBMsBX%2B7ifxUIl5kUb%2BMp0HCKVVHjCDlJ43fWZIMw2QpvCLLDq0Xs5KXv%2B7sfrlYZJraumzuu8yZZxzbseB%2BOm50tb1gbp55g/ne6iFOZ%2BLeCFYKp3XCXdVAczsblu82oQsc9SoEl4/f0xIBOn4znIel1tuEc4qIkMbLynmwB8j%2BYPh8jCVmrWa81cgTOVl8y3JtZLMNPIicHzWVEE0UdPNoN/UpHBAwQicNWw3uCgIU6W3ozIuU5sBiRXwAOxII%2Bg5qluSX0j1MeaZO1/SnBlBfSRrGTsWRVjCDckSh526GZx5i%2BMKLJIQ/K5xyTejz%2B8dzl49DioonNOIq8Vdd1tmVlLl1FuC0JZ9JpbD9wbggkXQHCO8JBYzbqgsX946UWQ532riATvLvQ4d14BpZ08CGWzIh2LOiLKI5ajc3hc5XmCk9lPQjwpXARBgolA/cbEPYXtcInhmNyQ2U9S%2BN0xxP%2Bq6L/q8NqJfcsijxk8c9DxuyHx9smS7Uc1qhVz%2BMwPk5oLpWeJc/38YLMF4rBcZ2jdhFw91xT0Y4kxNdL2mAHZ/jJLjbwOzpTTSH5QaB36jKu54%2B238JSPb8PVkWdEYjcN6ui9tf1INvukS/qlQ9D6%2Bo0lvfOuRt%2BzBR6l5SNiauSVlf4snUbNllaBOhQVbwG5gLA3YFXJnhNADYzVsT9kdPh04WZjrsePlbkmbIOUYuV05ZMsCRJ3kCM%2BdP6/ND5MIYAT7UXUkoMOPb8LcGOqcB0GlGeuoY36u/S/Oj/j9qkk%2BWMKauNR5lcMrH6H%2B7wAplB52dECA9QugLXcy2s/5gySNrfbKyVr/JwvTGiimZVTrwKfi/N01qRNCG1rsZmZ3qNIwQYclwAjWqjHomn5m50lNWy68krPHjB21D2s6Egx2fUa3RIs5jeJj%2BrcSu0V3ujyLggcNXJMlKr7qR9X8xYdDIEjh9c4%2B/x34srLEgfgrZrvGUUCw=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T174341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5REGXZVQV/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=efa046d3e726daadf1b09e2d91c0524a0ebb8e77479a318dba2e5f64f7556de1"
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
              The <strong>product detail page</strong> features a{" "}
              <strong>Modern</strong> and <strong>Minimalist</strong> design,
              providing a clean and focused experience for users. Users can
              customize their purchase with optional <strong>add-ons</strong>,
              making the shopping experience personalized and thoughtful.
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/d39367c6346c226c37d610f5827dddef?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFw2N85p4fM1P4XNXs4IeCFhco7Tk2vLqSQmyWhyU8BWAiAp7T0cwjX6WHjkY0r6y7KvRm9q3SjdXGDMnl2ZeQDuOSrWBAiS//////////8BEAAaDDczOTkzOTE3MzgxOSIMAEt7o0B2NEttG625KqoERs9nl%2BKaYTxIBQ2wxvOfvNq2NHTOufY%2B4eMFelmYmBRgUrXNYC964RGY9ZtyA6zZukZnrdo4LIh3P71hTkWvXjh8HLDlgodqWCk38qobjdXhaoQAkUqE0r7UH/XDlJG5DxRHWChKB0joxk0TLQksukzzCzy4RMaIOvwh0OM29VadQYXYRldWxekPGLntlSO/nPnivk44Nc8dwpnLn%2BDFnbb9mYiQFofuC4mBNovAl5Cvco769%2BBo9jq96k2VWvEURfTuKOovgTs6P85z/22Dl8oH5jytBX99UX2ZuJhp690HlsWLuyAGiP3DTcrvErvOuhxPlfgB2kuqZAa1NVdsLJnMHnnbzKhS7F4gxR93Z8DOyYlM7DWmMqtH7PlwKU26tjjc8Av6iMjLYPnBLc7JQei2m/ocm7pvnMbZpDBXM9QefaQIQlT2OTvwifac1gU2%2BIAP%2BkfIAQfd2uWDNV3kSNm0vLA6GmgVuCX69YxdauhKcoEvsoSoc4%2BeTciUVTjEsef//iGdsWeLzJUDH/iXqAB70ynrBGHmhMMpgavzLc91BGBE/z7q33a6ghzt95TwK7we2ewRxzD/dPjQOzL9B3H6Nri/ixyKWnk0IhrnqU9W4230M7zMficuFyz8iC53Eb0LCvV1JhlPImyG4sLq6Xr9J88tZZqpF5ZeNHRx1fK7mRHZLFYvV5X2SDQJs/nF293QRBfSoHr67hSHLXNbQeJGOhUreA3hWzIwudzwtwY6qAEHplatE%2BmXZJMBWDiG/lh2dFKPvnsXoKEwJN6q/SAkEHrTEiOcqxQU4S9aS72nQ0Lfj1B%2Be4OUKAGn5GB4a1ZTe1VrttPw4aGfkx1iQ7AgQ%2BdZLKFRgA0ynxpasseXaFe%2B/OEBk6oVmmEAvOM85ftRqMvwcHdlLrCTHtwwOSbncELkiv%2BB/i59sUcJS8pMggoeEF2VDBjB8FwmSwOj6Nj65wV0cQx3zpo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T174343Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIA2YR6PYW57DAYPOFN/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=5160794afa9cdf4af9bb05d7a0dacd8aa8b7fcd883b5daf912c19c49b2fe83f7"
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
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/29338785524da6a8681e5a1114ec051c?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFw2N85p4fM1P4XNXs4IeCFhco7Tk2vLqSQmyWhyU8BWAiAp7T0cwjX6WHjkY0r6y7KvRm9q3SjdXGDMnl2ZeQDuOSrWBAiS//////////8BEAAaDDczOTkzOTE3MzgxOSIMAEt7o0B2NEttG625KqoERs9nl%2BKaYTxIBQ2wxvOfvNq2NHTOufY%2B4eMFelmYmBRgUrXNYC964RGY9ZtyA6zZukZnrdo4LIh3P71hTkWvXjh8HLDlgodqWCk38qobjdXhaoQAkUqE0r7UH/XDlJG5DxRHWChKB0joxk0TLQksukzzCzy4RMaIOvwh0OM29VadQYXYRldWxekPGLntlSO/nPnivk44Nc8dwpnLn%2BDFnbb9mYiQFofuC4mBNovAl5Cvco769%2BBo9jq96k2VWvEURfTuKOovgTs6P85z/22Dl8oH5jytBX99UX2ZuJhp690HlsWLuyAGiP3DTcrvErvOuhxPlfgB2kuqZAa1NVdsLJnMHnnbzKhS7F4gxR93Z8DOyYlM7DWmMqtH7PlwKU26tjjc8Av6iMjLYPnBLc7JQei2m/ocm7pvnMbZpDBXM9QefaQIQlT2OTvwifac1gU2%2BIAP%2BkfIAQfd2uWDNV3kSNm0vLA6GmgVuCX69YxdauhKcoEvsoSoc4%2BeTciUVTjEsef//iGdsWeLzJUDH/iXqAB70ynrBGHmhMMpgavzLc91BGBE/z7q33a6ghzt95TwK7we2ewRxzD/dPjQOzL9B3H6Nri/ixyKWnk0IhrnqU9W4230M7zMficuFyz8iC53Eb0LCvV1JhlPImyG4sLq6Xr9J88tZZqpF5ZeNHRx1fK7mRHZLFYvV5X2SDQJs/nF293QRBfSoHr67hSHLXNbQeJGOhUreA3hWzIwudzwtwY6qAEHplatE%2BmXZJMBWDiG/lh2dFKPvnsXoKEwJN6q/SAkEHrTEiOcqxQU4S9aS72nQ0Lfj1B%2Be4OUKAGn5GB4a1ZTe1VrttPw4aGfkx1iQ7AgQ%2BdZLKFRgA0ynxpasseXaFe%2B/OEBk6oVmmEAvOM85ftRqMvwcHdlLrCTHtwwOSbncELkiv%2BB/i59sUcJS8pMggoeEF2VDBjB8FwmSwOj6Nj65wV0cQx3zpo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T174350Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW57DAYPOFN/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=ebb6b632d2507cbf82c9d64c90a44897c293205e1761430574095eba66649737"
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
              The <strong>Orders page</strong> provides users with a clear
              overview of their past and current orders. Users can{" "}
              <strong>Track</strong> the status of each order and view
              comprehensive <strong>Order details</strong>
            </p>
          </>
        ),
        image: (
          <>
            <Image
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/b4f41dfa9b6990e92822befbc244e978?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFw2N85p4fM1P4XNXs4IeCFhco7Tk2vLqSQmyWhyU8BWAiAp7T0cwjX6WHjkY0r6y7KvRm9q3SjdXGDMnl2ZeQDuOSrWBAiS//////////8BEAAaDDczOTkzOTE3MzgxOSIMAEt7o0B2NEttG625KqoERs9nl%2BKaYTxIBQ2wxvOfvNq2NHTOufY%2B4eMFelmYmBRgUrXNYC964RGY9ZtyA6zZukZnrdo4LIh3P71hTkWvXjh8HLDlgodqWCk38qobjdXhaoQAkUqE0r7UH/XDlJG5DxRHWChKB0joxk0TLQksukzzCzy4RMaIOvwh0OM29VadQYXYRldWxekPGLntlSO/nPnivk44Nc8dwpnLn%2BDFnbb9mYiQFofuC4mBNovAl5Cvco769%2BBo9jq96k2VWvEURfTuKOovgTs6P85z/22Dl8oH5jytBX99UX2ZuJhp690HlsWLuyAGiP3DTcrvErvOuhxPlfgB2kuqZAa1NVdsLJnMHnnbzKhS7F4gxR93Z8DOyYlM7DWmMqtH7PlwKU26tjjc8Av6iMjLYPnBLc7JQei2m/ocm7pvnMbZpDBXM9QefaQIQlT2OTvwifac1gU2%2BIAP%2BkfIAQfd2uWDNV3kSNm0vLA6GmgVuCX69YxdauhKcoEvsoSoc4%2BeTciUVTjEsef//iGdsWeLzJUDH/iXqAB70ynrBGHmhMMpgavzLc91BGBE/z7q33a6ghzt95TwK7we2ewRxzD/dPjQOzL9B3H6Nri/ixyKWnk0IhrnqU9W4230M7zMficuFyz8iC53Eb0LCvV1JhlPImyG4sLq6Xr9J88tZZqpF5ZeNHRx1fK7mRHZLFYvV5X2SDQJs/nF293QRBfSoHr67hSHLXNbQeJGOhUreA3hWzIwudzwtwY6qAEHplatE%2BmXZJMBWDiG/lh2dFKPvnsXoKEwJN6q/SAkEHrTEiOcqxQU4S9aS72nQ0Lfj1B%2Be4OUKAGn5GB4a1ZTe1VrttPw4aGfkx1iQ7AgQ%2BdZLKFRgA0ynxpasseXaFe%2B/OEBk6oVmmEAvOM85ftRqMvwcHdlLrCTHtwwOSbncELkiv%2BB/i59sUcJS8pMggoeEF2VDBjB8FwmSwOj6Nj65wV0cQx3zpo=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T174345Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW57DAYPOFN/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=827cb78e232bd91298b2bc2373a8f0c70065705054278c0e8ae077943fac276e"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
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
