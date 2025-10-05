import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import GameSiteCard from "@/components/GameSiteCard";
import SearchBar from "@/components/SearchBar";
import { gamingSites, getFeaturedSites } from "@/data/gamingSites";
import { Flame } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredSites = getFeaturedSites();

  const filteredSites = useMemo(() => {
    if (!searchQuery.trim()) return gamingSites;
    
    const query = searchQuery.toLowerCase();
    return gamingSites.filter(site => 
      site.name.toLowerCase().includes(query) ||
      site.shortDescription.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gaming-light to-background border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold text-foreground leading-tight">
              Top Gaming Sites{" "}
              <span className="text-primary">Reviewed & Rated</span>
            </h1>
            
            <div className="pt-6 flex justify-center">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search gaming sites..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks Section */}
      {!searchQuery && (
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-2 rounded-lg">
              <Flame className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-foreground">
              Hot Picks
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSites.map(site => (
              <GameSiteCard
                key={site.id}
                id={site.id}
                name={site.name}
                logo={site.logo}
                shortDescription={site.shortDescription}
                rating={site.rating}
                websiteUrl={site.websiteUrl}
                featured={site.featured}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Gaming Sites Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-poppins font-bold text-foreground mb-8">
          {searchQuery ? `Search Results (${filteredSites.length})` : "All Gaming Sites"}
        </h2>
        
        {filteredSites.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No gaming sites found matching "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSites.map(site => (
              <GameSiteCard
                key={site.id}
                id={site.id}
                name={site.name}
                logo={site.logo}
                shortDescription={site.shortDescription}
                rating={site.rating}
                websiteUrl={site.websiteUrl}
                featured={site.featured}
              />
            ))}
          </div>
        )}
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

export default Index;
