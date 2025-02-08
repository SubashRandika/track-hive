import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="flex gap-4 p-11">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="teritary">Teritary</Button>
      <Button disabled>Disabled</Button>
      <Button size="xs">Extra Small</Button>
      <Input />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Themes</SelectLabel>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
