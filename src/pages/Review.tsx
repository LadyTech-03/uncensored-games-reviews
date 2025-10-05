import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import RatingStars from "@/components/RatingStars";
import ProsCons from "@/components/ProsCons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Gamepad2, DollarSign, Monitor, Star, TrendingUp, Flame } from "lucide-react";
import { getSiteById } from "@/data/gamingSites";

const Review = () => {
  const { id } = useParams<{ id: string }>();
  const site = id ? getSiteById(id) : null;

  if (!site) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gaming-light to-background border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <img 
                src={site.logo} 
                alt={`${site.name} logo`} 
                className="h-24 w-24 object-contain rounded-xl border-2 border-border bg-card p-2"
              />
              
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-poppins font-extrabold text-foreground mb-4">
                  {site.name} Review
                </h1>
                <RatingStars rating={site.rating} size="lg" />
              </div>

              {site.featured && (
                <div className="flex items-center gap-2 bg-primary/10 border-2 border-primary px-4 py-2 rounded-lg">
                  <Flame className="h-5 w-5 bg-primary rounded-full p-0.5 text-primary-foreground" />
                  <span className="font-semibold text-primary">Hot Pick</span>
                </div>
              )}
            </div>

            <a 
              href={site.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="font-bold">
                Visit {site.name}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                {site.overview}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {site.detailedOverview}
              </p>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="font-semibold text-foreground">{site.pricing.model}</span>
                  <p className="text-sm text-muted-foreground mt-1">{site.pricing.details}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="text-sm font-medium text-primary">{site.pricing.value}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {site.platforms.map((platform, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-6 flex items-center gap-2">
              <Gamepad2 className="h-7 w-7 text-primary" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {site.keyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div>
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
              Pros & Cons
            </h2>
            <ProsCons pros={site.pros} cons={site.cons} />
          </div>

          {/* 2 Screenshots section */}
            {site.screenshots.length > 0 && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Screenshots</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {site.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot || "/placeholder.svg"}
                      alt={`${site.name} screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg border"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Performance Ratings */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="h-7 w-7 text-primary" />
                Detailed Ratings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold">User Interface</span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(site.userExperience.interface / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-primary min-w-[3rem] text-right">
                      {site.userExperience.interface.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold">Performance</span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(site.userExperience.performance / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-primary min-w-[3rem] text-right">
                      {site.userExperience.performance.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold">Customer Support</span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(site.userExperience.customerSupport / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-primary min-w-[3rem] text-right">
                      {site.userExperience.customerSupport.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-semibold">Value for Money</span>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(site.userExperience.value / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-primary min-w-[3rem] text-right">
                      {site.userExperience.value.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t-2 border-primary/20">
                  <span className="text-foreground font-bold text-lg">Overall Score</span>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-32 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all"
                        style={{ width: `${(site.rating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-2xl font-bold text-primary min-w-[3rem] text-right">
                      {site.rating}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best For */}
          <Card className="bg-gradient-to-br from-gaming-light to-background border-2 border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-7 w-7 text-primary" />
                Best For
              </h2>
              <ul className="space-y-2">
                {site.bestFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Final Verdict */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Final Verdict
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-6">
                {site.finalVerdict}
              </p>
            </CardContent>
          </Card>

          {/* Ready to try section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to try {site.name}?</h2>
              <Button size="lg" variant="secondary" asChild>
                <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visit {site.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gaming-light mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Top Gaming Sites. All reviews are based on expert analysis and user feedback.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Review;
