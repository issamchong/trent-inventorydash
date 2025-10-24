import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Item = {
  id: string;
  name: string;
  quantity: number;
  imageId: string;
};

type TopItemsProps = {
  items: Item[];
};

export function TopItems({ items }: TopItemsProps) {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Items</CardTitle>
        <CardDescription>Most stocked items in your inventory.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => {
            const placeholder = imageMap.get(item.imageId);
            return (
              <li key={item.id} className="flex items-center gap-4">
                {placeholder ? (
                   <Image
                    src={placeholder.imageUrl}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-md object-cover"
                    data-ai-hint={placeholder.imageHint}
                  />
                ) : <div className="h-12 w-12 rounded-md bg-muted" />}
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.quantity.toLocaleString()} units</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
