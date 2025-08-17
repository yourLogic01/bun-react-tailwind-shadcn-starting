import { type ProfileData } from "@/interfaces";
import profilePhoto from "@/public/images/profile.jpg";

const profileData: ProfileData = {
  name: "Asyifa Maulana",
  description: "Fullstack Developer at ASTECH",
  image: profilePhoto,
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/yourlogic01",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/asyifamaulana1412",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/asyfmaulana/",
    },
  ],
};

export default profileData;
