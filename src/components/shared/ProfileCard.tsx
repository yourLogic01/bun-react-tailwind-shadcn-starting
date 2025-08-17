import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import type { ProfileData } from "@/interfaces";
import type { JSX } from "react";

type Props = ProfileData;

const ProfileCard = ({ name, description, image, socialMedia }: Props) => {
  const iconMap: Record<string, JSX.Element> = {
    LinkedIn: <Linkedin className="size-4" />,
    GitHub: <Github className="size-4" />,
    Instagram: <Instagram className="size-4" />,
  };

  return (
    <Card className="max-w-md mx-auto p-6 rounded-xl shadow-md bg-white space-y-8">
      {/* Avatar + Info */}
      <div className="flex items-center gap-4">
        <Avatar className="w-14 h-14">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex gap-2 justify-start">
        {socialMedia.map((item) => (
          <Button key={item.name} variant="outline" size="sm" className="gap-1" asChild>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {iconMap[item.name]} {item.name}
            </a>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default ProfileCard;
