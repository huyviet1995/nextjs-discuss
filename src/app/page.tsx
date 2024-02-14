import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in!</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out!</Button>
      </form>
    </div>
  );
}
