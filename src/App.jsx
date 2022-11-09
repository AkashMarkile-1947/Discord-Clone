import React from "react";
import discordLogo from "../assets/discord_main_logo.svg";
import Hero from "./landingpage/hero";
import InviteOnly from "./landingpage/inviteonly";
import Fandom from "./landingpage/fandom";
import Hangingout from "./landingpage/hangingout";
import Chilling from "./landingpage/reliabletech";
import DownloadSection from "./landingpage/download";

function App() {
  return (
    <>
      <Hero />
      <InviteOnly />
      <Hangingout />
      <Fandom />
      <Chilling />
      <DownloadSection />
    </>
  );
}

export default App;
