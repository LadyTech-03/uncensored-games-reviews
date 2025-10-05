import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

const ProsCons = ({ pros, cons }: ProsConsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Pros */}
      <Card className="border-2 border-green-200 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <div className="bg-green-500 p-1 rounded-full">
              <Check className="h-5 w-5 text-white" />
            </div>
            Pros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm text-foreground">{pro}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Cons */}
      <Card className="border-2 border-red-200 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <div className="bg-red-500 p-1 rounded-full">
              <X className="h-5 w-5 text-white" />
            </div>
            Cons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-sm text-foreground">{con}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProsCons;
