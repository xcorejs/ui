import { x } from "@xstyled/emotion";
import { AnolisProvider, Card } from "anolis-ui";
import { FC } from "react";

const Index: FC = () => {
  return (
    <AnolisProvider>
      <x.div fontSize="xl">Hello</x.div>
      <Card title="Hello">World</Card>
    </AnolisProvider>
  );
};

export default Index;
