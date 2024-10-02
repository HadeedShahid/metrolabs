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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/88ec7931d23cc48fc12521825826db8e?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFztZf7UZxqHjukVqU/DOTKas/cLSNgXXXfGetONNj8UAiARQniQxh1gdcI0i4JCVQ6t8AQ8PkVC7nKMvXFt4sHdNirNBAhdEAAaDDczOTkzOTE3MzgxOSIMv1jt3v3K5z%2BvRCNxKqoEgQKBJRUe4Ly6p/K3tc1dR9y7LpBWTB8p3wxP1eEeGmG5Un8T2HVgDG/WfHxiuD9XGzJ574S6tQUaFmYi4exB/OPsCV4uu/QmvzHgjOlg1/K9FJRtDLW6iIf%2BDGwnBYrS5HJHK3/yv8IWZu9XW9tVTr3V3DD69ntGZ9WFPHJCmJOG/2l4vr8P6coy2q8%2BgBo2Hh3b4f2gKqnbsodW0MzQC7kAxgvnm7RseL18jZq1f8sxr5/Ci3KgGG5zqJY46E4z9dmfVsOKOsC3Eza6BVIGP1y6YV0t36AEYexuIUyEtKdI7uffVFxYq8uOFxKkkzN1bnIGgyjnfzuq139rs%2BdNIhgoybD17yKJEDwQyRWdHTmLS1VY6Jqnsdvs9eOBTOtNuDNDgd4pOq9ufre7j3PITgfVjax3/iJyQyXh5tYG6z03OwFQJ7pmrv7Yb8Eney8n9d1SX5OXmgrFoHwjWFELVgTRVdcgKZjosCePyiscWmH2o5hwoo%2ByWgdP4JZheRpELGsLEDrGtaNgkGRXSBMskfrVsiJoCKZ/XUnm3ezO4D0JChJPSbcue4asdEW30xufv/%2BwjR2kLeWcDjFAj4fCCN93iJbZrTPOjan8AbKwOzoBejq60POkdJN/e0uFy4c612i%2BXk5jvbSh2q1G7y%2Bc9JMEgN/62JZiS2wWcxB2QNaz4AxqNC5eNKHowRzzaK3p4bMkrHL1m29PWwKhhHmv5i8FZ4x8pGVhsRAw8v/ktwY6qAENoQcftTKma%2B8UXT64xnZ9OFxP2kCTQXweamwEY8AWSbDNkaECwRW4leJCe0CEvbd/FmEQ5oKOb3tcDCH7K3A//ilkh3nQhk9V3weBbs72mqgazoXdWVMwxOECv5QEjq%2Bwa0Lw4KVN5ajVAByop%2BEFviyQrXVuTSsdRJOgKa9FUFhcPofpfYFGQJBnDHk2ZtTLYz9hkR42NTMxJ3M/97ayv3IW63LjuhA=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T130341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIA2YR6PYW5R5SQ4PXC/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=2ba0c4f4b166d706b2ac10fe4a3f27d66aae03c4c6f54982f0bd7f75dd74f086"
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/83cb40e4c86d9e0c5c7f574cf87e7034?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDxo7byw1v%2BS1Xo3XyfMzAQOjb2WylCJbuKZNcmI4bS8AiEAhn2HSb4C6/E3F7oTogHGCp7sdavHyj9s3/jda5Ij/xIqzQQIXxAAGgw3Mzk5MzkxNzM4MTkiDBHp3vMm%2BwArTFKDuyqqBE3x2znfOotC/OUnCxDL6Qt%2BxFNxM9xsvcagzOve7Qie5/exvVCACh7Z3OoymxbbfGcA%2ByPXgwm2YGHJjyrD%2BAWjMHkPFQDxXSvvnpexvfzUD3vFy9hALH%2BWs4pFAOZObA1gwVcWZV4PPowlw7fHC%2BzVuWwxrMJmWvkj6Chyvxc9vAUTrRTPWQ9ZwPhQOyLcphEQ4BDRmx/QW0MR2UU/saknYPUafmQ4XGWfOTVP/xA28nKxMjYphwOYIOrR5R9JmCq1C9bc7TxTPQCOsdLxnEYLPKUknHPfCE0c12Dcqnqry6Ow1v2Vi%2BbnNQvcOeelSuTscqGP40HPxCCxvCWrn%2BLNpXyNkTJ5NejYGI868cTV95wPW3%2BHQv/s/mXxToRJWihgD7/hFLAVQuNNuVwJo8VR%2BO%2BQsUjOFtNop8uYujUBOKQUPvPXLrdImUXbKZ28M9FjeOgyRXcQk1E7kG1Cijj9zLGTFKo9R4704P%2BrQPBxHZUk1s4k48RAKx5eVnyqf42szAUEWLtgmR3Bqsq4fg%2BabHbXVt5c2MhxK4wOK%2BTJGsV/o2yp00FpGuK%2B5LP8n5x2L0xbTFX1Vu6tWw6KK2zy3dscexOUOrvbYEVpk%2BZNILCqexTNOtUmxgRNchtKHakm/%2Blf4rI7cmt/2/ftNhzmXj1PQAguCclEImxKn0VPL9X1D6mQplGT34bV4hzdjFn1dhu9UhGOf5muQg29jetxtYCtbJ2/kz7gMP295bcGOqcBNYpxUWbknCBb19lVbhZTdHtB4N18aZxmBUZYovnc4LRSatDB112RjrhOjgHWQwipQtu5VpmBCzkzlMYkGD3mozp0PQ4mf0Wz3WfmDjhvlTz4PIducuPgZOehMCVkGm9LTk1PPWt7DRq%2B1v93RlH2wdTAEIR9FfNAxTN9Xw1TQjHo8rmkq%2BiXkxWpE7N1aHCceN5SwTu0yjFjXPLXzN/MO%2Bu%2BbKVeJm8=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T150545Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW55N5Y3DRE/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=fcc98fe3042e326aaa53e719e791b97bc859f7c98da786cc9cefcbcc001850ac"
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/782b97d50262f62d1611628491201765?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCB6NxB9/up4atEKKwrOwgxJl5czh03Rht0GegXRK4r1QIgXmERnOopb8Af1sHfloxHfY2u%2Bo%2Bb6C1KfJIZQT8P/dsqzQQIYBAAGgw3Mzk5MzkxNzM4MTkiDFY0eRA2G7aJ%2BDuAlCqqBLPBtpj1LkIfFCc%2B0VDEqQ%2BEL/E1DAVHTZ34xPrkZropUkA2y2o/JoiGNZsTDM0yDbM%2BrNHH3pWMPSpQnVboySjv2qge0hFFrY3XG4vPspoupGOsv6Kg4DMtIKQCWbBCDPJvtk3PQbmWYRT6oxCLV/JWZzWXajvNCRAfN%2B0oBFCA92w7XapOlkGWXMBgc0i9aHV3w3o9EJNLbTzUmshdryImEhlwVpIhDEk447U%2B9f03tvfC6VXQQtsOs9XudJmrWXWrJ9X4ibpIMps5lBKnI2qisNLPTMF5g%2BBLiupA68A/k9R7v7OGeoit52k1DlFdUzliSrfh4TT%2Bs7DvatynqleYF4WDVDZM457sX6uK2eYX2UUwhbHZVepZARdcG%2BvKTgC/335NwVjeCqH89ElxKmmyON7viraCu58mN4y4aSLOx5eyz1Yplz9a/5F1LYnNDDb3FLgHY/MzLTo81SXZJ2/BT8QiarB3eosuRzOe97eNVTzbOPPEP8ci5Eu1oupC%2BdrzSG3e59GEZX%2BlitQ0Bfr5l3Tz8WTMvn87%2BJz8n9F9pEFlEQrkih%2B7h1GrFXGQTMjIZn6MhhEYtZYGHsnAblr0cqOeRqFZE/zQ3EVQjcE%2BJudUzMaxRZttPkBaJzdqhdFBJTAqbQb6yVqEIuBZp2HbuiTVbohva7EjhGbNFnZIPpmTBpYQPdaPUC5CHuwz8IMXLePDX5PoK41wq7mqFIohEX4FYeyn/p42MOXT5bcGOqcBcEY2k276k93PSkQnUTVUnrHI3e2XJuBo2W66TPcSlnyPeYi7nU6RhVfj5uKihKp3fXKZ2XivOUwOIyUgisJR97uDMJcGYGrV%2BK0VrvA/w4Qp5sHemt6ue1EIGUFEOeaidTJsukknLygX4ShX%2BxI7nAWcdGeEOQbH6Zw0ZiphVo19SBTQN26AzM7hF9ZHVaryaG1/S4qgUFmvgy3g1aVZ/iNNhgLfmpw=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T151028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW55R62NJKH/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=0c482bb37f91b8a0ca92576fe13d4c5f08f5fc757b8543295a8208b9913f911f"
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
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/34d4c488e81a04d94e2a53b23a39b427?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICiuIX2mZ3fgZWs9uprrZL%2B9Vgfyqz5uS5JZTrHyks0xAiEAsgs2RZs0wfeFa0FiUhDAQChOJdYjetZbcWGorXkHCOEqzQQIYRAAGgw3Mzk5MzkxNzM4MTkiDKTQlMWrLwlU5XIWKyqqBPPDi0Ld8nzcKafphngn3vn26v0DAiTjbo82cMHWbrBzfxvSnVULoJuOIlJ6tTHD2tO9fqPa3cBvEIpRTEwuGARG5pgtP9mB9%2BruCChrX6Jz1U7dx0DkbU0mPLky1qUxFOhKG%2B4P1hHsFppqu3wvmNEbyZDoq1V1USDjDMjfV0KKY8kzC5Wco7kGcsdi5Jf1s%2BhC6LheLY9Mj3gfJ/F0U2RA2faBKbjRBePWZqMyziHMd0IKr/kqDqVVG8QjY52wf6uc18uyLCocEScIKn/A4cr701ZqqmoG373bAzmZY6r9m0yFfCb300es%2BfWaXfEzYgetme5OP9%2BBrE/mXYHSu4Drmu0ZA6BzqHKN5hjyCOMnDtfP29ElbkrOhp20hUF91wbf4D3jAUrQsV5gk6OugVmHx0dssEgcwJOn3u8ohjlSkcDTYvQu9rNo3w71e4CT0V3tH8mfiJ4L5Lo2g%2B6wNnakAKdi%2BCFPg4GXn0YXhewXjrAzS4mTGU4%2BMw9%2B5Qdhm%2BcMfEIgk9tgLUGTT4TY7K/cLUT3MyrpmwINZX4n7r5jp3Nbhehk%2BXwM/EsNePgCRcUfVhgPcv/cgo3/8XeKm%2BCKvdV6FG43qATPUZxPFRdNeMXjy2pA9FmKodEBsENlkjinaoweUZAV%2BnVMBe3UFNGiAqeGPZ17q83H9F/PznGMLdL%2Bc7UsAreq/vVzbFLEu9NEMSrfcvxFAmTE93Ybe%2Bg7xmLHM7yxTKH6MJ3v5bcGOqcBiz7R8cMzzv9vEA%2BBRGUv1bQQ8yoH0jjSsNTdxb3ESR5LonsLS2a8yOeBWV3zQEhDw9gKRz2PtUrle2Y5Pih%2BU5xXccAFn82FTHOkhOmQLbrQZcPsihbqLxgQzIQN5UHncZ/31Rt7044vV%2BsKJN6CXmj2kH8EseCoAGOBFVxaET4SYQjlmjisz9EdPbKA6Pd%2BkqJT9aQml1G2LHNemihVu60KYprjvuU=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T164746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW53QNDMABB/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=315550f394006466a8bb27741efc9857b878c398b015988fcb6b8ef394d81db1"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 h-full w-full mx-auto object-cover"
            />
            <Image
              src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/deb926963bc95ed7034c0c98290f35ad?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFAruwnaW4rgvhIbtNTVtgvPGpwy%2BKlC9h12xtcTQ8%2B0AiAy1EenhRwe9dyQjB/GmGJ3GdTvIBvf5BoXDnSBdkfU3CrNBAhhEAAaDDczOTkzOTE3MzgxOSIMm8tVFjo8/%2BNNHCviKqoE6wdCj3u02qYl2afSh8ok32mwBEZ50hgz9J3fPvGs/dL7sNTb2B%2BMNP/60p58Y4DOZ2EP%2Bwe8ihYtEGOeVLRLK7c1ygl3lqqN2BzuI2p7yUr34UFSFtLaJFK6I6b2zF6Ifkrr6TqwWrPa8sTxy//BoGFXQcxR4vEUilsi3Ras4FTLcW2OjxdoSOzacmuqJfAeoB0WoirOSok1N5I%2BX0DAN0VGg2bn0CH2LvpPisbXbXP%2B/qM9QPdnv7xuo7NcpC2EKtoktnSfAd5nij%2BdtEBTNjiwLHmt3UW5T%2Bhr4D9ZHgET%2BbsnvK5kjjlzfpYt7zDnSSolio4dbexu97MNq4DE4YZdq%2BJ64BYyaQr9174DeT7hNuGHnEk4POPz7DLuowhudfoyrMnqXfZRmOoKcn4kF9IrNUoWmZiJcWzmEdRzkKlvHvqhEtLpbuWMiYiv7RyBzIxn7KkhLNcWkIQYAZoCns1pv44sEkLaZ/vvnHRDLWAy5gKPwkYKqpo9y/l1iC0KYcgrW4YQ3o/K7aaU6PVT7mIny8ZCiZSnv7GU7C7kDpKpi%2BafFOxqYO/saL7i08Xg2ZlQo9YW7umr2oYCpk9yqxdDO6EtFzc7QBSjsTU7SMwxcj8X2ZGs/0sWRDHJwr%2Bzumnfd25VYjhkWhSQZBu2lMXIZuQ4O0jNbGyK4gXvAIrWF8WWCKkGOq8XX1tLoTXhIEflO11KCvBE6P6jIihM%2BD/y%2BPwJcdXESzkwjuvltwY6qAHNw3UL3FVTdv0VUAiyxnYW0x0ingcnN3%2B/dEeygqAckIRIqQB02WaL7o0MPDmPeBu3XUuzRzd1LL%2B%2BGwZzKiIRuo%2BIwKN3VZCp%2BL/Icxs2FNMTCpWAGMYzv4dkYK3q6Jfc38pRpqczo6DtQUNpunswme66XaPYrL5fXXEhP4EBGxt6dizyurDH7zVyiwL4RzZhwJYxjB91NBvmSWlzdnl4k5p31kMEUuA=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T164708Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5U6HC24GH/20240929/us-west-2/s3/aws4_request&X-Amz-Signature=9927006111c48d23470e77787479f2b46c5777863783d2881905d4c55a0d840e"
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/a80caed6e304225d11fa078f80997f7d?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ%2BNYzN3cylMxDnxWFatS5vkejEK4UuhMBDE56EYcPtwIhAMdl0GOs21rnPX7pgn0nyUKnV0zm1oacQCsGlFqTlG/jKtYECJL//////////wEQABoMNzM5OTM5MTczODE5IgxmnKljhAY28IhMvGoqqgSjfRW/FLg1LGAZ3V1nlyXq%2Bj3OPrHtqse26nqtxJH7lP/Dil%2ByE34hReYH2mWencVQ9qhOG42bQ2NOfZ3zbhXPF0uNGL8pV6ycAqehPvNiC0U6bEL%2BnCVB6NTY9iumTTeqOsPIpI8G8sXW3QtM/StHU/y5/uEROIdGpZG8sOa80yQMx9r0v4TVGO7iAnbybx1sP1MI3ecq3OiKoXSpQ%2BebcPX1N1RDaTecCgSJj2/2nnQIvuOHaa/uSg%2BjrsULBVGa2ahb0Rbarxc1YoOAoCAGw4DRfxF9DbO8Z0uM2h2mpUdnBI/2gOg6zycbgqxd/VIgOPofBNwipt2KZ/4x45cHfn9oPTN4OLdGKg%2BM9qV5NX5XdgwIe2nxVrWdtJyj40bmZid1upOX2xOq/GnAoEnrarabbinghVfE1YbD1tasxnfAU1zYHPnTmD40E2xaPNbZu9foHeGrpbOFvPbrWLAipw4xuv0wRjLdIh7x7lNQ/ITxfwPMMvYNMKb5V2AV3pBn/hVQaov9ze51k3YuXXYWbMpVvwWzdX8cDIRvzNwWMfgS56Dnb5326twPBVa37lrFDFZIpGqdM%2Bs7z3LStPXwgVwEYrGAvAflAgkQDexCOVrPxsRXsxFVijKejmH/8vKKdEpJl%2BQFqahQ9VQzLcdE5v1U%2BoV6oc8gUyn8f5cW35Yu2n/k4i75fBnGKnPXMaqA1y61IWwlkJOxi3xOlYkBKv5z0KaUNSmLEjCyxvC3BjqmATrcKEFMn23TGP/RqJkW/tFtJjN8Vbto3lnA%2BpXhwNe5fbJHAk3/bJHNmu7AjL8yfxu1CXcsig/gXveGu5hbqJTm/sq9U/8Zl3x13ZMUjZ9VYTKbHZqaHTlcb0SqT%2BIHtEBDFahFwgIuP9T8SStSDxcdGXlGLAnoI9x6o9/ZJ6u/kN%2Bis/2NkoM4kJEMYzrlk7XldWmBdRxLqGdp1y4kWqpGWwKdhgY=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T163801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW54TN2UX72/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=0b33e5a8d27707b346334192fb4532548bf8db247e917cbd7cbf1074e5110795"
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/25c1ccf101e71bd55679aef297bc3710?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBWwIq5HgFjjKJBM5SyxOZs8A8Be51mrRpQ4G4vYDSxUAiEAiDtG6OPpasYSm63qTt33OMogVEnZf3DfqGljV8O%2Br%2Boq1gQIkf//////////ARAAGgw3Mzk5MzkxNzM4MTkiDMy5BDcGBSftBTwAhCqqBOnH/EhPPd9Uxu%2BSCt2KVXafe9Bev3GPo4/V1yHCWXrlD/Uob4O5F5aYt0/E170nOsW3M73UtS866M/yEwdedOBcs7OahnAkLgdwthhveg9a6GzQR93TMIDCZavshswH2vSwInqT4spfPHwVo7eyBU%2BusaBo%2BRaNRxlza33gKUt4uZV/EemiSh8DT2ojvFD0dILfex9THo/KTAz9rXZyxJ4Xjk01DHyijXQjlDEhl%2Bmb0mz%2Bmdl378gerApqBYW40sNrhgSRNnfG/D7aU3L0BF2hQGc37iiD7H70OmaunPXL02Cd7csix3IJQYl11n%2BVvI6bwTFsa2NOMF6La49BNGK9ufQUdXtX3K8ktJFdsO2wzZKrAFG0Y9PKRDP/pbtm3s0oOo0kTJ2DWVIcONTHzeXC7B%2BWekLkCNPhYqvqIufN0cX%2BOdXd/Lfs4yOJJ7CKQR0iuCIRtZszwrFTHeryYCvxImIGn1xwIaIpytmiMn9RwUvUziyQVbcBXUo7aWxc7fLVGIscZOvlyDXoENqiYfNzL6PDk7qZQHvLvqEkUX534gSyL4d8sOrZ2ilEe0v3e3iRaXSaEWkNVtvDuxT5a0yXVEV3zEOIlUMKpuc7VGJLQSXJRicr90iQhQz4Nak431OLkrP1ayEiW8ZXRlKwQQh7NKZzmno6tSahPlBv42xi3MFldM2KG6f3BUAsCDxcTMrHwy0idYhQ5TXIHyjhWyOiR1nAsZxZ9gUTMO7C8LcGOqcB/GzxFCKv6dsI53V3Qu64bCxeNtMbat3LhBZVqfoBG3o7CsF5PmOmgxgGPFbmrzu3a/scIEcXCb/dehJ2j4W%2B7qvhs/XjBZs0TqgugFiijzU/9ahOxvOTMI5B0VI5LUrJkYdIjAfNp6z5hDSrdLRgdunlrQ1YtL1kRLoVmaILwtYXHlSOD8bFq0Kk0ga8y23RojXF/hiswKnS4z40nr1xhliZgflNCfg=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T163808Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW57ZBPU67O/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=04f2d7f56ae41595bfc3911fe1d61c4b8dafd84036fc99eb38ebd6778a5a47ef"
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
            src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/c54940510e7ce810f6ef3fd3873c181e?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBWwIq5HgFjjKJBM5SyxOZs8A8Be51mrRpQ4G4vYDSxUAiEAiDtG6OPpasYSm63qTt33OMogVEnZf3DfqGljV8O%2Br%2Boq1gQIkf//////////ARAAGgw3Mzk5MzkxNzM4MTkiDMy5BDcGBSftBTwAhCqqBOnH/EhPPd9Uxu%2BSCt2KVXafe9Bev3GPo4/V1yHCWXrlD/Uob4O5F5aYt0/E170nOsW3M73UtS866M/yEwdedOBcs7OahnAkLgdwthhveg9a6GzQR93TMIDCZavshswH2vSwInqT4spfPHwVo7eyBU%2BusaBo%2BRaNRxlza33gKUt4uZV/EemiSh8DT2ojvFD0dILfex9THo/KTAz9rXZyxJ4Xjk01DHyijXQjlDEhl%2Bmb0mz%2Bmdl378gerApqBYW40sNrhgSRNnfG/D7aU3L0BF2hQGc37iiD7H70OmaunPXL02Cd7csix3IJQYl11n%2BVvI6bwTFsa2NOMF6La49BNGK9ufQUdXtX3K8ktJFdsO2wzZKrAFG0Y9PKRDP/pbtm3s0oOo0kTJ2DWVIcONTHzeXC7B%2BWekLkCNPhYqvqIufN0cX%2BOdXd/Lfs4yOJJ7CKQR0iuCIRtZszwrFTHeryYCvxImIGn1xwIaIpytmiMn9RwUvUziyQVbcBXUo7aWxc7fLVGIscZOvlyDXoENqiYfNzL6PDk7qZQHvLvqEkUX534gSyL4d8sOrZ2ilEe0v3e3iRaXSaEWkNVtvDuxT5a0yXVEV3zEOIlUMKpuc7VGJLQSXJRicr90iQhQz4Nak431OLkrP1ayEiW8ZXRlKwQQh7NKZzmno6tSahPlBv42xi3MFldM2KG6f3BUAsCDxcTMrHwy0idYhQ5TXIHyjhWyOiR1nAsZxZ9gUTMO7C8LcGOqcB/GzxFCKv6dsI53V3Qu64bCxeNtMbat3LhBZVqfoBG3o7CsF5PmOmgxgGPFbmrzu3a/scIEcXCb/dehJ2j4W%2B7qvhs/XjBZs0TqgugFiijzU/9ahOxvOTMI5B0VI5LUrJkYdIjAfNp6z5hDSrdLRgdunlrQ1YtL1kRLoVmaILwtYXHlSOD8bFq0Kk0ga8y23RojXF/hiswKnS4z40nr1xhliZgflNCfg=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241001T163814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW57ZBPU67O/20241001/us-west-2/s3/aws4_request&X-Amz-Signature=40837783e661ccef9d5f9489524277af23cce371afdd96f880e7a1c7b4c4f6eb"
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
