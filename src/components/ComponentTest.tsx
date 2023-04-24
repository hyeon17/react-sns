import UserInfo from "@/components/User/UserInfo";
import PostList from "@/components/User/PostList";

interface ComponentTestProps {
  element?: React.ReactNode;
}

function ComponentTest({ element }: ComponentTestProps) {
  return (
    <>{element ?? null}
      <UserInfo />
      <PostList />
    </>
  );
}

export default ComponentTest;
