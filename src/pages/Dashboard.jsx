import MainLayout from "../layouts/MainLayout";

import GreetingHeader from "../components/GreetingHeader";
import ThinkingInput from "../components/ThinkingInput";
import PromptPlayground from "../components/PromptPlayground";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-10">
        {/* Greeting Section */}
        <GreetingHeader />

        {/* Thinking Input Area */}
        <ThinkingInput />

        {/* Prompt Playground (replaces templates/recent activity) */}
        <PromptPlayground />
      </div>
    </MainLayout>
  );
}

export default Dashboard;