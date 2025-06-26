import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div>
      <Button variant="primary" size="xs">
        Click me
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive" size="lg">
        Destructive
      </Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="teritary">Teritary</Button>
      <Input placeholder="Enter your email" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
