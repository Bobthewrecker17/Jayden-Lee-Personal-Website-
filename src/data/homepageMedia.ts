import { assetPath } from "@/lib/assets";

export type HomepageMedia = {
  type: "image" | "video" | "document";
  src: string;
  alt: string;
  originalName: string;
  eventName: string;
};

export type HomepageActivity = {
  title: string;
  category: string;
  folder: string;
  href: string;
  description: string;
  media: HomepageMedia[];
};

const homepageActivitiesData: HomepageActivity[] = [
  {
    "title": "Friends in Serving Him",
    "category": "School & Faith",
    "folder": "FISH Club",
    "href": "/activities/school/friends-in-serving-him",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/01-bonding-img-7689.jpeg",
        "alt": "Friends in Serving Him media 1",
        "originalName": "Bonding/IMG_7689.jpeg",
        "eventName": "Bonding"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/02-bonding-img-7687.mov",
        "alt": "Friends in Serving Him media 2",
        "originalName": "Bonding/IMG_7687.MOV",
        "eventName": "Bonding"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/03-25-26-prayer-meeting-12-10-img-7507.mp4",
        "alt": "Friends in Serving Him media 3",
        "originalName": "25-26/Prayer Meeting 12-10/IMG_7507.mp4",
        "eventName": "Prayer Meeting 12-10"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/04-25-26-prayer-meeting-12-10-img-7508.jpg",
        "alt": "Friends in Serving Him media 4",
        "originalName": "25-26/Prayer Meeting 12-10/IMG_7508.heic",
        "eventName": "Prayer Meeting 12-10"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/05-25-26-prayer-meeting-12-10-img-7505.jpg",
        "alt": "Friends in Serving Him media 5",
        "originalName": "25-26/Prayer Meeting 12-10/IMG_7505.heic",
        "eventName": "Prayer Meeting 12-10"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/06-25-26-prayer-meeting-12-10-img-7506.jpg",
        "alt": "Friends in Serving Him media 6",
        "originalName": "25-26/Prayer Meeting 12-10/IMG_7506.heic",
        "eventName": "Prayer Meeting 12-10"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/07-25-26-prayer-meeting-12-10-img-7504.jpg",
        "alt": "Friends in Serving Him media 7",
        "originalName": "25-26/Prayer Meeting 12-10/IMG_7504.heic",
        "eventName": "Prayer Meeting 12-10"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/08-25-26-12-3-guest-speaker-img-0956-jpg.jpeg",
        "alt": "Friends in Serving Him media 8",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0956.JPG.jpeg",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/09-25-26-12-3-guest-speaker-img-0957-jpg.jpeg",
        "alt": "Friends in Serving Him media 9",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0957.JPG.jpeg",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/10-25-26-12-3-guest-speaker-img-0958-mov.mp4",
        "alt": "Friends in Serving Him media 10",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0958.MOV.mp4",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/11-25-26-12-3-guest-speaker-img-0959-jpg.jpeg",
        "alt": "Friends in Serving Him media 11",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0959.JPG.jpeg",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/12-25-26-12-3-guest-speaker-img-0960-jpg.jpeg",
        "alt": "Friends in Serving Him media 12",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0960.JPG.jpeg",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/13-25-26-12-3-guest-speaker-img-0962-mov.mp4",
        "alt": "Friends in Serving Him media 13",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0962.MOV.mp4",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/14-25-26-12-3-guest-speaker-img-0961-mov.mp4",
        "alt": "Friends in Serving Him media 14",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0961.MOV.mp4",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/15-25-26-12-3-guest-speaker-img-0968-jpg.jpeg",
        "alt": "Friends in Serving Him media 15",
        "originalName": "25-26/12-3 Guest Speaker /IMG_0968.JPG.jpeg",
        "eventName": "12-3 Guest Speaker "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/16-25-26-prayer-meeting-10-29-img-7281.mp4",
        "alt": "Friends in Serving Him media 16",
        "originalName": "25-26/Prayer Meeting 10-29/IMG_7281.mp4",
        "eventName": "Prayer Meeting 10-29"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/17-25-26-prayer-meeting-10-29-img-7283.jpg",
        "alt": "Friends in Serving Him media 17",
        "originalName": "25-26/Prayer Meeting 10-29/IMG_7283.heic",
        "eventName": "Prayer Meeting 10-29"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/18-25-26-prayer-meeting-10-29-img-7279.mp4",
        "alt": "Friends in Serving Him media 18",
        "originalName": "25-26/Prayer Meeting 10-29/IMG_7279.mp4",
        "eventName": "Prayer Meeting 10-29"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/19-25-26-prayer-meeting-10-29-img-7280.jpg",
        "alt": "Friends in Serving Him media 19",
        "originalName": "25-26/Prayer Meeting 10-29/IMG_7280.heic",
        "eventName": "Prayer Meeting 10-29"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/20-25-26-prayer-meeting-10-29-img-7278.mp4",
        "alt": "Friends in Serving Him media 20",
        "originalName": "25-26/Prayer Meeting 10-29/IMG_7278.mp4",
        "eventName": "Prayer Meeting 10-29"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/21-25-26-prayer-meeting-10-29-img-7277.jpg",
        "alt": "Friends in Serving Him media 21",
        "originalName": "25-26/Prayer Meeting 10-29/IMG_7277.HEIC",
        "eventName": "Prayer Meeting 10-29"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/22-25-26-10-15-guest-speaker-img-0239-mov.mp4",
        "alt": "Friends in Serving Him media 22",
        "originalName": "25-26/10-15 Guest Speaker/IMG_0239.MOV.mp4",
        "eventName": "10-15 Guest Speaker"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/23-25-26-10-15-guest-speaker-img-0240-mov.mp4",
        "alt": "Friends in Serving Him media 23",
        "originalName": "25-26/10-15 Guest Speaker/IMG_0240.MOV.mp4",
        "eventName": "10-15 Guest Speaker"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/24-25-26-10-15-guest-speaker-img-0236-mov.mp4",
        "alt": "Friends in Serving Him media 24",
        "originalName": "25-26/10-15 Guest Speaker/IMG_0236.MOV.mp4",
        "eventName": "10-15 Guest Speaker"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/25-25-26-10-15-guest-speaker-img-0237-jpg.jpeg",
        "alt": "Friends in Serving Him media 25",
        "originalName": "25-26/10-15 Guest Speaker/IMG_0237.JPG.jpeg",
        "eventName": "10-15 Guest Speaker"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/26-25-26-10-15-guest-speaker-img-0235-mov.mp4",
        "alt": "Friends in Serving Him media 26",
        "originalName": "25-26/10-15 Guest Speaker/IMG_0235.MOV.mp4",
        "eventName": "10-15 Guest Speaker"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/27-25-26-10-8-prayer-meeting-img-7023.mp4",
        "alt": "Friends in Serving Him media 27",
        "originalName": "25-26/10-8 Prayer Meeting/IMG_7023.mp4",
        "eventName": "10-8 Prayer Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/28-25-26-10-8-prayer-meeting-img-7022.jpg",
        "alt": "Friends in Serving Him media 28",
        "originalName": "25-26/10-8 Prayer Meeting/IMG_7022.heic",
        "eventName": "10-8 Prayer Meeting"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/29-25-26-10-8-prayer-meeting-img-7021.mp4",
        "alt": "Friends in Serving Him media 29",
        "originalName": "25-26/10-8 Prayer Meeting/IMG_7021.mp4",
        "eventName": "10-8 Prayer Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/30-25-26-10-8-prayer-meeting-img-7019.jpg",
        "alt": "Friends in Serving Him media 30",
        "originalName": "25-26/10-8 Prayer Meeting/IMG_7019.HEIC",
        "eventName": "10-8 Prayer Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/31-25-26-9-17-first-meeting-img-9279.jpg",
        "alt": "Friends in Serving Him media 31",
        "originalName": "25-26/9-17 First Meeting/IMG_9279.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/32-25-26-9-17-first-meeting-img-9283.jpg",
        "alt": "Friends in Serving Him media 32",
        "originalName": "25-26/9-17 First Meeting/IMG_9283.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/33-25-26-9-17-first-meeting-img-9284.jpg",
        "alt": "Friends in Serving Him media 33",
        "originalName": "25-26/9-17 First Meeting/IMG_9284.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/34-25-26-9-17-first-meeting-img-9278.jpg",
        "alt": "Friends in Serving Him media 34",
        "originalName": "25-26/9-17 First Meeting/IMG_9278.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/35-25-26-9-17-first-meeting-img-9280.jpg",
        "alt": "Friends in Serving Him media 35",
        "originalName": "25-26/9-17 First Meeting/IMG_9280.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/36-25-26-9-17-first-meeting-img-9286.jpg",
        "alt": "Friends in Serving Him media 36",
        "originalName": "25-26/9-17 First Meeting/IMG_9286.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/37-25-26-9-17-first-meeting-img-9287.jpg",
        "alt": "Friends in Serving Him media 37",
        "originalName": "25-26/9-17 First Meeting/IMG_9287.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/38-25-26-9-17-first-meeting-img-9281.jpg",
        "alt": "Friends in Serving Him media 38",
        "originalName": "25-26/9-17 First Meeting/IMG_9281.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/39-25-26-9-17-first-meeting-img-9282.jpg",
        "alt": "Friends in Serving Him media 39",
        "originalName": "25-26/9-17 First Meeting/IMG_9282.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/40-25-26-9-17-first-meeting-img-9285.jpg",
        "alt": "Friends in Serving Him media 40",
        "originalName": "25-26/9-17 First Meeting/IMG_9285.heic",
        "eventName": "9-17 First Meeting"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/41-25-26-9-12-club-fair-img-9871.jpg",
        "alt": "Friends in Serving Him media 41",
        "originalName": "25-26/9-12 Club Fair/IMG_9871.heic",
        "eventName": "9-12 Club Fair"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/42-25-26-9-12-club-fair-img-9878.mov",
        "alt": "Friends in Serving Him media 42",
        "originalName": "25-26/9-12 Club Fair/IMG_9878.MOV",
        "eventName": "9-12 Club Fair"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/43-24-25-fish-club-meeting-4-29-q-a-img-5513.jpg",
        "alt": "Friends in Serving Him media 43",
        "originalName": "24-25/FISH Club Meeting 4-29 Q&A/IMG_5513.jpg",
        "eventName": "FISH Club Meeting 4-29 Q&A"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/44-24-25-fish-club-meeting-4-29-q-a-img-5512.mov",
        "alt": "Friends in Serving Him media 44",
        "originalName": "24-25/FISH Club Meeting 4-29 Q&A/IMG_5512.MOV",
        "eventName": "FISH Club Meeting 4-29 Q&A"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/45-24-25-fish-club-meeting-4-29-q-a-img-5511.mov",
        "alt": "Friends in Serving Him media 45",
        "originalName": "24-25/FISH Club Meeting 4-29 Q&A/IMG_5511.MOV",
        "eventName": "FISH Club Meeting 4-29 Q&A"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/46-24-25-fish-club-meeting-4-29-q-a-img-5510.mov",
        "alt": "Friends in Serving Him media 46",
        "originalName": "24-25/FISH Club Meeting 4-29 Q&A/IMG_5510.MOV",
        "eventName": "FISH Club Meeting 4-29 Q&A"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/47-24-25-fish-club-meeting-4-29-q-a-img-5508.jpg",
        "alt": "Friends in Serving Him media 47",
        "originalName": "24-25/FISH Club Meeting 4-29 Q&A/IMG_5508.JPG",
        "eventName": "FISH Club Meeting 4-29 Q&A"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/48-24-25-fish-club-meeting-4-29-q-a-img-5509.jpg",
        "alt": "Friends in Serving Him media 48",
        "originalName": "24-25/FISH Club Meeting 4-29 Q&A/IMG_5509.JPG",
        "eventName": "FISH Club Meeting 4-29 Q&A"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/49-24-25-fish-club-meeting-4-22-q-a-img-5198.mov",
        "alt": "Friends in Serving Him media 49",
        "originalName": "24-25/FISH Club Meeting 4-22 Q&A/IMG_5198.mov",
        "eventName": "FISH Club Meeting 4-22 Q&A"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/50-24-25-fish-club-meeting-4-22-q-a-img-5194.jpg",
        "alt": "Friends in Serving Him media 50",
        "originalName": "24-25/FISH Club Meeting 4-22 Q&A/IMG_5194.JPG",
        "eventName": "FISH Club Meeting 4-22 Q&A"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/51-24-25-fish-club-meeting-4-22-q-a-img-5196.jpg",
        "alt": "Friends in Serving Him media 51",
        "originalName": "24-25/FISH Club Meeting 4-22 Q&A/IMG_5196.JPG",
        "eventName": "FISH Club Meeting 4-22 Q&A"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/52-24-25-fish-club-meeting-4-22-q-a-img-5197.jpg",
        "alt": "Friends in Serving Him media 52",
        "originalName": "24-25/FISH Club Meeting 4-22 Q&A/IMG_5197.JPG",
        "eventName": "FISH Club Meeting 4-22 Q&A"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/53-24-25-fish-club-meeting-4-22-q-a-img-5195.mov",
        "alt": "Friends in Serving Him media 53",
        "originalName": "24-25/FISH Club Meeting 4-22 Q&A/IMG_5195.mov",
        "eventName": "FISH Club Meeting 4-22 Q&A"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/54-24-25-fish-club-meeting-4-1-img-4214.jpg",
        "alt": "Friends in Serving Him media 54",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4214.JPG",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/55-24-25-fish-club-meeting-4-1-img-4212.jpg",
        "alt": "Friends in Serving Him media 55",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4212.JPG",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/56-24-25-fish-club-meeting-4-1-img-4213.jpg",
        "alt": "Friends in Serving Him media 56",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4213.JPG",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/57-24-25-fish-club-meeting-4-1-img-4210.jpg",
        "alt": "Friends in Serving Him media 57",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4210.JPG",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/58-24-25-fish-club-meeting-4-1-img-4208.jpg",
        "alt": "Friends in Serving Him media 58",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4208.JPG",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/59-24-25-fish-club-meeting-4-1-img-4207.mov",
        "alt": "Friends in Serving Him media 59",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4207.mov",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/60-24-25-fish-club-meeting-4-1-img-4206.mov",
        "alt": "Friends in Serving Him media 60",
        "originalName": "24-25/FISH Club Meeting 4-1/IMG_4206.mov",
        "eventName": "FISH Club Meeting 4-1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/61-24-25-3-12-meant-for-eternity-event-abb75fc1-ef28-473b-a24c-dfc0c72db776.jpg",
        "alt": "Friends in Serving Him media 61",
        "originalName": "24-25/3-12 Meant for Eternity Event/ABB75FC1-EF28-473B-A24C-DFC0C72DB776.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/62-24-25-3-12-meant-for-eternity-event-a88b2032-4996-445f-b720-2e21b2637934.jpg",
        "alt": "Friends in Serving Him media 62",
        "originalName": "24-25/3-12 Meant for Eternity Event/A88B2032-4996-445F-B720-2E21B2637934.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/63-24-25-3-12-meant-for-eternity-event-c73b4445-dc92-4e48-b843-39cd051f6fc6.jpg",
        "alt": "Friends in Serving Him media 63",
        "originalName": "24-25/3-12 Meant for Eternity Event/C73B4445-DC92-4E48-B843-39CD051F6FC6.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/64-24-25-3-12-meant-for-eternity-event-0b8ea009-0a1c-4736-97e2-39b4d7390cad.jpg",
        "alt": "Friends in Serving Him media 64",
        "originalName": "24-25/3-12 Meant for Eternity Event/0B8EA009-0A1C-4736-97E2-39B4D7390CAD.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/65-24-25-3-12-meant-for-eternity-event-75a0779b284e4529af7a28d4a4455a60-2.mov",
        "alt": "Friends in Serving Him media 65",
        "originalName": "24-25/3-12 Meant for Eternity Event/75a0779b284e4529af7a28d4a4455a60 2.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/66-24-25-3-12-meant-for-eternity-event-56dba669-8617-4391-bde4-c3e4d518c404.jpg",
        "alt": "Friends in Serving Him media 66",
        "originalName": "24-25/3-12 Meant for Eternity Event/56DBA669-8617-4391-BDE4-C3E4D518C404.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/67-24-25-3-12-meant-for-eternity-event-41317e5c-771a-4d80-8030-3aad17dde8ad.jpg",
        "alt": "Friends in Serving Him media 67",
        "originalName": "24-25/3-12 Meant for Eternity Event/41317E5C-771A-4D80-8030-3AAD17DDE8AD.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/68-24-25-3-12-meant-for-eternity-event-168cbdda-62a0-4e5d-866c-7bbc9851699e.jpg",
        "alt": "Friends in Serving Him media 68",
        "originalName": "24-25/3-12 Meant for Eternity Event/168CBDDA-62A0-4E5D-866C-7BBC9851699E.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/69-24-25-3-12-meant-for-eternity-event-9bef06eb-2360-449e-9a3d-945aa5c72a08.jpg",
        "alt": "Friends in Serving Him media 69",
        "originalName": "24-25/3-12 Meant for Eternity Event/9BEF06EB-2360-449E-9A3D-945AA5C72A08.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/70-24-25-3-12-meant-for-eternity-event-f84389d01c8641989e2b882139aef7a7.mov",
        "alt": "Friends in Serving Him media 70",
        "originalName": "24-25/3-12 Meant for Eternity Event/f84389d01c8641989e2b882139aef7a7.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/71-24-25-3-12-meant-for-eternity-event-b26f2e2d-e184-4ee8-aaff-42f97bc1894e.jpg",
        "alt": "Friends in Serving Him media 71",
        "originalName": "24-25/3-12 Meant for Eternity Event/B26F2E2D-E184-4EE8-AAFF-42F97BC1894E.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/72-24-25-3-12-meant-for-eternity-event-7c532a9b01a74a36ab335a32cfcce699.mov",
        "alt": "Friends in Serving Him media 72",
        "originalName": "24-25/3-12 Meant for Eternity Event/7c532a9b01a74a36ab335a32cfcce699.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/73-24-25-3-12-meant-for-eternity-event-2630e39f-4036-4d08-b4e6-3413b3800ab1.jpg",
        "alt": "Friends in Serving Him media 73",
        "originalName": "24-25/3-12 Meant for Eternity Event/2630E39F-4036-4D08-B4E6-3413B3800AB1.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/74-24-25-3-12-meant-for-eternity-event-8cea0652869746509421f3a5310276a5.mov",
        "alt": "Friends in Serving Him media 74",
        "originalName": "24-25/3-12 Meant for Eternity Event/8cea0652869746509421f3a5310276a5.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/75-24-25-3-12-meant-for-eternity-event-f95b2778-5d60-4bd2-b21d-e90d9ab49547.jpg",
        "alt": "Friends in Serving Him media 75",
        "originalName": "24-25/3-12 Meant for Eternity Event/F95B2778-5D60-4BD2-B21D-E90D9AB49547.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/76-24-25-3-12-meant-for-eternity-event-1a942e4a48e64aab99bb3f0338b314f4-2.mov",
        "alt": "Friends in Serving Him media 76",
        "originalName": "24-25/3-12 Meant for Eternity Event/1a942e4a48e64aab99bb3f0338b314f4 2.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/77-24-25-3-12-meant-for-eternity-event-66ade6b0-9367-4273-8e61-6e059d131bea.jpg",
        "alt": "Friends in Serving Him media 77",
        "originalName": "24-25/3-12 Meant for Eternity Event/66ADE6B0-9367-4273-8E61-6E059D131BEA.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/78-24-25-3-12-meant-for-eternity-event-ea92d553-6441-4b07-a28e-c0b73c4fe1de.jpg",
        "alt": "Friends in Serving Him media 78",
        "originalName": "24-25/3-12 Meant for Eternity Event/EA92D553-6441-4B07-A28E-C0B73C4FE1DE.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/79-24-25-3-12-meant-for-eternity-event-8e16f6bd-47da-4c93-b189-77c8a0740a90.jpg",
        "alt": "Friends in Serving Him media 79",
        "originalName": "24-25/3-12 Meant for Eternity Event/8E16F6BD-47DA-4C93-B189-77C8A0740A90.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/80-24-25-3-12-meant-for-eternity-event-df00ed36-43f2-4c7f-b291-2ae4ed29713b-2.jpg",
        "alt": "Friends in Serving Him media 80",
        "originalName": "24-25/3-12 Meant for Eternity Event/DF00ED36-43F2-4C7F-B291-2AE4ED29713B 2.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/81-24-25-3-12-meant-for-eternity-event-b0e7848d-bcfb-482a-b9ad-b12c3b0482f6.jpg",
        "alt": "Friends in Serving Him media 81",
        "originalName": "24-25/3-12 Meant for Eternity Event/B0E7848D-BCFB-482A-B9AD-B12C3B0482F6.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/82-24-25-3-12-meant-for-eternity-event-ceb49c101f7a49fcb08ccec35d25b38c.mov",
        "alt": "Friends in Serving Him media 82",
        "originalName": "24-25/3-12 Meant for Eternity Event/ceb49c101f7a49fcb08ccec35d25b38c.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/83-24-25-3-12-meant-for-eternity-event-b97dccbe-aec0-462b-99b7-b0f600a02417.jpg",
        "alt": "Friends in Serving Him media 83",
        "originalName": "24-25/3-12 Meant for Eternity Event/B97DCCBE-AEC0-462B-99B7-B0F600A02417.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/84-24-25-3-12-meant-for-eternity-event-a33400fc-73ea-45b7-bc75-08e6556936e3-2.jpg",
        "alt": "Friends in Serving Him media 84",
        "originalName": "24-25/3-12 Meant for Eternity Event/A33400FC-73EA-45B7-BC75-08E6556936E3 2.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/85-24-25-3-12-meant-for-eternity-event-d615036e-f9fd-4d87-b66f-86ec360cd4c4.jpg",
        "alt": "Friends in Serving Him media 85",
        "originalName": "24-25/3-12 Meant for Eternity Event/D615036E-F9FD-4D87-B66F-86EC360CD4C4.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/86-24-25-3-12-meant-for-eternity-event-83bd8237b09049c59f3e4178cf83f1ab.mov",
        "alt": "Friends in Serving Him media 86",
        "originalName": "24-25/3-12 Meant for Eternity Event/83bd8237b09049c59f3e4178cf83f1ab.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/87-24-25-3-12-meant-for-eternity-event-f596b358-a38e-4191-b591-ebd2089a85ce.jpg",
        "alt": "Friends in Serving Him media 87",
        "originalName": "24-25/3-12 Meant for Eternity Event/F596B358-A38E-4191-B591-EBD2089A85CE.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/88-24-25-3-12-meant-for-eternity-event-acaa14d5-03f7-4787-be7d-2bb0d4574bb0.jpg",
        "alt": "Friends in Serving Him media 88",
        "originalName": "24-25/3-12 Meant for Eternity Event/ACAA14D5-03F7-4787-BE7D-2BB0D4574BB0.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/89-24-25-3-12-meant-for-eternity-event-1afdbe59c74e40658306e2d00c253018.mov",
        "alt": "Friends in Serving Him media 89",
        "originalName": "24-25/3-12 Meant for Eternity Event/1afdbe59c74e40658306e2d00c253018.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/90-24-25-3-12-meant-for-eternity-event-0adf4ea2f9b64b10bc407d8333dfe284.mov",
        "alt": "Friends in Serving Him media 90",
        "originalName": "24-25/3-12 Meant for Eternity Event/0adf4ea2f9b64b10bc407d8333dfe284.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/91-24-25-3-12-meant-for-eternity-event-59478593-25a8-476e-adde-a0adfcc14de1.jpg",
        "alt": "Friends in Serving Him media 91",
        "originalName": "24-25/3-12 Meant for Eternity Event/59478593-25A8-476E-ADDE-A0ADFCC14DE1.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/92-24-25-3-12-meant-for-eternity-event-52fbcb23-5aad-4f70-aa7b-bfc151a7651f.jpg",
        "alt": "Friends in Serving Him media 92",
        "originalName": "24-25/3-12 Meant for Eternity Event/52FBCB23-5AAD-4F70-AA7B-BFC151A7651F.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/93-24-25-3-12-meant-for-eternity-event-e352b4da72334645b32a4f82b993b438.mov",
        "alt": "Friends in Serving Him media 93",
        "originalName": "24-25/3-12 Meant for Eternity Event/e352b4da72334645b32a4f82b993b438.MOV",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/94-24-25-3-12-meant-for-eternity-event-2a362eff-ef87-421c-a5b0-79bbe8b5b94d.jpg",
        "alt": "Friends in Serving Him media 94",
        "originalName": "24-25/3-12 Meant for Eternity Event/2A362EFF-EF87-421C-A5B0-79BBE8B5B94D.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/95-24-25-3-12-meant-for-eternity-event-8d373157-cfc2-43bc-8ce1-243000bc455e.jpg",
        "alt": "Friends in Serving Him media 95",
        "originalName": "24-25/3-12 Meant for Eternity Event/8D373157-CFC2-43BC-8CE1-243000BC455E.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/96-24-25-3-12-meant-for-eternity-event-ebff9631-75de-43dd-910f-ba070229f3a6.jpg",
        "alt": "Friends in Serving Him media 96",
        "originalName": "24-25/3-12 Meant for Eternity Event/EBFF9631-75DE-43DD-910F-BA070229F3A6.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/97-24-25-3-12-meant-for-eternity-event-img-2781.jpg",
        "alt": "Friends in Serving Him media 97",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2781.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/98-24-25-3-12-meant-for-eternity-event-img-2782.jpg",
        "alt": "Friends in Serving Him media 98",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2782.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/99-24-25-3-12-meant-for-eternity-event-img-2787.jpg",
        "alt": "Friends in Serving Him media 99",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2787.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/100-24-25-3-12-meant-for-eternity-event-img-2788.jpg",
        "alt": "Friends in Serving Him media 100",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2788.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/101-24-25-3-12-meant-for-eternity-event-img-2786.jpg",
        "alt": "Friends in Serving Him media 101",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2786.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/102-24-25-3-12-meant-for-eternity-event-img-2783.jpg",
        "alt": "Friends in Serving Him media 102",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2783.JPG",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/103-24-25-3-12-meant-for-eternity-event-img-2785.mov",
        "alt": "Friends in Serving Him media 103",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2785.mov",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/104-24-25-3-12-meant-for-eternity-event-img-2784.mov",
        "alt": "Friends in Serving Him media 104",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2784.mov",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/105-24-25-3-12-meant-for-eternity-event-img-2780.mov",
        "alt": "Friends in Serving Him media 105",
        "originalName": "24-25/3-12 Meant for Eternity Event/IMG_2780.mov",
        "eventName": "3-12 Meant for Eternity Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/106-24-25-3-11-meant-for-more-than-just-this-life-event-1a17acab-0d51-42a0-a4a3-a89eb05d9325.jpg",
        "alt": "Friends in Serving Him media 106",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/1A17ACAB-0D51-42A0-A4A3-A89EB05D9325.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/107-24-25-3-11-meant-for-more-than-just-this-life-event-a62a9ecf-5ac3-4697-8fb4-3bb24a989305.jpg",
        "alt": "Friends in Serving Him media 107",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/A62A9ECF-5AC3-4697-8FB4-3BB24A989305.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/108-24-25-3-11-meant-for-more-than-just-this-life-event-2abd912403614362891fab69e15d06a9.mov",
        "alt": "Friends in Serving Him media 108",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/2abd912403614362891fab69e15d06a9.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/109-24-25-3-11-meant-for-more-than-just-this-life-event-943e13f5-4215-4e47-92e9-42b6d96f6acf.jpg",
        "alt": "Friends in Serving Him media 109",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/943E13F5-4215-4E47-92E9-42B6D96F6ACF.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/110-24-25-3-11-meant-for-more-than-just-this-life-event-16616e8c94d74a50a97501112ee9906b.mov",
        "alt": "Friends in Serving Him media 110",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/16616e8c94d74a50a97501112ee9906b.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/111-24-25-3-11-meant-for-more-than-just-this-life-event-be3ad1a4-a481-49d7-b0f0-4a85cf8f2cbd.jpg",
        "alt": "Friends in Serving Him media 111",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/BE3AD1A4-A481-49D7-B0F0-4A85CF8F2CBD.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/112-24-25-3-11-meant-for-more-than-just-this-life-event-b6b385bafc2f4307b49cf6411d39fabf.mov",
        "alt": "Friends in Serving Him media 112",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/b6b385bafc2f4307b49cf6411d39fabf.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/113-24-25-3-11-meant-for-more-than-just-this-life-event-4e72f0f7-158a-436d-99eb-8a1ec91d909e.jpg",
        "alt": "Friends in Serving Him media 113",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/4E72F0F7-158A-436D-99EB-8A1EC91D909E.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/114-24-25-3-11-meant-for-more-than-just-this-life-event-ee50f265-32a9-494e-b9f4-3c7d32e03699.jpg",
        "alt": "Friends in Serving Him media 114",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/EE50F265-32A9-494E-B9F4-3C7D32E03699.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/115-24-25-3-11-meant-for-more-than-just-this-life-event-62cd2fe3-41e3-42e0-8a9a-6b4cee842314.jpg",
        "alt": "Friends in Serving Him media 115",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/62CD2FE3-41E3-42E0-8A9A-6B4CEE842314.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/116-24-25-3-11-meant-for-more-than-just-this-life-event-918c06bf65884529ad3bb823949c9d2b.mov",
        "alt": "Friends in Serving Him media 116",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/918c06bf65884529ad3bb823949c9d2b.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/117-24-25-3-11-meant-for-more-than-just-this-life-event-6585bb9b-34b4-4c26-a946-ce206a622e1d-2.jpg",
        "alt": "Friends in Serving Him media 117",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/6585BB9B-34B4-4C26-A946-CE206A622E1D 2.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/118-24-25-3-11-meant-for-more-than-just-this-life-event-8bd2e87531854acea954d7a066144bcf.mov",
        "alt": "Friends in Serving Him media 118",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/8bd2e87531854acea954d7a066144bcf.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/119-24-25-3-11-meant-for-more-than-just-this-life-event-1734fec4351e44bc8e4231944904f103.mov",
        "alt": "Friends in Serving Him media 119",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/1734fec4351e44bc8e4231944904f103.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/120-24-25-3-11-meant-for-more-than-just-this-life-event-745d6df09a034ba5a9e48d23449cd9a8.mov",
        "alt": "Friends in Serving Him media 120",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/745d6df09a034ba5a9e48d23449cd9a8.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/121-24-25-3-11-meant-for-more-than-just-this-life-event-4ea78b61-0dc4-4cfc-bfac-79d67a77151c.jpg",
        "alt": "Friends in Serving Him media 121",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/4EA78B61-0DC4-4CFC-BFAC-79D67A77151C.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/122-24-25-3-11-meant-for-more-than-just-this-life-event-db3129a2-942f-4e07-853d-4ded8f568bb1.jpg",
        "alt": "Friends in Serving Him media 122",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/DB3129A2-942F-4E07-853D-4DED8F568BB1.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/123-24-25-3-11-meant-for-more-than-just-this-life-event-707c07ee75a74882931c3d239bd3560b.mov",
        "alt": "Friends in Serving Him media 123",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/707c07ee75a74882931c3d239bd3560b.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/124-24-25-3-11-meant-for-more-than-just-this-life-event-62501492-f92f-4b56-aa6e-3b137a91e449.jpg",
        "alt": "Friends in Serving Him media 124",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/62501492-F92F-4B56-AA6E-3B137A91E449.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/125-24-25-3-11-meant-for-more-than-just-this-life-event-bc1e2c40-f0f3-4719-8850-b1c2fdf2f534-2.jpg",
        "alt": "Friends in Serving Him media 125",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/BC1E2C40-F0F3-4719-8850-B1C2FDF2F534 2.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/126-24-25-3-11-meant-for-more-than-just-this-life-event-1be91c6141b64a6cbe2400a0f173dba1.mov",
        "alt": "Friends in Serving Him media 126",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/1be91c6141b64a6cbe2400a0f173dba1.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/127-24-25-3-11-meant-for-more-than-just-this-life-event-0fcc92539412454eb3d26a06314ad7ee-2.mov",
        "alt": "Friends in Serving Him media 127",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/0fcc92539412454eb3d26a06314ad7ee 2.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/128-24-25-3-11-meant-for-more-than-just-this-life-event-79a90ccbe3ce453080c97fd5dacea572.mov",
        "alt": "Friends in Serving Him media 128",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/79a90ccbe3ce453080c97fd5dacea572.MOV",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/129-24-25-3-11-meant-for-more-than-just-this-life-event-ceddbb99-6d1b-43ae-9963-813d1302ad60.jpg",
        "alt": "Friends in Serving Him media 129",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/CEDDBB99-6D1B-43AE-9963-813D1302AD60.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/130-24-25-3-11-meant-for-more-than-just-this-life-event-120bb564-7eec-47bf-b037-c567a899a174.jpg",
        "alt": "Friends in Serving Him media 130",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/120BB564-7EEC-47BF-B037-C567A899A174.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/131-24-25-3-11-meant-for-more-than-just-this-life-event-98a1482c-90ef-4770-9320-87784546a2ca.jpg",
        "alt": "Friends in Serving Him media 131",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/98A1482C-90EF-4770-9320-87784546A2CA.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/132-24-25-3-10-meant-for-more-than-anxiety-event-5cebfbcf-2978-4790-b294-ebca45cf5f2c-2.jpg",
        "alt": "Friends in Serving Him media 132",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/5CEBFBCF-2978-4790-B294-EBCA45CF5F2C 2.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/133-24-25-3-10-meant-for-more-than-anxiety-event-8ff0f386-b5dc-4ea3-9125-fac768adb884.jpg",
        "alt": "Friends in Serving Him media 133",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/8FF0F386-B5DC-4EA3-9125-FAC768ADB884.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/134-24-25-3-10-meant-for-more-than-anxiety-event-5087752a03094e8d91fb17db0c9ce379.mov",
        "alt": "Friends in Serving Him media 134",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/5087752a03094e8d91fb17db0c9ce379.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/135-24-25-3-10-meant-for-more-than-anxiety-event-835e36bfc5e14978b159ff155f56afb1.mov",
        "alt": "Friends in Serving Him media 135",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/835e36bfc5e14978b159ff155f56afb1.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/136-24-25-3-10-meant-for-more-than-anxiety-event-a2d40547-9143-410b-8d7b-ace83197109d.jpg",
        "alt": "Friends in Serving Him media 136",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/A2D40547-9143-410B-8D7B-ACE83197109D.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/137-24-25-3-10-meant-for-more-than-anxiety-event-a9927e05-d866-4216-91ac-a66f05be6df3.jpg",
        "alt": "Friends in Serving Him media 137",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/A9927E05-D866-4216-91AC-A66F05BE6DF3.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/138-24-25-3-10-meant-for-more-than-anxiety-event-5eb97d6c944a44fa9fdce57972acc8b0.mov",
        "alt": "Friends in Serving Him media 138",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/5eb97d6c944a44fa9fdce57972acc8b0.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/139-24-25-3-10-meant-for-more-than-anxiety-event-3493dbcec3dc40e3a40d32a06dc0aeec.mov",
        "alt": "Friends in Serving Him media 139",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/3493dbcec3dc40e3a40d32a06dc0aeec.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/140-24-25-3-10-meant-for-more-than-anxiety-event-2ff6f8be-aaea-4890-ab43-45d7cdccda03.jpg",
        "alt": "Friends in Serving Him media 140",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/2FF6F8BE-AAEA-4890-AB43-45D7CDCCDA03.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/141-24-25-3-10-meant-for-more-than-anxiety-event-9e159ab2-8692-48dd-9ecd-31fbe64fe603.jpg",
        "alt": "Friends in Serving Him media 141",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/9E159AB2-8692-48DD-9ECD-31FBE64FE603.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/142-24-25-3-10-meant-for-more-than-anxiety-event-112bb48a-0331-42a6-912b-7c931862362b-2.jpg",
        "alt": "Friends in Serving Him media 142",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/112BB48A-0331-42A6-912B-7C931862362B 2.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/143-24-25-3-10-meant-for-more-than-anxiety-event-3e377843-8730-44d2-91a3-a6349146a7d0.jpg",
        "alt": "Friends in Serving Him media 143",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/3E377843-8730-44D2-91A3-A6349146A7D0.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/144-24-25-3-10-meant-for-more-than-anxiety-event-cc2a8b5b-14b9-4da5-ad57-d46722fda130.jpg",
        "alt": "Friends in Serving Him media 144",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/CC2A8B5B-14B9-4DA5-AD57-D46722FDA130.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/145-24-25-3-10-meant-for-more-than-anxiety-event-37ff0c57-e17a-4a4f-b438-775664d9a0f2.jpg",
        "alt": "Friends in Serving Him media 145",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/37FF0C57-E17A-4A4F-B438-775664D9A0F2.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/146-24-25-3-10-meant-for-more-than-anxiety-event-0f3060cd-1942-4e17-8e8e-43cbe5e556d3.jpg",
        "alt": "Friends in Serving Him media 146",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/0F3060CD-1942-4E17-8E8E-43CBE5E556D3.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/147-24-25-3-10-meant-for-more-than-anxiety-event-0afbced2697b4407a9dbde55768204d4.mov",
        "alt": "Friends in Serving Him media 147",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/0afbced2697b4407a9dbde55768204d4.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/148-24-25-3-10-meant-for-more-than-anxiety-event-07049088-e558-4ee2-a2c5-9f129634b1cf.jpg",
        "alt": "Friends in Serving Him media 148",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/07049088-E558-4EE2-A2C5-9F129634B1CF.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/149-24-25-3-10-meant-for-more-than-anxiety-event-65b08a9c-a449-4f36-9c10-e766a0217b8c.jpg",
        "alt": "Friends in Serving Him media 149",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/65B08A9C-A449-4F36-9C10-E766A0217B8C.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/150-24-25-3-10-meant-for-more-than-anxiety-event-9800b0ac-474d-4572-b0cc-4d13564a08d7.jpg",
        "alt": "Friends in Serving Him media 150",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/9800B0AC-474D-4572-B0CC-4D13564A08D7.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/151-24-25-3-10-meant-for-more-than-anxiety-event-e82d32f92893404ba9c81c5460c3d66f.mov",
        "alt": "Friends in Serving Him media 151",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/e82d32f92893404ba9c81c5460c3d66f.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/152-24-25-3-10-meant-for-more-than-anxiety-event-f75f0b05d2094fb9a2a91b63044685bb.mov",
        "alt": "Friends in Serving Him media 152",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/f75f0b05d2094fb9a2a91b63044685bb.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/153-24-25-3-10-meant-for-more-than-anxiety-event-60e596de7b344324a72e8e74a7e8f163-2.mov",
        "alt": "Friends in Serving Him media 153",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/60e596de7b344324a72e8e74a7e8f163 2.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/154-24-25-3-11-meant-for-more-than-just-this-life-event-img-2692.jpg",
        "alt": "Friends in Serving Him media 154",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2692.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/155-24-25-3-11-meant-for-more-than-just-this-life-event-img-2693.jpg",
        "alt": "Friends in Serving Him media 155",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2693.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/156-24-25-3-11-meant-for-more-than-just-this-life-event-img-2694.mov",
        "alt": "Friends in Serving Him media 156",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2694.mov",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/157-24-25-3-11-meant-for-more-than-just-this-life-event-img-2691.mov",
        "alt": "Friends in Serving Him media 157",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2691.mov",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/158-24-25-3-11-meant-for-more-than-just-this-life-event-img-2689.jpg",
        "alt": "Friends in Serving Him media 158",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2689.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/159-24-25-3-11-meant-for-more-than-just-this-life-event-img-2690.jpg",
        "alt": "Friends in Serving Him media 159",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2690.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/160-24-25-3-11-meant-for-more-than-just-this-life-event-img-2686.jpg",
        "alt": "Friends in Serving Him media 160",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2686.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/161-24-25-3-11-meant-for-more-than-just-this-life-event-img-2687.jpg",
        "alt": "Friends in Serving Him media 161",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2687.JPG",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/162-24-25-3-11-meant-for-more-than-just-this-life-event-img-2688.mov",
        "alt": "Friends in Serving Him media 162",
        "originalName": "24-25/3-11 Meant For More than Just this Life Event/IMG_2688.mov",
        "eventName": "3-11 Meant For More than Just this Life Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/163-24-25-3-10-meant-for-more-than-anxiety-event-img-2614.jpg",
        "alt": "Friends in Serving Him media 163",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2614.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/164-24-25-3-10-meant-for-more-than-anxiety-event-img-2613.mov",
        "alt": "Friends in Serving Him media 164",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2613.mov",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/165-24-25-3-10-meant-for-more-than-anxiety-event-img-2612.jpg",
        "alt": "Friends in Serving Him media 165",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2612.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/166-24-25-3-10-meant-for-more-than-anxiety-event-img-2605.jpg",
        "alt": "Friends in Serving Him media 166",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2605.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/167-24-25-3-10-meant-for-more-than-anxiety-event-img-2604.mov",
        "alt": "Friends in Serving Him media 167",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2604.mov",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/168-24-25-3-10-meant-for-more-than-anxiety-event-img-2601.jpg",
        "alt": "Friends in Serving Him media 168",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2601.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/169-24-25-3-10-meant-for-more-than-anxiety-event-img-2602.jpg",
        "alt": "Friends in Serving Him media 169",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2602.JPG",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/170-24-25-3-10-meant-for-more-than-anxiety-event-img-2603.mov",
        "alt": "Friends in Serving Him media 170",
        "originalName": "24-25/3-10 Meant For More than Anxiety Event/IMG_2603.MOV",
        "eventName": "3-10 Meant For More than Anxiety Event"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/171-24-25-fish-club-meeting-3-4-img-2329.mov",
        "alt": "Friends in Serving Him media 171",
        "originalName": "24-25/FISH Club Meeting 3-4/IMG_2329.MOV",
        "eventName": "FISH Club Meeting 3-4"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/172-24-25-fish-club-meeting-3-4-img-2326.jpg",
        "alt": "Friends in Serving Him media 172",
        "originalName": "24-25/FISH Club Meeting 3-4/IMG_2326.JPG",
        "eventName": "FISH Club Meeting 3-4"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/173-24-25-fish-club-meeting-3-4-img-2327.jpg",
        "alt": "Friends in Serving Him media 173",
        "originalName": "24-25/FISH Club Meeting 3-4/IMG_2327.JPG",
        "eventName": "FISH Club Meeting 3-4"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/174-24-25-fish-club-meeting-3-4-img-2328.jpg",
        "alt": "Friends in Serving Him media 174",
        "originalName": "24-25/FISH Club Meeting 3-4/IMG_2328.JPG",
        "eventName": "FISH Club Meeting 3-4"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/175-24-25-group-photo-img-1402.jpg",
        "alt": "Friends in Serving Him media 175",
        "originalName": "24-25/Group Photo/IMG_1402.JPG",
        "eventName": "Group Photo"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/176-24-25-group-photo-img-1403.jpg",
        "alt": "Friends in Serving Him media 176",
        "originalName": "24-25/Group Photo/IMG_1403.JPG",
        "eventName": "Group Photo"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/177-24-25-fish-club-meeting-2-11-why-god-is-real-img-1401.mov",
        "alt": "Friends in Serving Him media 177",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_1401.MOV",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/178-24-25-fish-club-meeting-2-11-why-god-is-real-img-1400.mov",
        "alt": "Friends in Serving Him media 178",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_1400.MOV",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/179-24-25-fish-club-meeting-2-11-why-god-is-real-img-1399.mov",
        "alt": "Friends in Serving Him media 179",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_1399.MOV",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/180-24-25-fish-club-meeting-2-11-why-god-is-real-img-1397.jpg",
        "alt": "Friends in Serving Him media 180",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_1397.JPG",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/181-24-25-fish-club-meeting-2-11-why-god-is-real-img-7697.mp4",
        "alt": "Friends in Serving Him media 181",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7697.MP4",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/182-24-25-fish-club-meeting-2-11-why-god-is-real-img-7696.jpg",
        "alt": "Friends in Serving Him media 182",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7696.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/183-24-25-fish-club-meeting-2-11-why-god-is-real-img-7695.jpg",
        "alt": "Friends in Serving Him media 183",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7695.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/184-24-25-fish-club-meeting-2-11-why-god-is-real-img-7694.jpg",
        "alt": "Friends in Serving Him media 184",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7694.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/185-24-25-fish-club-meeting-2-11-why-god-is-real-img-7691.jpg",
        "alt": "Friends in Serving Him media 185",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7691.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/186-24-25-fish-club-meeting-2-11-why-god-is-real-img-7690.jpg",
        "alt": "Friends in Serving Him media 186",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7690.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/187-24-25-fish-club-meeting-2-11-why-god-is-real-img-7688.jpg",
        "alt": "Friends in Serving Him media 187",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7688.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/188-24-25-fish-club-meeting-2-11-why-god-is-real-img-7689.jpg",
        "alt": "Friends in Serving Him media 188",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7689.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/189-24-25-fish-club-meeting-2-11-why-god-is-real-img-1398.mov",
        "alt": "Friends in Serving Him media 189",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_1398.MOV",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/190-24-25-fish-club-meeting-2-11-why-god-is-real-img-7687.jpg",
        "alt": "Friends in Serving Him media 190",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_7687.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/191-24-25-fish-club-meeting-2-11-why-god-is-real-img-1396.mov",
        "alt": "Friends in Serving Him media 191",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_1396.mov",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/192-24-25-fish-club-meeting-2-11-why-god-is-real-img-5813.jpg",
        "alt": "Friends in Serving Him media 192",
        "originalName": "24-25/FISH Club Meeting 2-11 (Why God is Real) /IMG_5813.HEIC",
        "eventName": "FISH Club Meeting 2-11 (Why God is Real) "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/193-24-25-fish-club-meeting-1-14-img-0851.jpg",
        "alt": "Friends in Serving Him media 193",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0851.JPG",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/194-24-25-fish-club-meeting-1-14-img-0854.jpg",
        "alt": "Friends in Serving Him media 194",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0854.JPG",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/195-24-25-fish-club-meeting-1-14-img-0855.mov",
        "alt": "Friends in Serving Him media 195",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0855.MOV",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/196-24-25-fish-club-meeting-1-14-img-0852.jpg",
        "alt": "Friends in Serving Him media 196",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0852.JPG",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/197-24-25-fish-club-meeting-1-14-img-0853.jpg",
        "alt": "Friends in Serving Him media 197",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0853.JPG",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/198-24-25-fish-club-meeting-1-14-img-0849.jpg",
        "alt": "Friends in Serving Him media 198",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0849.JPG",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/199-24-25-fish-club-meeting-1-14-img-0850.jpg",
        "alt": "Friends in Serving Him media 199",
        "originalName": "24-25/FISH Club Meeting 1-14/IMG_0850.JPG",
        "eventName": "FISH Club Meeting 1-14"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/200-24-25-prayer-meeting-12-10-img-5138.jpg",
        "alt": "Friends in Serving Him media 200",
        "originalName": "24-25/Prayer Meeting 12-10 /IMG_5138.HEIC",
        "eventName": "Prayer Meeting 12-10 "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/201-24-25-prayer-meeting-12-10-img-5137.jpg",
        "alt": "Friends in Serving Him media 201",
        "originalName": "24-25/Prayer Meeting 12-10 /IMG_5137.HEIC",
        "eventName": "Prayer Meeting 12-10 "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/202-24-25-prayer-meeting-12-10-img-5136.jpg",
        "alt": "Friends in Serving Him media 202",
        "originalName": "24-25/Prayer Meeting 12-10 /IMG_5136.HEIC",
        "eventName": "Prayer Meeting 12-10 "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/203-24-25-prayer-meeting-12-10-img-5132.jpg",
        "alt": "Friends in Serving Him media 203",
        "originalName": "24-25/Prayer Meeting 12-10 /IMG_5132.HEIC",
        "eventName": "Prayer Meeting 12-10 "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/204-24-25-prayer-meeting-12-10-img-5131.jpg",
        "alt": "Friends in Serving Him media 204",
        "originalName": "24-25/Prayer Meeting 12-10 /IMG_5131.HEIC",
        "eventName": "Prayer Meeting 12-10 "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/205-24-25-fish-club-meeting-11-5-img-6900.jpg",
        "alt": "Friends in Serving Him media 205",
        "originalName": "24-25/FISH Club Meeting 11-5/IMG_6900.HEIC",
        "eventName": "FISH Club Meeting 11-5"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/206-24-25-fish-club-meeting-10-15-img-6752.jpg",
        "alt": "Friends in Serving Him media 206",
        "originalName": "24-25/FISH Club Meeting 10-15/IMG_6752.HEIC",
        "eventName": "FISH Club Meeting 10-15"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/207-24-25-fish-club-meeting-10-15-img-6751.jpg",
        "alt": "Friends in Serving Him media 207",
        "originalName": "24-25/FISH Club Meeting 10-15/IMG_6751.HEIC",
        "eventName": "FISH Club Meeting 10-15"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/208-24-25-9-25-see-you-at-the-pole-day-img-6588.jpg",
        "alt": "Friends in Serving Him media 208",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6588.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/209-24-25-9-25-see-you-at-the-pole-day-img-6589.jpg",
        "alt": "Friends in Serving Him media 209",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6589.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/210-24-25-9-25-see-you-at-the-pole-day-img-6590.jpg",
        "alt": "Friends in Serving Him media 210",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6590.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/211-24-25-fish-club-meeting-11-19-img-6589-2.jpg",
        "alt": "Friends in Serving Him media 211",
        "originalName": "24-25/FISH Club Meeting 11-19/IMG_6589 2.HEIC",
        "eventName": "FISH Club Meeting 11-19"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/212-24-25-fish-club-meeting-11-19-img-6590-2.jpg",
        "alt": "Friends in Serving Him media 212",
        "originalName": "24-25/FISH Club Meeting 11-19/IMG_6590 2.HEIC",
        "eventName": "FISH Club Meeting 11-19"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/213-24-25-9-25-see-you-at-the-pole-day-img-6587.jpg",
        "alt": "Friends in Serving Him media 213",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6587.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/214-24-25-9-25-see-you-at-the-pole-day-img-6585.jpg",
        "alt": "Friends in Serving Him media 214",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6585.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/215-24-25-9-25-see-you-at-the-pole-day-img-6586.jpg",
        "alt": "Friends in Serving Him media 215",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6586.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/216-24-25-9-25-see-you-at-the-pole-day-img-6584.jpg",
        "alt": "Friends in Serving Him media 216",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6584.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/217-24-25-9-25-see-you-at-the-pole-day-img-6583.jpg",
        "alt": "Friends in Serving Him media 217",
        "originalName": "24-25/9-25 See You At the Pole Day/IMG_6583.HEIC",
        "eventName": "9-25 See You At the Pole Day"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/fish-club/218-24-25-fish-club-meeting-9-24-gospel-img-6579.mov",
        "alt": "Friends in Serving Him media 218",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6579.MOV",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/219-24-25-fish-club-meeting-9-24-gospel-img-6578.jpg",
        "alt": "Friends in Serving Him media 219",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6578.HEIC",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/220-24-25-fish-club-meeting-9-24-gospel-img-6577.jpg",
        "alt": "Friends in Serving Him media 220",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6577.HEIC",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/221-24-25-fish-club-meeting-9-24-gospel-img-6576.jpg",
        "alt": "Friends in Serving Him media 221",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6576.HEIC",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/222-24-25-fish-club-meeting-9-24-gospel-img-6573.jpg",
        "alt": "Friends in Serving Him media 222",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6573.HEIC",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/223-24-25-fish-club-meeting-9-24-gospel-img-6574.jpg",
        "alt": "Friends in Serving Him media 223",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6574.HEIC",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/fish-club/224-24-25-fish-club-meeting-9-24-gospel-img-6575.jpg",
        "alt": "Friends in Serving Him media 224",
        "originalName": "24-25/FISH Club Meeting 9-24 (Gospel)/IMG_6575.HEIC",
        "eventName": "FISH Club Meeting 9-24 (Gospel)"
      }
    ]
  },
  {
    "title": "Generation Code",
    "category": "School",
    "folder": "Generation Code",
    "href": "/activities/school/generation-code",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/01-group-photos-25-26-semester-2-screenshot-2026-04-11-at-7-58-50-pm.png",
        "alt": "Generation Code media 1",
        "originalName": "Group Photos 25-26 Semester 2/Screenshot 2026-04-11 at 7.58.50 PM.png",
        "eventName": "Group Photos 25-26 Semester 2"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/02-group-photos-25-26-semester-2-screenshot-2026-03-28-at-8-00-45-pm.png",
        "alt": "Generation Code media 2",
        "originalName": "Group Photos 25-26 Semester 2/Screenshot 2026-03-28 at 8.00.45 PM.png",
        "eventName": "Group Photos 25-26 Semester 2"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/03-group-photos-25-26-semester-2-screenshot-2026-03-21-at-8-00-56-pm.png",
        "alt": "Generation Code media 3",
        "originalName": "Group Photos 25-26 Semester 2/Screenshot 2026-03-21 at 8.00.56 PM.png",
        "eventName": "Group Photos 25-26 Semester 2"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/04-group-photos-25-26-semester-2-screenshot-2026-03-14-at-8-00-35-pm.png",
        "alt": "Generation Code media 4",
        "originalName": "Group Photos 25-26 Semester 2/Screenshot 2026-03-14 at 8.00.35 PM.png",
        "eventName": "Group Photos 25-26 Semester 2"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/05-group-photos-25-26-semester-1-screenshot-2025-12-07-at-12-10-39-am.png",
        "alt": "Generation Code media 5",
        "originalName": "Group Photos 25-26 Semester 1/Screenshot 2025-12-07 at 12.10.39 AM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/06-class-photos-25-26-semester-1-week-6-week-6-project-presentations.png",
        "alt": "Generation Code media 6",
        "originalName": "Class Photos 25-26 Semester 1/Week 6/Week 6 Project Presentations.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/07-class-photos-25-26-semester-1-week-6-week-6-project-presentations-2.png",
        "alt": "Generation Code media 7",
        "originalName": "Class Photos 25-26 Semester 1/Week 6/Week 6 Project Presentations 2.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/08-class-photos-25-26-semester-1-week-6-week-6-project-presentations-3.png",
        "alt": "Generation Code media 8",
        "originalName": "Class Photos 25-26 Semester 1/Week 6/Week 6 Project Presentations 3.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/09-group-photos-25-26-semester-1-week-5.png",
        "alt": "Generation Code media 9",
        "originalName": "Group Photos 25-26 Semester 1/Week 5.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/10-group-photos-25-26-semester-1-week-4.png",
        "alt": "Generation Code media 10",
        "originalName": "Group Photos 25-26 Semester 1/Week 4.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/11-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-24-40-pm.png",
        "alt": "Generation Code media 11",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.24.40 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/12-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-23-50-pm.png",
        "alt": "Generation Code media 12",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.23.50 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/13-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-23-37-pm.png",
        "alt": "Generation Code media 13",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.23.37 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/14-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-22-40-pm.png",
        "alt": "Generation Code media 14",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.22.40 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/15-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-22-26-pm.png",
        "alt": "Generation Code media 15",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.22.26 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/16-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-22-13-pm.png",
        "alt": "Generation Code media 16",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.22.13 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/17-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-21-57-pm.png",
        "alt": "Generation Code media 17",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.21.57 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/18-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-21-45-pm.png",
        "alt": "Generation Code media 18",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.21.45 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/19-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-21-35-pm.png",
        "alt": "Generation Code media 19",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.21.35 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/20-class-photos-25-26-semester-1-week-4-screenshot-2025-11-15-at-7-11-48-pm.png",
        "alt": "Generation Code media 20",
        "originalName": "Class Photos 25-26 Semester 1/Week 4/Screenshot 2025-11-15 at 7.11.48 PM.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/21-group-photos-25-26-semester-1-week-3.png",
        "alt": "Generation Code media 21",
        "originalName": "Group Photos 25-26 Semester 1/Week 3.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/22-class-photos-25-26-semester-1-week-3-week3screenshot.png",
        "alt": "Generation Code media 22",
        "originalName": "Class Photos 25-26 Semester 1/Week 3/Week3screenshot.png",
        "eventName": "Group Photos 25-26 Semester 1"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/generation-code/23-class-photos-25-26-semester-1-week-2-screenshotgnerationcode.png",
        "alt": "Generation Code media 23",
        "originalName": "Class Photos 25-26 Semester 1/Week 2/screenshotgnerationcode.png",
        "eventName": "Group Photos 25-26 Semester 1"
      }
    ]
  },
  {
    "title": "Orchestra 1st Violin",
    "category": "Music",
    "folder": "Music",
    "href": "/music",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/music/01-chamber-orchestra-img-9894.jpg",
        "alt": "Orchestra 1st Violin media 1",
        "originalName": "Chamber Orchestra /IMG_9894.HEIC",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/music/02-other-performances-img-9668.mov",
        "alt": "Orchestra 1st Violin media 2",
        "originalName": "Other Performances/IMG_9668.mov",
        "eventName": "Other Performances"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/music/03-other-performances-talkv-wxcesdj9mg-ukf4xinycc2c1watyrqnkk-talkv-high.mov",
        "alt": "Orchestra 1st Violin media 3",
        "originalName": "Other Performances/_talkv_wxcesDJ9mg_uKF4XINyCC2C1WaTYRqNkk_talkv_high.mov",
        "eventName": "Other Performances"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/04-new-life-church-orchestra-img-8847.jpeg",
        "alt": "Orchestra 1st Violin media 4",
        "originalName": "New Life Church Orchestra/IMG_8847.jpeg",
        "eventName": "New Life Church Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/05-midwest-clinic-logo.jpeg",
        "alt": "Orchestra 1st Violin media 5",
        "originalName": "midwest clinic logo.jpeg",
        "eventName": "General"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/music/06-other-performances-talkv-wu3m8vmkm6-xhce40brn57xkmt8yukvk0-talkv-high.mov",
        "alt": "Orchestra 1st Violin media 6",
        "originalName": "Other Performances/_talkv_wu3M8VmKm6_xhcE40brN57xkMT8yuKvK0_talkv_high.mov",
        "eventName": "Other Performances"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/music/07-other-performances-talkv-wulaycotvr-2e3jjnsk3bh3sgn27xwtt1-talkv-high.mov",
        "alt": "Orchestra 1st Violin media 7",
        "originalName": "Other Performances/_talkv_wuLAycOTVR_2E3jjNSK3bh3Sgn27Xwtt1_talkv_high.mov",
        "eventName": "Other Performances"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/08-chamber-orchestra-img-6899.jpeg",
        "alt": "Orchestra 1st Violin media 8",
        "originalName": "Chamber Orchestra /IMG_6899.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/09-chamber-orchestra-r0003060.jpeg",
        "alt": "Orchestra 1st Violin media 9",
        "originalName": "Chamber Orchestra /R0003060.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/10-chamber-orchestra-r0003056.jpeg",
        "alt": "Orchestra 1st Violin media 10",
        "originalName": "Chamber Orchestra /R0003056.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/11-chamber-orchestra-img-4638.jpeg",
        "alt": "Orchestra 1st Violin media 11",
        "originalName": "Chamber Orchestra /IMG_4638.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/12-chamber-orchestra-r0001107.jpeg",
        "alt": "Orchestra 1st Violin media 12",
        "originalName": "Chamber Orchestra /R0001107.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/music/13-new-life-church-orchestra-talkv-wxzadd8tjf-p1uh3iy6p8lwdqavnphol1-talkv-high.mp4",
        "alt": "Orchestra 1st Violin media 13",
        "originalName": "New Life Church Orchestra/_talkv_wxzadD8tjF_p1Uh3Iy6P8LwDqaVNPhOl1_talkv_high.MP4",
        "eventName": "New Life Church Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/14-chamber-orchestra-img-9898.jpeg",
        "alt": "Orchestra 1st Violin media 14",
        "originalName": "Chamber Orchestra /IMG_9898.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/music/15-chamber-orchestra-img-3968.jpeg",
        "alt": "Orchestra 1st Violin media 15",
        "originalName": "Chamber Orchestra /IMG_3968.jpeg",
        "eventName": "Chamber Orchestra"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/music/16-chamber-orchestra-img-9892.mov",
        "alt": "Orchestra 1st Violin media 16",
        "originalName": "Chamber Orchestra /IMG_9892.mov",
        "eventName": "Chamber Orchestra"
      }
    ]
  },
  {
    "title": "Church & Retreats",
    "category": "Faith",
    "folder": "Church",
    "href": "/activities/faith/youth-praise-team",
    "description": "",
    "media": [
      {
        "type": "video",
        "src": "/homepage-media/generated/church/01-praise-team-img-0398.mov",
        "alt": "Church & Retreats media 1",
        "originalName": "Praise Team/IMG_0398.MOV",
        "eventName": "Praise Team"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/church/02-navajo-mission-trip-navajo-mission-trip-overview.mp4",
        "alt": "Church & Retreats media 2",
        "originalName": "Navajo Mission Trip  /navajo mission trip overview.mp4",
        "eventName": "Navajo Mission Trip  "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/03-navajo-mission-trip-img-8910.jpg",
        "alt": "Church & Retreats media 3",
        "originalName": "Navajo Mission Trip  /IMG_8910.JPG",
        "eventName": "Navajo Mission Trip  "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/church/04-navajo-mission-trip-talkv-wwj56unkhr-v4re83nppc9k4qqjplwbk0-talkv-high.mov",
        "alt": "Church & Retreats media 4",
        "originalName": "Navajo Mission Trip  /_talkv_wwJ56uNKHr_V4Re83npPc9k4qqjPlWbk0_talkv_high.mov",
        "eventName": "Navajo Mission Trip  "
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/church/05-navajo-mission-trip-talkv-wwkcwzrr2j-ycf6rtmgbhaxghmlhz99g0-talkv-high.mov",
        "alt": "Church & Retreats media 5",
        "originalName": "Navajo Mission Trip  /_talkv_wwKcwzRr2j_yCF6RtMgBHAxghmLhZ99g0_talkv_high.mov",
        "eventName": "Navajo Mission Trip  "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/06-kenya-mission-trip-img-4563.jpeg",
        "alt": "Church & Retreats media 6",
        "originalName": "Kenya Mission Trip/IMG_4563.jpeg",
        "eventName": "Kenya Mission Trip"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/07-kenya-mission-trip-img-4513.jpeg",
        "alt": "Church & Retreats media 7",
        "originalName": "Kenya Mission Trip/IMG_4513.jpeg",
        "eventName": "Kenya Mission Trip"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/08-kenya-mission-trip-img-4519.jpeg",
        "alt": "Church & Retreats media 8",
        "originalName": "Kenya Mission Trip/IMG_4519.jpeg",
        "eventName": "Kenya Mission Trip"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/09-youthwave-retreat-25-26-p1026627.jpeg",
        "alt": "Church & Retreats media 9",
        "originalName": "Youthwave Retreat 25-26/P1026627.jpeg",
        "eventName": "Youthwave Retreat 25-26"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/10-youthwave-retreat-25-26-p1026607.jpeg",
        "alt": "Church & Retreats media 10",
        "originalName": "Youthwave Retreat 25-26/P1026607.jpeg",
        "eventName": "Youthwave Retreat 25-26"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/11-youthwave-retreat-25-26-img-0285.jpeg",
        "alt": "Church & Retreats media 11",
        "originalName": "Youthwave Retreat 25-26/IMG_0285.jpeg",
        "eventName": "Youthwave Retreat 25-26"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/12-indonesia-mission-trip-img-0235-2.jpg",
        "alt": "Church & Retreats media 12",
        "originalName": "Indonesia Mission Trip/IMG_0235 2.JPG",
        "eventName": "Indonesia Mission Trip"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/church/13-indonesia-mission-trip-2024-07-31-21-55.mov",
        "alt": "Church & Retreats media 13",
        "originalName": "Indonesia Mission Trip/2024_07_31 21_55.mov",
        "eventName": "Indonesia Mission Trip"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/church/14-indonesia-mission-trip-dsc-0436.jpeg",
        "alt": "Church & Retreats media 14",
        "originalName": "Indonesia Mission Trip/DSC_0436.JPEG",
        "eventName": "Indonesia Mission Trip"
      }
    ]
  },
  {
    "title": "AI Senior Center Workshops",
    "category": "Volunteering",
    "folder": "AI Senior Center",
    "href": "/activities/volunteering/ai-senior-center-workshops",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/ai-senior-center/01-talkmedia-i-e97dfc60482f-jpeg.jpeg",
        "alt": "AI Senior Center Workshops media 1",
        "originalName": "TalkMedia_i_e97dfc60482f.jpeg.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/ai-senior-center/02-talkmedia-i-40178ab1c68b-jpeg.jpeg",
        "alt": "AI Senior Center Workshops media 2",
        "originalName": "TalkMedia_i_40178ab1c68b.jpeg.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/ai-senior-center/03-img-2132.jpg",
        "alt": "AI Senior Center Workshops media 3",
        "originalName": "IMG_2132.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/ai-senior-center/04-screenshot-2025-11-30-at-7-18-28-pm.png",
        "alt": "AI Senior Center Workshops media 4",
        "originalName": "Screenshot 2025-11-30 at 7.18.28 PM.png",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/ai-senior-center/05-img-6235.jpg",
        "alt": "AI Senior Center Workshops media 5",
        "originalName": "IMG_6235.JPG",
        "eventName": "Chapter Leadership"
      }
    ]
  },
  {
    "title": "Hwarang Youth Foundation",
    "category": "Volunteering",
    "folder": "Hwarang",
    "href": "/activities/volunteering/hwarang-youth-foundation",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/01-tonkatsu-img-1156.jpg",
        "alt": "Hwarang Youth Foundation media 1",
        "originalName": "Tonkatsu/IMG_1156.HEIC",
        "eventName": "Tonkatsu"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/02-senior-center-volunteer-activity-img-0928.jpg",
        "alt": "Hwarang Youth Foundation media 2",
        "originalName": "Senior Center Volunteer Activity/IMG_0928.HEIC",
        "eventName": "Senior Center Volunteer Activity"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/03-other-photos-img-0512.jpeg",
        "alt": "Hwarang Youth Foundation media 3",
        "originalName": "Other photos/IMG_0512.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/04-other-photos-img-9666.jpg",
        "alt": "Hwarang Youth Foundation media 4",
        "originalName": "Other photos/IMG_9666.HEIC",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/05-other-photos-img-9663.jpg",
        "alt": "Hwarang Youth Foundation media 5",
        "originalName": "Other photos/IMG_9663.HEIC",
        "eventName": "Other photos"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/06-vision-fesetival-24-25-video-output-72454706-0612-4630-9f52-79d698bca2d7.mov",
        "alt": "Hwarang Youth Foundation media 6",
        "originalName": "Vision Fesetival 24-25/video-output-72454706-0612-4630-9F52-79D698BCA2D7.mov",
        "eventName": "Vision Fesetival 24-25"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/07-vision-fesetival-24-25-talkv-wxe38wrbfh-fidrbje9axbymhe3xfwit0-talkv-high.mov",
        "alt": "Hwarang Youth Foundation media 7",
        "originalName": "Vision Fesetival 24-25/_talkv_wxe38WRBFH_FIDrbjE9AXBYmhe3XfwiT0_talkv_high.mov",
        "eventName": "Vision Fesetival 24-25"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/08-vision-fesetival-24-25-talkv-wxffm7jyzc-k59akm6ypdlpznkrpkfd41-talkv-high.mov",
        "alt": "Hwarang Youth Foundation media 8",
        "originalName": "Vision Fesetival 24-25/_talkv_wxffM7jyZC_K59aKm6ypdLPZNkRPKfd41_talkv_high.mov",
        "eventName": "Vision Fesetival 24-25"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/09-vision-fesetival-24-25-talkv-wxe7fajxex-1gm5jrxvwrulomw3lgnnvk-talkv-high.mov",
        "alt": "Hwarang Youth Foundation media 9",
        "originalName": "Vision Fesetival 24-25/_talkv_wxe7fajxEx_1GM5JrxvwruloMw3LGnnVK_talkv_high.mov",
        "eventName": "Vision Fesetival 24-25"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/10-other-photos-img-9074.mov",
        "alt": "Hwarang Youth Foundation media 10",
        "originalName": "Other photos/IMG_9074.MOV",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/11-other-photos-img-8817.jpeg",
        "alt": "Hwarang Youth Foundation media 11",
        "originalName": "Other photos/IMG_8817.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/12-other-photos-img-6406.jpeg",
        "alt": "Hwarang Youth Foundation media 12",
        "originalName": "Other photos/IMG_6406.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/13-other-photos-img-6383.jpeg",
        "alt": "Hwarang Youth Foundation media 13",
        "originalName": "Other photos/IMG_6383.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/14-vision-festival-23-24-talkv-wu4gsyocba-y5akkwlx6babhgcih8n7ak-talkv-high.mov",
        "alt": "Hwarang Youth Foundation media 14",
        "originalName": "Vision Festival 23-24 /_talkv_wu4gsyOcbA_y5aKKWLX6bAbhGCih8n7Ak_talkv_high.mov",
        "eventName": "Vision Festival 23-24 "
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/15-other-photos-img-5704.jpeg",
        "alt": "Hwarang Youth Foundation media 15",
        "originalName": "Other photos/IMG_5704.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/16-other-photos-img-5690.jpeg",
        "alt": "Hwarang Youth Foundation media 16",
        "originalName": "Other photos/IMG_5690.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/17-p-o-p-program-img-0257.jpeg",
        "alt": "Hwarang Youth Foundation media 17",
        "originalName": "P.O.P. Program/IMG_0257.jpeg",
        "eventName": "P.O.P. Program"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/18-field-day-2022-talkv-wsejovins9-rxknctkbnnnvnoyrvjnfk1-talkv-high.mov",
        "alt": "Hwarang Youth Foundation media 18",
        "originalName": "Field Day 2022/_talkv_wsejoVInS9_rxKNctKbnNnVnoyRVJnFK1_talkv_high.mov",
        "eventName": "Field Day 2022"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/19-p-o-p-program-img-5188.jpeg",
        "alt": "Hwarang Youth Foundation media 19",
        "originalName": "P.O.P. Program/IMG_5188.jpeg",
        "eventName": "P.O.P. Program"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/20-6-25-korean-war-76th-anniversary-img-3599.jpg",
        "alt": "Hwarang Youth Foundation media 20",
        "originalName": "6.25 Korean War 76th Anniversary/IMG_3599.heic",
        "eventName": "6.25 Korean War 76th Anniversary"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/21-6-25-korean-war-76th-anniversary-img-3596.jpg",
        "alt": "Hwarang Youth Foundation media 21",
        "originalName": "6.25 Korean War 76th Anniversary/IMG_3596.heic",
        "eventName": "6.25 Korean War 76th Anniversary"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/22-6-25-korean-war-76th-anniversary-img-3586.jpg",
        "alt": "Hwarang Youth Foundation media 22",
        "originalName": "6.25 Korean War 76th Anniversary/IMG_3586.heic",
        "eventName": "6.25 Korean War 76th Anniversary"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/23-6-25-korean-war-76th-anniversary-img-3598.jpg",
        "alt": "Hwarang Youth Foundation media 23",
        "originalName": "6.25 Korean War 76th Anniversary/IMG_3598.heic",
        "eventName": "6.25 Korean War 76th Anniversary"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/24-other-photos-img-3015.jpeg",
        "alt": "Hwarang Youth Foundation media 24",
        "originalName": "Other photos/IMG_3015.jpeg",
        "eventName": "Other photos"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/25-recycling-img-3010.jpeg",
        "alt": "Hwarang Youth Foundation media 25",
        "originalName": "Recycling/IMG_3010.jpeg",
        "eventName": "Recycling"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/26-recycling-img-3008.jpeg",
        "alt": "Hwarang Youth Foundation media 26",
        "originalName": "Recycling/IMG_3008.jpeg",
        "eventName": "Recycling"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/27-vision-festival-25-26-img-20260222-170547.jpeg",
        "alt": "Hwarang Youth Foundation media 27",
        "originalName": "Vision Festival 25-26/IMG_20260222_170547.jpeg",
        "eventName": "Vision Festival 25-26"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/28-vision-festival-25-26-talkv-wziuzigqdy-qbytosjb91sgfjoow95llk-talkv-high.mp4",
        "alt": "Hwarang Youth Foundation media 28",
        "originalName": "Vision Festival 25-26/_talkv_wziUzigQdy_qbYtOsjb91SgFJoow95Llk_talkv_high.MP4",
        "eventName": "Vision Festival 25-26"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/29-vision-festival-25-26-talkv-wzi74u2b5q-okzb4pogan87iiziyaz1jk-talkv-high.mp4",
        "alt": "Hwarang Youth Foundation media 29",
        "originalName": "Vision Festival 25-26/_talkv_wzi74u2B5Q_OKZb4POgaN87iIziyaz1JK_talkv_high.MP4",
        "eventName": "Vision Festival 25-26"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/hwarang/30-vision-festival-25-26-talkv-wzi5sbsfc2-dqdfvdkmevj4xbhkctj8q1-talkv-high.mp4",
        "alt": "Hwarang Youth Foundation media 30",
        "originalName": "Vision Festival 25-26/_talkv_wzi5SBsFC2_DQdFVDKMEvj4XBhkCtj8Q1_talkv_high.MP4",
        "eventName": "Vision Festival 25-26"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/31-p-o-p-program-92c8edf7-3b09-4ee8-9c04-d89dc0991310.jpeg",
        "alt": "Hwarang Youth Foundation media 31",
        "originalName": "P.O.P. Program/92C8EDF7-3B09-4EE8-9C04-D89DC0991310.jpeg",
        "eventName": "P.O.P. Program"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/32-tonkatsu-3bf3e593-a52c-43ac-bb9b-939d8ae424f5.jpeg",
        "alt": "Hwarang Youth Foundation media 32",
        "originalName": "Tonkatsu/3BF3E593-A52C-43AC-BB9B-939D8AE424F5.jpeg",
        "eventName": "Tonkatsu"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/33-senior-center-volunteer-activity-img-0050.jpg",
        "alt": "Hwarang Youth Foundation media 33",
        "originalName": "Senior Center Volunteer Activity/IMG_0050.JPG",
        "eventName": "Senior Center Volunteer Activity"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/34-p-o-p-program-img-1397.jpg",
        "alt": "Hwarang Youth Foundation media 34",
        "originalName": "P.O.P. Program/IMG_1397.HEIC",
        "eventName": "P.O.P. Program"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/35-p-o-p-program-img-1392.jpg",
        "alt": "Hwarang Youth Foundation media 35",
        "originalName": "P.O.P. Program/IMG_1392.HEIC",
        "eventName": "P.O.P. Program"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/36-24-25-guatemala-img-0782.jpg",
        "alt": "Hwarang Youth Foundation media 36",
        "originalName": "24-25 Guatemala/IMG_0782.JPG",
        "eventName": "24-25 Guatemala"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/37-24-25-guatemala-img-0250.jpg",
        "alt": "Hwarang Youth Foundation media 37",
        "originalName": "24-25 Guatemala/IMG_0250.JPG",
        "eventName": "24-25 Guatemala"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/38-24-25-guatemala-img-7744.jpg",
        "alt": "Hwarang Youth Foundation media 38",
        "originalName": "24-25 Guatemala/IMG_7744.JPG",
        "eventName": "24-25 Guatemala"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/39-24-25-la-gala-img-0509.jpg",
        "alt": "Hwarang Youth Foundation media 39",
        "originalName": "24-25 LA GALA/IMG_0509.JPG",
        "eventName": "24-25 LA GALA"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/40-24-25-la-gala-img-0512.jpg",
        "alt": "Hwarang Youth Foundation media 40",
        "originalName": "24-25 LA GALA/IMG_0512.JPG",
        "eventName": "24-25 LA GALA"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/hwarang/41-24-25-la-gala-img-0513.jpg",
        "alt": "Hwarang Youth Foundation media 41",
        "originalName": "24-25 LA GALA/IMG_0513.JPG",
        "eventName": "24-25 LA GALA"
      }
    ]
  },
  {
    "title": "BioVibe Startup",
    "category": "Research",
    "folder": "BioVibe",
    "href": "/activities/research/biovibe-startup",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/biovibe/01-files-screenshot-2026-07-01-at-4-48-30-pm.png",
        "alt": "BioVibe Startup media 1",
        "originalName": "Files/Screenshot 2026-07-01 at 4.48.30 PM.png",
        "eventName": "Files"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/biovibe/02-picture-with-dr-suri.jpeg",
        "alt": "BioVibe Startup media 2",
        "originalName": "picture with dr suri.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/biovibe/03-files-biovibe-eeg-graph.png",
        "alt": "BioVibe Startup media 3",
        "originalName": "Files/BioVibe EEG Graph.png",
        "eventName": "Files"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/biovibe/04-files-kakaotalk-video-2026-01-11-00-11-11.mp4",
        "alt": "BioVibe Startup media 4",
        "originalName": "Files/KakaoTalk_Video_2026-01-11-00-11-11.mp4",
        "eventName": "Files"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/biovibe/05-conrad-challenge.mp4",
        "alt": "BioVibe Startup media 5",
        "originalName": "Conrad Challenge.mp4",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "document",
        "src": "/homepage-media/generated/biovibe/06-files-competitor-analysis.pdf",
        "alt": "BioVibe Startup media 6",
        "originalName": "Files/Competitor_Analysis.pdf",
        "eventName": "Files"
      },
      {
        "type": "document",
        "src": "/homepage-media/generated/biovibe/07-files-acf-biovibe-budget-sheet1.pdf",
        "alt": "BioVibe Startup media 7",
        "originalName": "Files/ACF BioVibe Budget - Sheet1.pdf",
        "eventName": "Files"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/biovibe/08-biovibe-logo-transparent.png",
        "alt": "BioVibe Startup media 8",
        "originalName": "Biovibe-logo Transparent.png",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/biovibe/09-acfgroupphoto.png",
        "alt": "BioVibe Startup media 9",
        "originalName": "acfgroupphoto.png",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/biovibe/10-files-graphacf.mov",
        "alt": "BioVibe Startup media 10",
        "originalName": "Files/GraphACF.mov",
        "eventName": "Files"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/biovibe/11-files-output.png",
        "alt": "BioVibe Startup media 11",
        "originalName": "Files/output.png",
        "eventName": "Files"
      }
    ]
  },
  {
    "title": "Socratic Spark Project",
    "category": "Research",
    "folder": "Socratic Spark",
    "href": "/activities/research/socratic-spark-project",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/socratic-spark/01-screenshot-2026-06-30-at-4-01-08-pm.png",
        "alt": "Socratic Spark Project media 1",
        "originalName": "Screenshot 2026-06-30 at 4.01.08 PM.png",
        "eventName": "Chapter Leadership"
      }
    ]
  },
  {
    "title": "Agentic AI Research",
    "category": "Research",
    "folder": "ASDRP",
    "href": "/activities/research/agentic-ai-research",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/asdrp/01-fremont-stem-cover.jpg",
        "alt": "Agentic AI Research media 1",
        "originalName": "fremont_stem_cover.jpg",
        "eventName": "Agentic AI Research"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/asdrp/02-jei-research-logo.png",
        "alt": "Agentic AI Research media 2",
        "originalName": "JEI research logo.png",
        "eventName": "Agentic AI Research"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/asdrp/03-screenshot-2026-07-01-at-7-55-01-pm.png",
        "alt": "Agentic AI Research media 3",
        "originalName": "Screenshot 2026-07-01 at 7.55.01 PM.png",
        "eventName": "Agentic AI Research"
      },
      {
        "type": "video",
        "src": "/homepage-media/generated/asdrp/04-img-1441.mov",
        "alt": "Agentic AI Research media 4",
        "originalName": "IMG_1441.mov",
        "eventName": "Agentic AI Research"
      }
    ]
  },
  {
    "title": "Photo Gallery",
    "category": "Personal",
    "folder": "Photo Gallery",
    "href": "/gallery",
    "description": "",
    "media": [
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/01-6-6-26.jpeg",
        "alt": "Photo Gallery media 1",
        "originalName": "6:6:26.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/02-04-25-26-2.jpeg",
        "alt": "Photo Gallery media 2",
        "originalName": "04:25:26 2.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/03-04-25-26.jpeg",
        "alt": "Photo Gallery media 3",
        "originalName": "04:25:26.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/04-02-14-26-3.jpeg",
        "alt": "Photo Gallery media 4",
        "originalName": "02:14:26 3.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/05-02-14-26-2.jpeg",
        "alt": "Photo Gallery media 5",
        "originalName": "02:14:26 2.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/06-02-14-26.jpeg",
        "alt": "Photo Gallery media 6",
        "originalName": "02:14:26.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/07-02-13-26.jpeg",
        "alt": "Photo Gallery media 7",
        "originalName": "02:13:26.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/08-0fc5f207-746a-49cd-8978-a1f32003c37b.jpeg",
        "alt": "Photo Gallery media 8",
        "originalName": "0FC5F207-746A-49CD-8978-A1F32003C37B.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/09-05-25-26.jpeg",
        "alt": "Photo Gallery media 9",
        "originalName": "05:25:26.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/10-08082025.jpg",
        "alt": "Photo Gallery media 10",
        "originalName": "08082025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/11-photo08072025.jpg",
        "alt": "Photo Gallery media 11",
        "originalName": "photo08072025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/12-07262025.jpg",
        "alt": "Photo Gallery media 12",
        "originalName": "07262025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/13-06202025.jpg",
        "alt": "Photo Gallery media 13",
        "originalName": "06202025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/14-06132025-4th.jpg",
        "alt": "Photo Gallery media 14",
        "originalName": "06132025 4th.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/15-06132025-3rd.jpg",
        "alt": "Photo Gallery media 15",
        "originalName": "06132025 3rd.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/16-06132025-2nd.jpg",
        "alt": "Photo Gallery media 16",
        "originalName": "06132025 2nd.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/17-06132025.jpg",
        "alt": "Photo Gallery media 17",
        "originalName": "06132025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/18-photo06122025.jpg",
        "alt": "Photo Gallery media 18",
        "originalName": "photo06122025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/19-photo05242025.jpg",
        "alt": "Photo Gallery media 19",
        "originalName": "photo05242025.JPG",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/20-04-26-25.jpeg",
        "alt": "Photo Gallery media 20",
        "originalName": "04:26:25.jpeg",
        "eventName": "Chapter Leadership"
      },
      {
        "type": "image",
        "src": "/homepage-media/generated/photo-gallery/21-photo04092025.jpg",
        "alt": "Photo Gallery media 21",
        "originalName": "photo04092025.JPG",
        "eventName": "Chapter Leadership"
      }
    ]
  }
];

export const homepageActivities: HomepageActivity[] = homepageActivitiesData.map((activity) => ({
  ...activity,
  media: activity.media.map((item) => ({
    ...item,
    src: assetPath(item.src),
  })),
}));
