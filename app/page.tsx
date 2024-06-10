"use client";

import Typewriter from "typewriter-effect";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/avatar";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
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
        <Link isExternal href={siteConfig.links.form}>
          <Button variant="bordered">提供建議</Button>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start py-2">
        <h1 className="text-3xl font-semibold">政見主軸</h1>
        <Accordion>
          <AccordionItem key="1" aria-label="學生權益" title="學生權益">
            <ul className="list-decimal list-inside">
              <li>增加符合學生需求的福利社品項（優先推動非熟食類）</li>
              <li>推動定期訂購外食（交通分流、安心店家清單）</li>
              <li>
                提供可追縱具體回應進度的意見箱（匿名／具名），避免意見提出後石沉大海，才能讓促進公共利益的政策實施。
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="會員參與">
            <ul className="list-decimal list-inside">
              <li>
                爭取推動多元活動（例如：歲末／修業晚會／班際競賽／互動性講座）
              </li>
              <li>
                強化班級代表會議的監督性（定期召開）、並於學期初公告預定實施的政策以便盡早收集建議、研議學生議會的可行性
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="資訊透明">
            <ul className="list-decimal list-inside">
              <li>逐步推動財務透明化與公布經費收支</li>
              <li>
                各種會議前後提供會議通知與摘要（校務、班級代表、午餐有約等）
              </li>
              <li>
                設立學生會網站以提供政見所述之意見箱、重要訊息通知（校內活動、社團等）、學生自治重要規範（例：組織章程）
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold">候選人簡介</h1>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="會長"
            startContent={
              <Avatar
                isBordered
                radius="lg"
                // src="https://scontent.xx.fbcdn.net/v/t1.15752-9/441428398_1549224269142175_686444303919174258_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cvO2lpudup8Q7kNvgFMNX0C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHjPEzg4kJFdOdmL8mi63khOigyBOpneHJ4qy9L7uEO9w&oe=668E96D8"
              />
            }
            subtitle="會長參選人"
            title="王怡人"
          >
            經歷：
            <ul className="list-decimal list-inside">
              <li>高雄市MQ達人優勝</li>
              <li>高雄學生民主聯盟成員</li>
              <li>任職高一上下學期班長及班代</li>
              <li>獨居長輩關懷粉專創辦者</li>
              <li>114學生會儲備幹部行政（會長職位）</li>
              <li>頒獎組組員</li>
            </ul>
            <br />
            研習活動：
            <ul className="list-decimal list-inside">
              <li>青年局青愛大港活動（學生權益、學生自治）</li>
              <li>環你一個好地球</li>
              <li>ASEP 亞洲學生交流計劃</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="副會長"
            startContent={<Avatar isBordered radius="lg" src="" />}
            subtitle="副會長參選人"
            title="陳柏菘"
          >
            經歷：
            <ul className="list-decimal list-inside">
              <li>114 屆學生會儲備幹部</li>
              <li>高一上下學期學生代表</li>
              <li>
                曾參與開發遠距教學整合平臺，並於 g0v
                零時小學校專案孵化競賽獲獎，
                <Link
                  isExternal
                  href="https://news.ltn.com.tw/news/life/breakingnews/4208626"
                >
                  獲自由時報刊出
                </Link>
                。
              </li>
              <li>積極參與公共事務，關心學生自治與立法脈絡。</li>
              <li>
                運用政府開放資料，繪製 COVID-19快篩試劑販售
                <Link href="siongsng.github.io/rapid-antigen-test-taiwan-map/">
                  地圖
                </Link>
                ，置於衛福部官網所整理的民間地圖，供大眾使用。
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold">學生自治</h1>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="學生權益"
            title="什麼是學生自治？"
          ></AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="參選動機"
          ></AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="運作理念"
          ></AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-3xl font-semibold">最後</h1>
        <p>
          無論你內心中決定的是哪組候選人，請你一定要在投票日當天，投下你寶貴的一票，實踐你的權利，也是推動學生自治的重要一環！
        </p>
      </div>

      <p className="text-center">競選網站持續更新中～</p>
    </section>
  );
}
