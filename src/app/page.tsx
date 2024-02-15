import Profile from "@/components/profile";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";

export default async function Home() {

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow py-2 px-3">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg"></h3>
        <TopicList />
      </div>
      <Profile />
    </div>
  );
}
