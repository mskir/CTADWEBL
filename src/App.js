import React from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <div className="header">
        <ul>
          <li><a>About</a></li>
          <li> <a>News</a></li>
          <li><a>Contact</a></li>
          <li className="title">
            <WelcomeMessage name="Journey" />
          </li>
        </ul>
      </div>

      <div className="app-container">
        <h1>Props and Styling Demo</h1>

        <div className="containers">
          <ProfileCard
            name="Monkey D. Luffy"
            bio="Monkey D. Luffy is the protagonist in One Piece and captain of the increasingly infamous and powerful Straw Hat Pirates."
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080202-1635462455-unkno.png"
          />

          <ProfileCard
            name="Roronoa Zoro"
            bio="Roronoa Zoro is the swordsman, first member and Vice Captain of the Straw Hat Pirates. He uses the Santoryu-style (Three Sword Style) of sword combat and aims to become the world's greatest swordsman."
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png"
          />

          <ProfileCard
            name="Usopp"
            bio="Usopp is the sniper of the Straw Hat Pirates who is famous for frequently lying. He wants to be a great warrior of the sea."
            imageUrl="https://comicvine.gamespot.com/a/uploads/scale_small/11117/111178336/7080203-3155899631-unkno.png"
          />

          <ProfileCard
            name="Nami"
            bio="Nami is the navigator of the Straw Hat Pirates and a skilled cartographer. She's a lover of money and mikans who dreams of making a map of the world."
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080201-7164581366-unkno.png"
          />

          <ProfileCard
            name="Sanji"
            bio="Sanji Vinsmoke is the cook of the Straw Hat Pirates and lover of all things women. His dream is to find the All Blue of the sea. His bounty is currently 330,000,000 beri"
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434111-473592_sanji_time_skip_1.png"
          />

          <ProfileCard
            name="Nico Robin"
            bio="Nico Robin is the archaeologist of the Straw Hat Pirates, who has the powers of the Bloom-Bloom Devil Fruit. "
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434105-render_nicorobin.png"
          />

          <ProfileCard
            name="Tony Tony Chopper"
            bio="Tony Tony Chopper is the doctor of the Straw Hat Pirates. He was a normal reindeer until he ate the Human-Human Fruit, which allows him to talk and transform."
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434113-chopper_time_skip_2.png"
          />

          <ProfileCard
            name="Franky"
            bio="Franky is the shipwright of the Straw Hat Pirates and a self-made cyborg. He built the Thousand Sunny."
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434115-473629_untitled_2.png"
          />

          <ProfileCard
            name="Brook"
            bio="Soul King, Brook is a member of the Straw Hat Pirates serving as their musician."
            imageUrl="https://comicvine.gamespot.com/a/uploads/square_small/4/47703/2434117-473497_brook_timeskip1.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
