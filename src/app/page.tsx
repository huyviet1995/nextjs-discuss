import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Sign Out</div>
      }
      <Profile />
    </div>
  );
}
