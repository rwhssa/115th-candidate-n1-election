"use client";

import Typewriter from "typewriter-effect";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/avatar";
import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";

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
      <div className="flex flex-col items-start justify-start gap-6 py-2">
        <h1 className="text-3xl font-semibold">政見主軸</h1>
        <div className="w-full">
          <h2 className="text-2xl">學生權益</h2>
          <Accordion defaultExpandedKeys="3" itemClasses={{ content: "p-0" }}>
            <AccordionItem key="1" title="增加福利社品項">
              <Policy description="增加符合學生需求的福利社品項（優先推動非熟食類）" />
            </AccordionItem>
            <AccordionItem key="2" title="推動定期訂購外食">
              {/* <Policy reason="我們希望能讓學生有更多元的飲食選擇" /> */}
              <Policy description="推動定期訂購外食（交通分流、安心店家清單）" />
            </AccordionItem>
            <AccordionItem key="3" title="建置可追蹤回應的意見箱">
              <Policy description="提供可追縱具體回應進度的意見箱（匿名／具名），避免意見提出後石沉大海，才能讓促進公共利益的政策實施。" />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full">
          <h2 className="text-2xl">會員參與</h2>
          <Accordion defaultExpandedKeys="2">
            <AccordionItem key="1" title="推動多元活動">
              <Policy method="爭取推動多元活動（例如：歲末／修業晚會／班際競賽／互動性講座）" />
            </AccordionItem>
            <AccordionItem key="2" title="強化班代大會監督性">
              <Policy
                method="定期召開班級代表會議並報告工作進展、提供即問即答時段、逐步推動預算審議制度、研議設立學生議會的可行性"
                reason="我們認為目前的班代大會對於學生會的制衡性較為不足，希冀能藉由強化監督性，以便讓學生會的施政更符合學生會員所需。"
              />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full">
          <h2 className="text-2xl">資訊透明</h2>
          <Accordion defaultExpandedKeys="1">
            <AccordionItem key="1" title="財務透明化">
              <Policy
                description="逐步推動財務透明化與公布經費收支"
                method="盤點學生會主要財務收支大方向後，每季度於學生會網站與 Instagram 公布經費收支。"
                reason="學生會員所繳納的會費是學生會運作的根基，也是各種活動舉辦的經費來源，會員更應有權利知道自己所繳納的會費用途，透過資訊透明化也有助於增加溝通成效。"
              />
            </AccordionItem>
            <AccordionItem key="2" title="提供會議摘要">
              <Policy description="各種會議前後提供會議通知與摘要（校務、班級代表、午餐有約等）" />
            </AccordionItem>
            <AccordionItem key="3" title="設立網站提供活動通知">
              <Policy description="設立學生會網站以提供政見所述之意見箱、重要訊息通知（校內活動、社團等）、學生自治重要規範（例：組織章程）" />
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold">候選人介紹</h1>
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
            <br />
            <span className="text-primary">#參選動機</span>
            <br />
            學生會是在校園中實踐學生自治非常重要的組織，透過參選副會長，我希冀除了能為學生爭取各項權益、舉辦活動外，更重要的是扮演建立學校與學生間的橋梁，讓學生會員們都能參與學生自治，讓大家的聲音被聽見🗣️，並實質做出改變，也讓大家的高中生增添風采。
            <br />
            <br />
            <span className="text-primary">#政見主軸</span>
            <br />
            我們的三大政見主軸聚焦在「學生權益、會員參與、資訊透明」，希冀能藉此讓各種聲音被聽見，並且做出最符合公共利益的決策，豐富大家的高中生活🤝。我們不開空頭支票，每項政見都經過嚴謹的討論與可行性分析，也邀請您到我們的競選網站上（哀居主頁連結）閱覽相關的實施計畫及制定緣由，未來在這裡也會持續發布政見說明的貼文。
            <br />
            <br />
            <span className="text-primary">#積極參與公共事務</span>
            <br />
            我平時會主動關注各項公共議題的進展與討論，除了透過媒體報導外，我會透過文獻或立法院的議事錄，實際研究議題背後的脈絡，了解各方不同立場的訴求，除了各種社會議題外，也包括藉由了解學生自治的發展歷程與議題的脈絡式討論，更能從中尋求出雙方的共識，以利決策進行。
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
          />
          <AccordionItem key="2" aria-label="Accordion 2" title="參選動機" />
          <AccordionItem key="3" aria-label="Accordion 3" title="運作理念" />
        </Accordion>
      </div>

      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-3xl font-semibold">最後</h1>
        <p>
          最後，感謝您閱讀到這裡，若您對我們的理念感興趣，請您投 1️⃣
          號候選人一票。
          <br />
          倘若有幸當選，我們將在未來一年的任期裡，盡最大努力為仁武高中的同學們服務，為大家發聲✨。
          <br />
          另外，無論你內心中決定的是哪組候選人，請你一定要在
          6/21（五），投下你寶貴的一票，實踐你的權利，也是推動學生自治的重要一環！
        </p>
      </div>

      <p className="text-center">競選網站持續更新中～</p>
    </section>
  );
}

function Policy(props: {
  description?: string;
  reason?: string;
  method?: string;
}) {
  return (
    <Tabs
      fullWidth
      defaultSelectedKey={props.reason ? "2" : "1"}
      variant="underlined"
    >
      <Tab key="1" title="政見簡述">
        {props.description || "持續更新中～"}
      </Tab>
      <Tab key="2" title="制定緣由">
        {props.reason || "持續更新中～"}
      </Tab>
      <Tab key="3" title="實施方式">
        {props.method || "持續更新中～"}
      </Tab>
    </Tabs>
  );
}
