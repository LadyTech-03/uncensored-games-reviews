import { Link } from "react-router-dom";
import { Star, ExternalLink, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameSiteCardProps {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  rating: number;
  websiteUrl: string;
  featured?: boolean;
}

const GameSiteCard = ({ id, name, logo, shortDescription, rating, websiteUrl, featured }: GameSiteCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-105"
          >
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="h-14 w-14 object-contain rounded-lg"
            />
          </a>
          {featured && (
              <Flame className="h-5 w-5 bg-primary rounded-full p-0.5 text-primary-foreground" />
          )}
        </div>
        
        <div>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
          <CardDescription className="line-clamp-2">
            {shortDescription}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardFooter className="flex gap-3">
        <Link to={`/review/${id}`} className="flex-1">
          <Button className="w-full" variant="default">
            Read Review
          </Button>
        </Link>
        <a 
          href={websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full group/btn">
            Visit Site
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default GameSiteCard;
