import HomeIcon from "@mui/icons-material/Home";
import { Article } from "@/types/responses";
export const drawerItems = [
  {
    title: "Home",
    href: '/',
    icon: <HomeIcon />,
  },
];

export const newsCategories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export const articles: Article[] = [
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Court orders Theranos founder Elizabeth Holmes to go to prison - BBC",
    description:
      "Holmes was also ordered to pay $452m to the victims of the blood testing scandal.",
    url: "https://www.bbc.com/news/world-us-canada-65620371",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1176F/production/_129753517_gettyimages-1442569992.jpg",
    publishedAt: "2023-05-18T00:16:44Z",
    content:
      "A court has ruled that disgraced Theranos founder Elizabeth Holmes must report to prison on 30 May, while she appeals against her fraud conviction. \r\nHolmes, 39, had asked a judge to remain free whil… [+2435 chars]",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "Cara Tabachnick",
    title:
      "Bryan Kohberger, suspect in Idaho college student murders, indicted by grand jury - CBS News",
    description:
      "The indictment allows prosecutors to bypass a week-long preliminary hearing that was scheduled to start on June 26.",
    url: "https://www.cbsnews.com/news/idaho-college-murders-bryan-kohberger-indicted-by-grand-jury/",
    urlToImage:
      "https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/13/3a132d1d-2ffd-4a2c-a44b-9584f9bbb877/thumbnail/1200x630/dd80590b384aa8e42f80ab83b7f860e7/ap23012647756947.jpg",
    publishedAt: "2023-05-17T23:52:00Z",
    content:
      "Bryan Kohberger, the 28-year-old suspect in the stabbing murders of four Idaho college students in November last year, has been indicted by a grand jury.\r\nHe faces the same charges – four counts of f… [+1415 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Mariana Alfaro",
    title:
      "House votes to refer resolution to expel George Santos to Ethics Committee - The Washington Post",
    description:
      "The matter is now in the hands of the House Ethics Committee, which has been investigating Santos since March.",
    url: "https://www.washingtonpost.com/politics/2023/05/17/santos-expel-ethics/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/54IYSJ2BT45IRVWHQOZ7OGUCTY_size-normalized.jpg&w=1440",
    publishedAt: "2023-05-17T23:32:56Z",
    content:
      "Comment on this story\r\nComment\r\nThe House on Wednesday voted largely along party lines to refer a resolution to expel Rep. George Santos (R-N.Y.) to the Ethics Committee.\r\nThe resolution to expel the… [+6738 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Francesca Ebel",
    title:
      "Russian scientists arrested for treason at lab for hypersonic missiles - The Washington Post",
    description:
      "In an open letter published on Monday, Russian scientists protested the academics’ arrest,",
    url: "https://www.washingtonpost.com/world/2023/05/17/russia-scientists-treason-hypersonic/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DKDC73BIUAVONX63F77BMWUWV4.JPG&w=1440",
    publishedAt: "2023-05-17T23:25:00Z",
    content:
      "Comment on this story\r\nComment\r\nAs wartime Russia experiences a surge in treason cases, the arrests for high treason of three Russian academics who work on hypersonic missile technology on the same f… [+6833 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Max Foster",
    title:
      "Exclusive: Prince Harry and Meghan’s security detail says car chase ‘could have been fatal’ - CNN",
    description:
      "A member of the security team protecting Prince Harry and Meghan has described a “chaotic” chase in New York involving paparazzi photographers on Tuesday, saying it could have ended with fatalities.",
    url: "https://www.cnn.com/2023/05/17/americas/harry-meghan-car-crash-security-details-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230517120213-02-harry-meghan-ny-event-0516-restricted.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-05-17T23:16:00Z",
    content:
      "A member of the security team protecting Prince Harry and Meghan has described a chaotic chase in New York involving paparazzi photographers on Tuesday, saying it could have ended with fatalities.\r\nS… [+2577 chars]",
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: "",
    title:
      "Celtics vs. Heat live stream, TV channel, how to watch Game 1 online, series schedule, tip times, odds - CBS Sports",
    description:
      "The two teams will meet in the Eastern Conference finals for the third time in four seasons",
    url: "https://www.cbssports.com/nba/news/celtics-vs-heat-live-stream-tv-channel-how-to-watch-game-1-online-series-schedule-tip-times-odds/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2023/05/16/672acefc-8b34-410f-b28e-7ec12e2174f5/thumbnail/1200x675/cc879ac57d61f1d2d2a2bc5a737cc4d2/jimmy-jaylen-getty.png",
    publishedAt: "2023-05-17T23:10:00Z",
    content:
      "After all the drama and intrigue of this season, we've wound up right back in the same place in the East: the Boston Celtics against the Miami Heat in the Eastern Conference finals with a trip to the… [+2695 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: null,
    title:
      "Biden, McCarthy push forward towards deal on US debt ceiling - Reuters",
    description:
      "President Joe Biden and top U.S. congressional Republican Kevin McCarthy on Wednesday underscored their determination to reach a deal soon to raise the federal government's $31.4 trillion <a href=\"/world/us/washington-creeps-toward-debt-catastrophe-again-2023…",
    url: "https://www.reuters.com/markets/us/biden-continue-debt-limit-talks-amid-g7-travel-white-house-spokeswoman-says-2023-05-17/",
    urlToImage:
      "https://www.reuters.com/resizer/MogXGZBHIanbop8SdUn00tW8Ric=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KWXSCPKXL5ORBII6IVNYYF7LFA.jpg",
    publishedAt: "2023-05-17T22:42:00Z",
    content:
      "WASHINGTON, May 17 (Reuters) - President Joe Biden and top U.S. congressional Republican Kevin McCarthy on Wednesday underscored their determination to reach a deal soon to raise the federal governme… [+4850 chars]",
  },
  {
    source: {
      id: null,
      name: "Daily Mail",
    },
    author: "Ashleigh Gray",
    title:
      "Blake Lively flashes her tummy three months postpartum as she films It Ends With Us - Daily Mail",
    description:
      "Blake Lively was spotted filming on the set of her new movie It Ends With Us on Wednesday in New York City. The 35-year-old longtime actress flashed a hint of her taut tummy a blue crop top.",
    url: "https://www.dailymail.co.uk/tvshowbiz/article-12095893/Blake-Lively-flashes-tummy-three-months-postpartum-films-Ends-Us.html",
    urlToImage:
      "https://i.dailymail.co.uk/1s/2023/05/18/00/71112701-0-image-a-5_1684364575169.jpg",
    publishedAt: "2023-05-17T22:09:16Z",
    content:
      "Blake Lively was spotted filming on the set of her new movie It Ends With Us on Wednesday in New York City.\r\nThe 35-year-old longtime actress flashed a hint of her taut tummy a blue crop top worn und… [+3341 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: null,
    title:
      "Ukraine reports new advances near eastern city of Bakhmut - Reuters",
    description:
      "Ukraine's military said it had made new advances on Wednesday in heavy fighting near the eastern city of Bakhmut, and that Russia was continuing to send in new units including paratroopers.",
    url: "https://www.reuters.com/world/europe/ukraine-reports-new-advances-near-eastern-city-bakhmut-2023-05-17/",
    urlToImage:
      "https://www.reuters.com/resizer/hhjRIQSIyFIRYkRrnufUdAWM3hM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VABHSLMPZFNQDLS7IXAJ6S4OJU.jpg",
    publishedAt: "2023-05-17T21:59:00Z",
    content:
      "KYIV, May 17 (Reuters) - Ukraine's military said it had made new advances on Wednesday in heavy fighting near the eastern city of Bakhmut, and that Russia was continuing to send in new units includin… [+2449 chars]",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Brett Tingley",
    title: "Axiom Space Ax-2 private spaceflight: Live updates - Space.com",
    description:
      "Find out what's going on with Axiom Space's private Ax-2 mission to the International Space Station.",
    url: "https://www.space.com/news/live/axiom-space-missions-updates",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/rFaahfcnurdNx8uhMkBxjT-1200-80.png",
    publishedAt: "2023-05-17T21:48:11Z",
    content:
      "2023-05-17T21:48:11.652ZWhat to know about Axiom Space's 2nd private mission to the ISS\r\nAxiom Space is still aiming to launch its Ax-2 mission with SpaceX on Sunday (May 21) from Kennedy Space Cente… [+2484 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Niamh Kennedy",
    title:
      "‘Largest underwater scanning project in history’ gives never-before-seen view of Titanic - CNN",
    description:
      "The mysterious 1912 sinking of the luxury passenger liner, the Titanic, has long served as a source of fascination for many.",
    url: "https://www.cnn.com/travel/article/titanic-digital-twin-underwater-scanning-intl-scli-scn/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230517111211-01-titanic-digital-scan.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-05-17T21:36:00Z",
    content:
      "Editors Note: Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nThe mysterious 1912 sinking of the luxur… [+2834 chars]",
  },
  {
    source: {
      id: "espn",
      name: "ESPN",
    },
    author: "Rob Dawson",
    title:
      "Manchester City dismantle Real Madrid to reach Champions League final - ESPN - ESPN",
    description:
      "Man City cruise through to the Champions League final after a masterclass against reigning champions Real Madrid.",
    url: "https://www.espn.com/soccer/uefa-champions-league/story/4950494/manchester-city-dismantle-real-madrid-to-reach-champions-league-final",
    urlToImage:
      "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0517%2Fr1174476_1296x729_16%2D9.jpg",
    publishedAt: "2023-05-17T21:15:00Z",
    content:
      "MANCHESTER, England -- Manchester City dismantled Real Madrid4-0 at the Etihad Stadium to book their place in the Champions League final and remain on course for the treble. The reigning European cha… [+7645 chars]",
  },
  {
    source: {
      id: null,
      name: "Press Herald",
    },
    author: "Eric Russell",
    title:
      "Maine CDC reports death from exposure to rare tick-borne Powassan virus - Press Herald",
    description:
      "The Sagadahoc County resident is the first Mainer to contract the disease in 2023.",
    url: "http://www.pressherald.com/2023/05/17/maine-cdc-reports-death-from-exposure-to-tickborne-powassan-virus/",
    urlToImage:
      "https://multifiles.pressherald.com/uploads/sites/10/2020/11/climate-consequence_005-1024x730.jpg",
    publishedAt: "2023-05-17T20:59:52Z",
    content:
      "Maine CDC reports death from exposure to rare tick-borne Powassan virus\r\nThe Sagadahoc County resident is the first Mainer to contract the disease in 2023.\r\nA Sagadahoc County resident has died from … [+2968 chars]",
  },
  {
    source: {
      id: null,
      name: "The Athletic",
    },
    author: "The Athletic Staff, Nicole Auerbach",
    title:
      "ACC commissioner Jim Phillips on realignment rumors: ‘We’re all in this together’ - The Athletic",
    description:
      "Phillips said he encourages universities to come to the ACC headquarters to examine the conference's grant of rights.",
    url: "https://theathletic.com/4528294/2023/05/17/acc-commissioner-jim-phillips-realignment/",
    urlToImage:
      "https://cdn.theathletic.com/app/uploads/2023/05/17115404/USATSI_18721373-1024x683.jpg",
    publishedAt: "2023-05-17T20:26:32Z",
    content:
      "ACC commissioner Jim Phillips addressed the leagues future following the conclusion of the leagues spring meetings Wednesday. What Ive been told (by athletic directors and presidents) is that were al… [+4375 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Caitlin McFall",
    title:
      "UK, Germany pressure US to decide on F-16 fighter jets for Ukraine - Fox News",
    description:
      "Leaders from the UK and Germany said the US needs to decide on whether to allow the supply of F-16 warplanes to Ukraine as an international coalition forms.",
    url: "https://www.foxnews.com/world/uk-germany-pressure-us-decide-f-16-fighter-jets-ukraine",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/AP23137466642859.jpg",
    publishedAt: "2023-05-17T19:28:00Z",
    content:
      "Leaders from the United Kingdom and Germany on Wednesday said the U.S. needs to make a decision on warplanes for Ukraine as the war with Russia drags on.\r\nWhen pressed by reporters on why top NATO al… [+2564 chars]",
  },
  {
    source: {
      id: null,
      name: "Neurosciencenews.com",
    },
    author: "Neuroscience News",
    title:
      "Epstein-Barr Virus Antibodies Linked to Multiple Sclerosis Progression - Neuroscience News",
    description:
      "Researchers have discovered a new link between the Epstein-Barr virus (EBV) and the progression of multiple sclerosis (MS).",
    url: "https://neurosciencenews.com/ms-progression-epstein-barr-23265/",
    urlToImage:
      "https://neurosciencenews.com/files/2023/05/epstein-barr-ms-neurosinces.jpg",
    publishedAt: "2023-05-17T19:23:25Z",
    content:
      "Summary: Researchers have discovered a new link between the Epstein-Barr virus (EBV) and the progression of multiple sclerosis (MS).\r\nTheir study revealed that certain antibodies, originally aimed at… [+6410 chars]",
  },
  {
    source: {
      id: "associated-press",
      name: "Associated Press",
    },
    author: "Nick Perry",
    title:
      "Hopes for historic Pacific visit dashed after Biden cancels trip to Papua New Guinea - The Associated Press",
    description:
      "WELLINGTON, New Zealand (AP) — Papua New Guinea had declared next Monday a public holiday in anticipation of an historic visit by U.S. President Joe Biden and other leaders from the region. Police were tightening security, billboards were going up, and people…",
    url: "https://apnews.com/article/biden-pacific-debt-limit-papua-new-guinea-434b263a1bcc4320a18c08ba6bf5828c",
    urlToImage:
      "https://storage.googleapis.com/afs-prod/media/c1109a1d7a2644ceb88878bcc9b51dd3/3000.webp",
    publishedAt: "2023-05-17T19:07:30Z",
    content:
      "WELLINGTON, New Zealand (AP) Papua New Guinea had declared next Monday a public holiday in anticipation of an historic visit by U.S. President Joe Biden and other leaders from the region.\r\nPolice wer… [+4137 chars]",
  },
  {
    source: {
      id: null,
      name: "Variety",
    },
    author: "Kate Aurthur",
    title:
      "Inside How ‘Vanderpump Rules’ Captured the #Scandoval (EXCLUSIVE) - Variety",
    description:
      "Here’s how it goes: On March 1, “Vanderpump Rules” star Tom Sandoval and his aptly named band, Tom Sandoval & The Most Extras, were performing at TomTom, Lisa Vanderpump’s West Hollywood restau…",
    url: "https://variety.com/2023/tv/news/vanderpump-rules-filming-season-10-finale-raquel-leviss-scheana-shay-1235611925/",
    urlToImage:
      "https://variety.com/wp-content/uploads/2023/05/Scandoval-Vanderpump-Rules.jpg?w=1000&h=563&crop=1",
    publishedAt: "2023-05-17T19:00:41Z",
    content:
      "Here’s how it goes: On March 1, “Vanderpump Rules” star Tom Sandoval and his aptly named band, Tom Sandoval &amp; The Most Extras, were performing at TomTom, Lisa Vanderpump’s West Hollywood restaura… [+29528 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Jennifer Hansler,Kylie Atwood",
    title:
      "State Department will allow House Foreign Affairs Chairman to view Afghanistan dissent cable - CNN",
    description:
      "The State Department will allow the top two members of the House Foreign Affairs Committee to view a dissent cable on the withdrawal from Afghanistan at the State Department – a significant concession to Republican Chairman Michael McCaul ahead of a planned r…",
    url: "https://www.cnn.com/2023/05/17/politics/blinken-mccaul-dissent-memo/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230421090343-antony-blinken-230404-file.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-05-17T18:54:00Z",
    content:
      "The State Department will allow the top two members of the House Foreign Affairs Committee to view a dissent cable on the withdrawal from Afghanistan at the State Department a significant concession … [+2476 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "Astronomers identify volcano-covered planet that could have water on its surface | Engadget - Engadget",
    description:
      "The boringly named LP 791-18 d is located about 90 light-years from Earth in the Crater constellation..",
    url: "https://www.engadget.com/astronomers-identify-volcano-covered-planet-that-could-have-water-on-its-surface-185050937.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/R1oErsYGazrHLCD7Sf7_cA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/cf627020-f4e0-11ed-bdbf-26f68a0b4052.cf.jpg",
    publishedAt: "2023-05-17T18:51:45Z",
    content:
      "Astronomers have found a planet they believe is blanketed by active volcanoes. In a study published Tuesday in the journal \r\nNature\r\n, a multi-national team of scientists said they discovered an Eart… [+2511 chars]",
  },
];
