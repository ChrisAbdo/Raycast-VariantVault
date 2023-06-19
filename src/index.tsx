import { useState } from "react";
import { Action, ActionPanel, List } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { FADEDOWN, FADEIN, FADEUP, PULLUP, SLIDE, WORDPULLUP } from "./code-snippets/code";

interface Variant {
  name: string;
  id: string;
  code: string;
  preview: string;
}

const variants: Variant[] = [
  {
    name: "Fade Down (Staggered)",
    id: "001",
    code: FADEDOWN,
    preview: "fadedown.gif",
  },
  {
    name: "Fade Up (Staggered)",
    id: "002",
    code: FADEUP,
    preview: "fadeup.gif",
  },
  {
    name: "Multidirection Slide",
    id: "003",
    code: SLIDE,
    preview: "slide.gif",
  },
  {
    name: "Fade In (Staggered)",
    id: "004",
    code: FADEIN,
    preview: "fadein.gif",
  },
  {
    name: "Pull Up (Staggered)",
    id: "005",
    code: PULLUP,
    preview: "pullup.gif",
  },
  {
    name: "Ripple Up (Words)",
    id: "006",
    code: WORDPULLUP,
    preview: "rippleup.gif",
  },
];

export default function Command() {
  const [showingDetail, setShowingDetail] = useState(true);
  const { data, isLoading } = useCachedPromise(() => new Promise<Variant[]>((resolve) => resolve(variants)));

  return (
    <List isLoading={isLoading} isShowingDetail={showingDetail}>
      {data &&
        data.map((variant) => {
          const props: Partial<List.Item.Props> = showingDetail
            ? {
                detail: (
                  <List.Item.Detail
                    markdown={`${variant.name}\n\n![Illustration](${variant.preview})\n\nCODE\n\n\`\`\`jsx\n${variant.code}\n\`\`\``}
                  />
                ),
              }
            : { accessories: [{ text: variant.code }] };

          return (
            <List.Item
              key={variant.id}
              title={variant.name}
              subtitle="Text Variant"
              {...props}
              actions={
                <ActionPanel>
                  <Action.OpenInBrowser url="https://variantvault.vercel.app" />
                  <Action title="Toggle Detail" onAction={() => setShowingDetail(!showingDetail)} />
                </ActionPanel>
              }
            />
          );
        })}
    </List>
  );
}
