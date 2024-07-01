import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Product</h1>
        <p className="text-lg text-muted-foreground">
          The best solution for your business needs.
        </p>
      </div>
      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Sign up today and start enjoying the benefits of our SaaS product.
            </p>
            <Button className="w-full">Sign Up</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Index;