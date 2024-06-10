"use client";

import Typewriter from "typewriter-effect";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="flex flex-col gap-10 py-8 md:py-10">
      <div className="flex flex-col items-center gap-4 justify-center">
        <h1 className={title()}>讓我們幫你&nbsp;</h1>
        <Typewriter
          options={{
            strings: [
              "爭取權益",
              "開放外食",
              "建立意見箱",
              "推動多元活動",
              "財政透明化",
              "實踐學生自治",
              "強化班代監督",
            ],
            wrapperClassName: title({ size: "lg", color: "violet" }),
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex flex-row gap-2 items-end justify-center">
        <Link isExternal href={siteConfig.links.instagram}>
          <Button color="primary" size="lg">
            追蹤最新消息
          </Button>
        </Link>
        <Button variant="bordered">了解更多</Button>
      </div>
      <div className="flex flex-col items-start justify-start py-2">
        <h1 className="text-3xl font-semibold">政見主軸</h1>
        <Accordion>
          <AccordionItem key="1" aria-label="學生權益" title="學生權益">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="會員參與">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="資訊透明">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold">候選人簡介</h1>
        <Accordion>
          <AccordionItem key="1" aria-label="學生權益" title="會長">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="副會長">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold">學生自治</h1>
      </div>

      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-3xl font-semibold">最後</h1>
        <p>
          無論你內心中決定的是哪組候選人，請你一定要在投票日當天，投下你寶貴的一票，實踐你的權利，也是推動學生自治的重要一環！
        </p>
      </div>
    </section>
  );
}
