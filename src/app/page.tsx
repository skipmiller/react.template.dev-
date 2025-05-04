import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-5xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold mb-6">React Template Dev</h1>
        <p className="text-xl mb-8">A starter template for building React applications</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="mr-4">Learn More</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About This Template</DialogTitle>
              <DialogDescription>
                This template provides a complete foundation for building modern React applications with Next.js, TypeScript, and Shadcn UI components.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>The template includes advanced configuration settings for development and production environments, API routes structure, and integration points for databases and authentication.</p>
            </div>
          </DialogContent>
        </Dialog>
        
        <Button variant="default" size="lg">Get Started</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card>
          <CardHeader>
            <CardTitle>Modern Stack</CardTitle>
            <CardDescription>Next.js, TypeScript, and Tailwind CSS</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Built with Next.js App Router, TypeScript, and modern tools for a great developer experience.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Learn More</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>UI Components</CardTitle>
            <CardDescription>Shadcn UI component library</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Pre-built accessible UI components based on Radix UI primitives and styled with Tailwind CSS.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">View Components</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Type Safety</CardTitle>
            <CardDescription>Full TypeScript integration</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Type safety throughout the application for better code quality and developer experience.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Type Examples</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ready for Extension</CardTitle>
            <CardDescription>Database, Auth, and API routes</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Prepared for adding authentication, database connectivity, and more as your project grows.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Extension Points</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 